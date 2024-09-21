import { Stack } from "@mui/material";
import Palette from "./Palette";
import { v4 as uuid } from "uuid";

type Props = {
  guessCount: number;
};

const Guesses = ({ guessCount }: Props) => {
  const arrayFromGuessCount = new Array(guessCount);
  return (
    <Stack spacing={1} p={2} alignItems="center">
      {arrayFromGuessCount.fill(null).map(_ => (
        <Palette key={uuid()} />
      ))}
    </Stack>
  );
};

export default Guesses;
