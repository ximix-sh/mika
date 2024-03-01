import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import rtlPlugin from "stylis-plugin-rtl";



export default function ProgressMobileStepper() {
  const theme = createTheme({
    palette: {
      background: {
        default: "none",
      },
    },
    direction: "rtl",
  });

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <ThemeProvider theme={theme}>
      <MobileStepper
        variant="progress"
        steps={10}
        position="static"
        activeStep={activeStep}
        stylisPlugins={{ rtlPlugin }}
        sx={{ maxWidth: 400 , flexGrow: 1 }}
        // nextButton={
        //   <Button size="small" onClick={handleNext} disabled={activeStep === 9}>
        //     Next
        //     {theme.direction === "rtl" ? (
        //       <KeyboardArrowLeft />
        //     ) : (
        //       <KeyboardArrowRight />
        //     )}
        //   </Button>
        // }
        // backButton={
        //   <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
        //     {theme.direction === "rtl" ? (
        //       <KeyboardArrowRight />
        //     ) : (
        //       <KeyboardArrowLeft />
        //     )}
        //     Back
        //   </Button>
        // }
      />
    </ThemeProvider>
  );
}
