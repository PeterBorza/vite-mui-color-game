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
    <Stack>
      <Paper elevation={5} sx={{ alignSelf: "start" }}>
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
    </Stack>
  );
};

export default Palette;
