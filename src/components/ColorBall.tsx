import { Box as MuiBox, BoxProps, styled } from "@mui/material";

type ColorBall = {
  bgcolor?: string;
};

const MyBox = (props: BoxProps) => <MuiBox {...props}>{props.children}</MuiBox>;

export const ColorBall = styled(MyBox)(({ bgcolor }: ColorBall) => ({
  position: "relative",
  width: "clamp(2rem, 3vw + 5px, 3rem)",
  aspectRatio: 1,
  borderRadius: "100%",
  backgroundColor: bgcolor,
  boxShadow:
    "1px 1px 3px rgba(255, 255, 255, 0.4), inset 4px 4px 10px rgba(0,0,0,0.4)",
  transition: "all 100ms ease-in-out",
  "&:after": {
    content: '""',
    borderRadius: "100%",
    position: "absolute",
    zIndex: -1,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
    opacity: 0,
    WebkitTransition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
    transition: "all 100ms cubic-bezier(0.165, 0.84, 0.44, 1)",
  },
  "&:hover": {
    WebkitTransform: "scale(1.05, 1.05)",
    transform: "scale(1.05, 1.05)",
  },
})) as typeof MuiBox;
