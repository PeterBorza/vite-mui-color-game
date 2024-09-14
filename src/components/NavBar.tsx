import { AppBar, Toolbar } from "@mui/material";

const NAV_TITLE = "Color Code(work in progress)";

const NavBar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>{NAV_TITLE}</Toolbar>
    </AppBar>
  );
};

export default NavBar;
