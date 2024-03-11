import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Container from "@mui/material/Container";
import emailjs from "@emailjs/browser"; // Importing emailjs

export default function Forms() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({});
  const [postleCodeStatus, setPostleCodeStatus] = React.useState("");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    const formData = new FormData(event.target);
    console.log("form data is :", formData);
    e.preventDefault();
    // Send form data using emailjs
    emailjs
      .sendForm(
        "service_zeeclk9",
        "template_xilyknl",
        // formData,
        e.target,
        "yXwSR8QMCKsepcsyG"
      )
      .then(
        (result) => {
          console.log("email data send:", result.text);
        },
        (error) => {
          console.log("error send data to email:", error.text);
        }
      );
  };

  const steps = [
    {
      label: "Compare health insurance companies 2024",
      content: (
        <div>
          <TextField
            id="outlined-basic"
            label="Postal code"
            variant="outlined"
            onChange={(e) => handleInputChange(e)}
          />

          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel>Current health insurance</InputLabel>
            <Select
              label="Are you already insured in Switzerland?"
              value={postleCodeStatus}
              // onChange={(e) => setPostleCodeStatus(e.target.value)}
              onChange={(e) => handleInputChange(e)}>
              <MenuItem value="Current health insurance">
                Current health insurance
              </MenuItem>
              <MenuItem value="No current insurance">
                No current insurance
              </MenuItem>
              <MenuItem value="Agrisano">Agrisano</MenuItem>
              <MenuItem value="AMB Assurances SA">AMB Assurances SA</MenuItem>
              <MenuItem value="Aquilana">Aquilana</MenuItem>
              <MenuItem value="Arcosana (CSS)">Arcosana (CSS)</MenuItem>
              <MenuItem value="Assura">Assura</MenuItem>
              <MenuItem value="Atupri">Atupri</MenuItem>
              <MenuItem value="Avenir (Groupe Mutuel)">
                Avenir (Groupe Mutuel)
              </MenuItem>
              <MenuItem value="Birchmeier">Birchmeier</MenuItem>
              <MenuItem value="Compact">Compact</MenuItem>
              <MenuItem value="Concordia">Concordia</MenuItem>
              <MenuItem value="CSS">CSS</MenuItem>
              <MenuItem value="Easy Sana (Groupe Mutuel)">
                Easy Sana (Groupe Mutuel)
              </MenuItem>
              <MenuItem value="EGK">EGK</MenuItem>
              <MenuItem value="hermit">hermit</MenuItem>
              <MenuItem value="Galenos">Galenos</MenuItem>
              <MenuItem value="Glarus">Glarus</MenuItem>
              <MenuItem value="Helsana">Helsana</MenuItem>
            </Select>
          </FormControl>
        </div>
      ),
    },
    {
      label: "ALL SWISS HEALTH INSURANCE COMPANIES",
      content: (
        <div>
          {/* <Typography variant="h6">PERSONAL DETAILS</Typography> */}
          <Typography variant="h6">
            ALL SWISS HEALTH INSURANCE COMPANIES
          </Typography>
          <Typography>You will find the right offer for you with us</Typography>
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel>Are you already insured in Switzerland?</InputLabel>
            <Select
              label="Are you already insured in Switzerland?"
              onChange={(e) => handleInputChange(e)}>
              <MenuItem value="yes">Yes, I am already insured</MenuItem>
              <MenuItem value="no">No, new in Switzerland</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel>Which situation applies to you?</InputLabel>
            <Select
              onChange={(e) => handleInputChange(e)}
              label="Which situation applies to you?">
              <MenuItem value="family">Family</MenuItem>
              <MenuItem value="pair">Pair</MenuItem>
              <MenuItem value="individual">Individual</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel>
              Same insurance model? (family doctor, Telmed, etc)
            </InputLabel>
            <Select
              onChange={(e) => handleInputChange(e)}
              label="Same insurance model?">
              <MenuItem value="entireFamily">Entire family same model</MenuItem>
              <MenuItem value="individualModels">Individual models</MenuItem>
            </Select>
          </FormControl>
          <Typography>
            We need birthday & gender to calculate your individual premium
          </Typography>
          <FormControl component="fieldset" fullWidth margin="normal">
            <InputLabel>Gender</InputLabel>
            <Select onChange={(e) => handleInputChange(e)} label="Gender">
              <MenuItem value="male">Herr</MenuItem>
              <MenuItem value="female">Frau</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="First Name"
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={(e) => handleInputChange(e)}
          />
          <TextField
            label="Last Name"
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={(e) => handleInputChange(e)}
          />
          <TextField
            label="Birth Year"
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={(e) => handleInputChange(e)}
          />
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel>Franchise</InputLabel>
            <Select label="Franchise" onChange={(e) => handleInputChange(e)}>
              <MenuItem value="withAccident">with accident</MenuItem>
              <MenuItem value="withoutAccident">without accident</MenuItem>
            </Select>
          </FormControl>
          <Button variant="outlined" color="primary">
            + Add person
          </Button>
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel>Model</InputLabel>
            <Select label="Model" onChange={(e) => handleInputChange(e)}>
              <MenuItem value="standard">Standard</MenuItem>
              <MenuItem value="familyDoctor">Family doctor</MenuItem>
              <MenuItem value="hmo">HMO</MenuItem>
              <MenuItem value="moreModels">More models</MenuItem>
            </Select>
          </FormControl>
        </div>
      ),
    },
    {
      label: "PERSONAL DETAILS",
      content: (
        <div>
          <Typography variant="h6">
            ALL SWISS HEALTH INSURANCE COMPANIES
          </Typography>
          <Typography>You will find the right offer for you with us</Typography>
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel>Are you already insured in Switzerland?</InputLabel>
            <Select
              label="Are you already insured in Switzerland?"
              onChange={(e) =>
                handleInputChange(e, "Are you already insured in Switzerland?")
              }>
              <MenuItem value="yes">Yes, I am already insured</MenuItem>
              <MenuItem value="no">No, new in Switzerland</MenuItem>
            </Select>
          </FormControl>
          {/* Other form fields */}
        </div>
      ),
    },
  ];

  React.useEffect(() => {
    console.log("form data state:", formData);
  }, [formData]);

  return (
    <div>
      <Container maxWidth="md">
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            textAlign: "center",
            marginTop: 15,
          }}>
          Compare health insurance companies 2024
        </Typography>
        <Typography variant="body1" paragraph sx={{ textAlign: "center" }}>
          Compare the services and premiums of approved health insurance
          companies in Switzerland.
        </Typography>
      </Container>
      <Box sx={{ maxWidth: 600, margin: "auto", mt: 4 }}>
        <Typography
          sx={{
            border: "3px solid lightblue",
            borderRadius: "50%",
            width: "fit-content",
            padding: "0.5rem",
            textAlign: "center",
          }}>
          Step {activeStep + 1} of {steps.length}
        </Typography>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                <form onSubmit={handleSubmit}>
                  {step.content}
                  <Box sx={{ mt: 2 }}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}>
                        Back
                      </Button>
                      <Button
                        type="submit"
                        variant="contained"
                        // onClick={handleNext}
                        onClick={
                          activeStep === steps.length - 1
                            ? handleSubmit
                            : handleNext
                        }
                        sx={{ mt: 1, mr: 1 }}>
                        {activeStep === steps.length - 1
                          ? "STORE OFFERS"
                          : "Further"}
                      </Button>
                    </div>
                  </Box>
                </form>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </div>
  );
}
