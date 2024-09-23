import { horizontalListSortingStrategy } from "@dnd-kit/sortable";
import { Container, CssBaseline, Grid2, Stack } from "@mui/material";
import { NavBar, Palette, Sortable } from "components";
import Panel from "components/Panel";
import { COLORS } from "constants";

const App = () => {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Container
        maxWidth="lg"
        sx={{
          height: { lg: 700, md: 600, sm: 350, xs: 270 },
          mt: 1,
          borderRadius: 2,
          p: 1,
        }}
      >
        <Grid2 container spacing={2} width="100%" height="100%">
          <Panel title="Game">
            <Stack spacing={2} p={2} alignItems="center">
              <Palette>
                <Sortable
                  sortItems={COLORS as string[]}
                  sortingStrategy={horizontalListSortingStrategy}
                />
              </Palette>
            </Stack>
          </Panel>
          <Panel title="Guesses"></Panel>
          <Panel title="Results"></Panel>
        </Grid2>
      </Container>
    </>
  );
};

export default App;
