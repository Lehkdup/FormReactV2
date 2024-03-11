import { Box, Typography } from "@mui/material";

import React from "react";
import GuideCards from "../../components/GuideCards";
import Information from "../../components/Information";
import SearchField from "../../components/SearchField";
import SuitInsurance from "../../components/SuitInsurance";
import Forms from "../forms";

const GuidePage = () => {
  return (
    <>
      <Box
        style={{
          display: "flex",
          mt: "30px",
          // width: "100%",

          alignItems: "center",
          flexDirection: "column",
        }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}>
          <Typography
            sx={{
              fontSize: { lg: "40px", md: "35px", sm: "30px", xs: "30px" },
              fontWeight: "800",
              lineHeight: "1.1",
              color: "#3f3f3f",
              textAlign: "center",
            }}>
            SWISS INSURANCE GUIDE
          </Typography>
          <Typography
            sx={{
              fontSize: { lg: "26px", md: "22px", xs: "22px" },
              fontWeight: "900",
              textAlign: "center",
              mt: "20px",
              // lineHeight: "1.2",
              color: "#3f3f3f",
              letterSpacing: "-0.005rem",
            }}>
            Simple, transparent and digital
          </Typography>
        </Box>
        <SearchField />
        <Forms />
        <GuideCards />
        <div style={{ marginTop: 20 }}>
          <SuitInsurance />
        </div>
        <Information />
      </Box>
    </>
  );
};

export default GuidePage;
