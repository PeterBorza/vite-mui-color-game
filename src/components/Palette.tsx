import { Paper, Stack } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const Palette: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Paper elevation={8}>
      <Stack
        direction="row"
        spacing={1}
        p={1}
        sx={{
          bgcolor: "primary.main",
          borderRadius: 1,
        }}
      >
        {children}
      </Stack>
    </Paper>
  );
};

export default Palette;
