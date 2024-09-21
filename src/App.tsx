import { Container, CssBaseline, Grid2, Stack } from "@mui/material";
import { NavBar } from "components";
import Guesses from "components/Guesses";
import Palette from "components/Palette";
import Panel from "components/Panel";
import { COLORS } from "constants";

const App = () => {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Container
        maxWidth="xl"
        sx={{
          mt: 2,
          width: 1100,
          height: 600,
          maxHeight: "100%",
          borderRadius: 2,
        }}
      >
        <Grid2 container spacing={2} width="100%" height="100%">
          <Panel title="Game">
            <Stack spacing={2} p={2} alignItems="center">
              <Palette colors={COLORS} />
            </Stack>
          </Panel>
          <Panel title="Guesses">
            <Guesses guessCount={6} />
          </Panel>
          <Panel title="Results">Work in progress</Panel>
        </Grid2>
      </Container>
    </>
  );
};

export default App;
