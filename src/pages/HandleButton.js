import React from 'react'
import Footer from './pages/Footer';
import Header from "./pages/Header";
import ProgressMobileStepper from "../ProgressMobileStepper"
const HandleButton = () => {
    const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div>
        <Header onHandleBack={handleBack} />
        <Footer onHandleNext={handleNext}/>
        <ProgressMobileStepper activeStep={activeStep}/>
    </div>
  )
}

export default HandleButton