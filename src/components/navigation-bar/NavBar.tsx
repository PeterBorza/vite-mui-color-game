import { AppBar, Button, Stack, Toolbar, Typography, styled } from "@mui/material";
import { FC } from "react";
import { NEW_GAME } from "utils";

import Logo from "./Logo";

type Props = {
  resetGame: () => void;
};

const NavBar: FC<Props> = ({ resetGame }) => {
  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Stack direction="row" justifyContent="space-around" alignItems="center" flexGrow={1}>
            <Logo />
            <Button onClick={resetGame} variant="contained">
              <Typography noWrap>{NEW_GAME}</Typography>
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default NavBar;
