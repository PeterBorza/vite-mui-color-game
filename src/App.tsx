import { CssBaseline, Stack } from "@mui/material";
import { Layout, NavBar, Palette, Panel, Sortable } from "components";
import { useColors } from "context";
import { PHASES } from "utils";

const App = () => {
  const { colors, setColors } = useColors();

  return (
    <>
      <CssBaseline />
      <NavBar resetGame={() => setColors(colors)} />
      <Layout>
        <Panel title={PHASES.GAME}>
          <Stack spacing={2} p={2} alignItems="center">
            <Palette>
              <Sortable sortItems={colors} setSortItems={setColors} />
            </Palette>
          </Stack>
        </Panel>
        <Panel title={PHASES.GUESSES} />
        <Panel title={PHASES.RESULTS} />
      </Layout>
    </>
  );
};

export default App;
