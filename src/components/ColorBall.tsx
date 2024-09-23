import { Box as MuiBox, BoxProps, styled } from "@mui/material";

type ColorBall = {
  bgcolor?: string;
};

const MyBox = (props: BoxProps) => <MuiBox {...props}>{props.children}</MuiBox>;

export const ColorBall = styled(MyBox)(({ bgcolor }: ColorBall) => ({
  width: "clamp(15px, 3rem, 30px)",
  aspectRatio: 1,
  borderRadius: "100%",
  backgroundColor: bgcolor,
  boxShadow:
    "1px 1px 3px rgba(255, 255, 255, 0.4), inset 4px 4px 10px rgba(0,0,0,0.4)",
  transition: "all 120ms ease-in-out",
  "&:hover": {
    boxShadow: "inset 2px 2px 10px rgba(0,0,0,0.4)",
    scale: 1.05,
  },
})) as typeof MuiBox;
