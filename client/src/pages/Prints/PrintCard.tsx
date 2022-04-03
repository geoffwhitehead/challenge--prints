import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  IconButtonProps,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { Print } from "../../api/types";
import { red } from "@mui/material/colors";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: (theme as any).transitions.create("transform", {
    duration: (theme as any).transitions.duration.shortest,
  }),
}));

interface PrintCardProps {
  print: Print;
}

export const PrintCard: React.FC<PrintCardProps> = ({ print }) => {
  console.log("print", print);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const defaultAvatarBGColor = red[500];
  return (
    <Box
      sx={{
        "&:hover": {
          color: "yellow",
          borderBottom: "1px solid white",
        },
      }}
    >
      <Card
        sx={{
          maxWidth: 345,
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: print.colors[0] || defaultAvatarBGColor }}
              // sx={{ bgcolor: red[500] }}
              aria-label="recipe"
            >
              {print.verificationlevel}
            </Avatar>
          }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title={`${print.title} - ${print.dated}`}
          subheader={print.people.map(({ name }) => name).join(", ")}
        />
        <CardMedia
          component="img"
          // height="194"
          image={print.primaryimageurl}
          alt={print.title}
        />
        <CardContent>
          {["Rank", "Description", "Provenance", "Culture", "Technique"].map(
            (id) => {
              return (
                <>
                  <Typography variant="body2" color="text.primary">
                    {id}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {print[id.toLowerCase()]}
                  </Typography>
                </>
              );
            }
          )}
        </CardContent>
        {/* <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions> */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>People:</Typography>

            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableBody>
                  {print.people.map((person) =>
                    Object.keys(person).map((key) => {
                      return (
                        <TableRow
                          key={person.personid}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {key}
                          </TableCell>
                          <TableCell align="right">{person[key]}</TableCell>
                        </TableRow>
                      );
                    })
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            {/* <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography> */}
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};
