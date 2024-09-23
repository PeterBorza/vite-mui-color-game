import {
  AppBar,
  Button,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "./Logo";

const NavBar = () => {
  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            flexGrow={1}
          >
            <Logo />
            <Button variant="contained">
              <Typography noWrap>New Game</Typography>
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default NavBar;
