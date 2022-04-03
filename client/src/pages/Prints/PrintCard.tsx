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
}));

interface RowProps {
  label: string;
  text: string;
}

const Label = styled("span")({
  fontWeight: "bold",
});

export const Row: React.FC<RowProps> = ({ label, text }) => {
  return (
    <Typography variant="body2" color="text.secondary">
      <Label>{label}: </Label>
      {text}
    </Typography>
  );
};

interface PrintCardProps {
  print: Print;
}

export const PrintCard: React.FC<PrintCardProps> = ({ print }) => {
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
      <Card>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor:
                  print.colors?.[Math.round(print.colors.length / 2)]?.color ||
                  defaultAvatarBGColor,
              }}
              aria-label="recipe"
            >
              {print.verificationlevel}
            </Avatar>
          }
          title={`${print.title} - ${print.dated}`}
          subheader={print.people.map(({ name }) => name).join(", ")}
        />
        <CardMedia
          component="img"
          image={print.primaryimageurl}
          alt={print.title}
        />
        <CardContent>
          {[
            "Rank",
            "Description",
            "Dated",
            "Provenance",
            "Culture",
            "Technique",
          ].map((id) => (
            <Row label={id} text={print[id.toLowerCase()]} />
          ))}
        </CardContent>
        <CardActions disableSpacing>
          <Typography variant="subtitle2" sx={{ paddingLeft: 1 }}>
            Authors
          </Typography>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            data-testid="author-button"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {print.people.map((person) => {
              return (
                <Box sx={{ paddingBottom: 3 }}>
                  <Typography variant="subtitle1">{person.name}</Typography>
                  {["Role", "Birthplace", "Gender", "DisplayDate"].map((id) => (
                    <Row label={id} text={person[id.toLowerCase()]} />
                  ))}
                </Box>
              );
            })}
          </CardContent>
        </Collapse>
        <CardContent sx={{ padding: "0 !important" }}>
          <Box
            sx={{
              height: 25,
              width: "100%",
              display: "flex",
              flexDirection: "row",
              padding: 0,
            }}
          >
            {print.colors.map((color) => {
              return (
                <Box
                  sx={{ bgcolor: color.color, height: "100%", width: "100%" }}
                />
              );
            })}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
