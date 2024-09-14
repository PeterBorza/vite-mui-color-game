import { CssBaseline, Stack, Toolbar } from "@mui/material";
import { ColorBall, NavBar } from "components";
import { CONTENT_HEIGHT } from "utils/constants";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Toolbar />
      <Stack spacing={4} px={2} sx={{ height: CONTENT_HEIGHT }}>
        <NavBar />
        <Stack
          direction="row"
          spacing={2}
          p={2}
          sx={{ bgcolor: "primary.main", borderRadius: 1 }}
          alignSelf="start"
        >
          <ColorBall />
          <ColorBall />
          <ColorBall />
          <ColorBall />
          <ColorBall />
          <ColorBall />
        </Stack>
      </Stack>
    </>
  );
};

export default App;
