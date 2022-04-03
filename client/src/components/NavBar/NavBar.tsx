import { AppBar, Toolbar, styled } from "@mui/material";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "white",
  fontSize: "20px",
  marginLeft: "20px",
  "&:hover": {
    color: "yellow",
    borderBottom: "1px solid white",
  },
});

const NavLinks = styled("div")({
  marginLeft: "10px",
  display: "flex",
});

export const NavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <NavLinks>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/prints/1">Prints</StyledLink>
        </NavLinks>
      </Toolbar>
    </AppBar>
  );
};
