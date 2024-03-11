import React from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

import {
  LocalHospital,
  DirectionsCar,
  Healing,
  SportsTennis,
  EmojiPeople,
  FitnessCenter,
  Flight,
  ThreeDRotation,
} from "@mui/icons-material";

export default function InsuranceSection() {
  const iconSize = 50;

  return (
    <div>
      <Container maxWidth="md">
        <Typography
          variant="h5"
          gutterBottom
          sx={{ textAlign: "center", marginTop: 15 }}>
          Additional insurance
        </Typography>
        <Typography variant="body1" paragraph sx={{ textAlign: "center" }}>
          After you have chosen the basic insurance model, it is time to think
          about which additional services you would like to take advantage of.
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <LocalHospital sx={{ fontSize: iconSize }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Medication"
                    secondary="Cover up to 90% of the costs"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DirectionsCar sx={{ fontSize: iconSize }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Transport"
                    secondary="Up to 100% coverage of all transport and rescue costs"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Healing sx={{ fontSize: iconSize }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Alternative medicine"
                    secondary="Up to 100% reimbursement of costs when using alternative medicine"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SportsTennis sx={{ fontSize: iconSize }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Sport"
                    secondary="Up to 500 at the sports club"
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <EmojiPeople sx={{ fontSize: iconSize }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Braces"
                    secondary="Up to 20,000 for correcting the position of your teeth"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenter sx={{ fontSize: iconSize }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Fitness"
                    secondary="Up to 1,100.- on a fitness subscription!"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Flight sx={{ fontSize: iconSize }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Abroad"
                    secondary="Up to 100% coverage of all treatments abroad"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ThreeDRotation sx={{ fontSize: iconSize }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Glasses"
                    secondary="Up to 800.- on the glasses!"
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
