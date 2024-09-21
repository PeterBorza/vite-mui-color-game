import { Grid2, Grid2Props, Paper, styled, Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";

type Props = {
  title: string;
};

const StyledPanel = styled((props: Grid2Props) => (
  <Grid2 {...props} size={{ xs: 12, md: 4 }} component="section">
    {props.children}
  </Grid2>
))(({ theme }) => ({
  boxShadow: "inset 7px 7px 14px #bababa,inset -7px -7px 14px #ffffff",
  height: "100%",
  padding: theme.spacing(0.5),
  backgroundColor: "linear-gradient(145deg, #f0f0f0, #cacaca)",
  borderRadius: theme.spacing(1),
}));

const Panel: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <StyledPanel>
      <Paper
        elevation={2}
        sx={{
          textAlign: "center",
          bgcolor: "transparent",
          borderRadius: 0,
        }}
      >
        <Typography fontWeight="fontWeightBold" variant="h6">
          {title}
        </Typography>
      </Paper>
      {children}
    </StyledPanel>
  );
};

export default Panel;
