import { useState } from "react"
import { Stepper } from "@mantine/core"
import Cart from "../Cart"
import Shipping from "../../components/Shipping"


function StyledStepper(props) {
    return (
      <Stepper
        styles={{
          stepBody: {
            display: "none"
          },
  
          step: {
            padding: 0
          },
  
          stepIcon: {
            borderWidth: 4
          },
  
          separator: {
            marginLeft: -2,
            marginRight: -2,
            height: 10
          }
        }}
        {...props}
      />
    )
  }
function Checkout() {

    const [active, setActive] = useState(1)

  return (
    <div className="mt-10 pt-8 px-20">
        <StyledStepper active={active} onStepClick={setActive}>
      <Stepper.Step label="Step 1" description="Sign In" allowStepClick={false}>
      </Stepper.Step>
      
      <Stepper.Step label="Step 2" description="Shipping">
        <Shipping/>
      </Stepper.Step>

      <Stepper.Step label="Step 3" description="Payment">

      </Stepper.Step>

      <Stepper.Step label="Step 4" description="Place Order">

      </Stepper.Step>
    </StyledStepper>
    </div>
  )
}

export default Checkout