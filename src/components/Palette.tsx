import { Paper, Stack } from "@mui/material";
import { ColorBall } from "./ColorBall";
import { FC } from "react";
import { ColorCode } from "constants";
import { v4 as uuid } from "uuid";

type Props = {
  colors?: ColorCode[];
  emptySlotsCount?: number;
};

const Palette: FC<Props> = ({ colors, emptySlotsCount = 4 }) => {
  const fillSlots = () => colors ?? new Array(emptySlotsCount).fill(null);

  return (
    <Paper elevation={8}>
      <Stack
        direction="row"
        spacing={2}
        p={1}
        sx={{
          bgcolor: "primary.main",
          borderRadius: 1,
        }}
      >
        {fillSlots().map(color => (
          <ColorBall key={uuid()} bgcolor={color} />
        ))}
      </Stack>
    </Paper>
  );
};

export default Palette;
