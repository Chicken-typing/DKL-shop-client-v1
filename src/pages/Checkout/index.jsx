import { useState } from "react"
import Cart from "../Cart"
import Shipping from "../../components/Shipping"
import { Link, Outlet, useNavigate } from "react-router-dom"
import Stepper from "../../components/Stepper"
import StepperControl from "../../components/StepperControl"
import { UseContextProvider } from "../../components/StepperContext"
import Payment from "../../components/Payment"



function Checkout() {
  const steps = [
    "Account Information",
    "Personal Details",
    "Payment",
    "Complete",
  ];
  const [currentStep, setCurrentStep] = useState(1);
    const navigate = useNavigate()


    const displayStep = (step) => {
      switch (step) {
        case 1:
  
        case 2:
          return <Shipping/>

        case 3:
          return <Payment />;
        case 4:
      
        default:
      }
    };

    const handleClick = (direction) => {
      let newStep = currentStep;
  
      direction === "next" ? newStep++ : newStep--;
      // check if steps are within bounds
      newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };

  return (
    <div className="mt-10 pt-8 px-20">
           <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10 ">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
    </div>
  )
}

export default Checkout