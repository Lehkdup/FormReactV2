import React from "react";
import { Typography, Button, Grid } from "@mui/material";

const BannerPage = () => {
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      style={{ backgroundColor: "#f0f0f0", padding: "20px" }}>
      <Grid item xs={12} sm={6}>
        <img
          // src="your_image_url_here"
          alt="Health Insurance"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <div>
          <Typography variant="h4" gutterBottom>
            Health insurance in Switzerland
          </Typography>
          <Typography variant="body1" paragraph>
            It is good that competition among health insurance companies in
            Switzerland is strong, as this can help ensure that the quality of
            services remains high and costs for those insured are kept low. It
            is important that people in Switzerland compare their premiums to
            ensure they choose the health insurance company that is right for
            them and do not pay too much for their insurance.
          </Typography>
          <Button variant="contained" color="primary" href="/compare">
            Compare now
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default BannerPage;
