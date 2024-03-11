import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

export default function HospitalInsuranceCards() {
  return (
    <Container maxWidth="md" sx={{ marginTop: 10 }}>
      <Typography variant="h5" gutterBottom>
        Choice of hospital insurance
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">Generally</Typography>
              <Typography variant="body1" paragraph>
                Waiting times
              </Typography>
              <Typography variant="body1" paragraph>
                No free choice of primary treating doctor
              </Typography>
              <Typography variant="body1" paragraph>
                No free choice of a friendly doctor
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">Semi-private</Typography>
              <Typography variant="body1" paragraph>
                Free choice of primary treating doctor
              </Typography>
              <Typography variant="body1" paragraph>
                Free choice of a friendly doctor
              </Typography>
              <Typography variant="body1" paragraph>
                Entitlement to a twin room
              </Typography>
              <Typography variant="body1" paragraph>
                Right to a second opinion
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">Private</Typography>
              <Typography variant="body1" paragraph>
                No waiting times
              </Typography>
              <Typography variant="body1" paragraph>
                Primary access to attending physicians and specialists
              </Typography>
              <Typography variant="body1" paragraph>
                Entitlement to a single bed room
              </Typography>
              <Typography variant="body1" paragraph>
                Many comfort privileges (e.g. larger menu, medical massages)
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
