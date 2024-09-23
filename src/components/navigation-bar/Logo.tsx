import { Typography } from "@mui/material";
import { NAV_TITLE } from "constants";
import w1 from "../../assets/images/w1.jpg";

const Logo = () => {
  return (
    <Typography
      fontFamily="Luckiest Guy, sans serif"
      variant="h2"
      letterSpacing={4}
      sx={{
        backgroundImage: `url(${w1})`,
        backgroundSize: "cover",
        backgroundClip: "text",
        "&WebkitBackgroundClip": "text",
        color: "transparent",
        textTransform: "uppercase",
        fontSize: { md: 60, sm: 45, xs: 40 },
      }}
      noWrap
    >
      {NAV_TITLE}
    </Typography>
  );
};

export default Logo;
