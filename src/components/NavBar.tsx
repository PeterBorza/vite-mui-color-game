import {
  AppBar,
  Button,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import w1 from "../assets/images/w1.jpg";

const NAV_TITLE = "Color Code";

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
            <Typography
              fontFamily="Luckiest Guy, sans serif"
              variant="h2"
              letterSpacing={4}
              sx={{
                backgroundImage: `url(${w1})`,
                backgroundSize: "cover",
                backgroundClip: "text",
                "&,-webkit-background-clip": "text",
                color: "transparent",
              }}
            >
              {NAV_TITLE}
            </Typography>
            <Button variant="contained">New Game</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default NavBar;
