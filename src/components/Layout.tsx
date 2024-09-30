import { Container, Grid2 } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          height: { lg: 700, md: 600, sm: 350, xs: 270 },
          mt: 1,
          borderRadius: 1,
          p: 1,
        }}
      >
        <Grid2 container spacing={2} width="100%" height="100%">
          {children}
        </Grid2>
      </Container>
    </>
  );
};

export default Layout;
