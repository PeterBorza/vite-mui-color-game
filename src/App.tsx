import { CssBaseline, Paper, Stack } from "@mui/material";
import { ColorBall, NavBar } from "components";

const App = () => {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Stack spacing={4} p={2}>
        <Paper elevation={5} sx={{ alignSelf: "start" }}>
          <Stack
            direction="row"
            spacing={2}
            p={2}
            sx={{
              bgcolor: "primary.main",
              borderRadius: 1,
            }}
          >
            <ColorBall bgcolor="amber.main" />
            <ColorBall bgcolor="red.main" />
            <ColorBall bgcolor="blue.main" />
            <ColorBall bgcolor="green.main" />
            <ColorBall bgcolor="lightGreen.main" />
            <ColorBall bgcolor="lightBlue.main" />
          </Stack>
        </Paper>
      </Stack>
    </>
  );
};

export default App;
