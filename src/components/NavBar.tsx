import { AppBar, styled, Toolbar } from "@mui/material";

const NAV_TITLE = "Color Code(work in progress)";

const NavBar = () => {
  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>{NAV_TITLE}</Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default NavBar;
