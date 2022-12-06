import { useState } from 'react';
import { Stepper } from '@mantine/core';
import Shipping from '../../components/Shipping';
import { useDispatch, useSelector } from 'react-redux';
import Payment from '../../components/Payment';
import PlaceOrder from '../../components/PlaceOrder';
import PreviewOrder from '../../components/PreviewOrder';
import { useNavigate } from 'react-router';




function Checkout() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  const navigate = useNavigate()
  const editPayment = () => {
    setActive(2)
    navigate('payment')

  }
  const editInfo = () => {
    setActive(1)
    navigate('shippingAddress')
  }
  const handleEdit = {
    editPayment: editPayment,
    editInfo: editInfo  
    
  }
  return (
    <div className='mt-10 pt-8 px-20'>
       
       <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="First step" description="Create an account" allowStepSelect={active > 0}>
          Step 1 content: Create an account
        </Stepper.Step>

        <Stepper.Step label="Second step" description="Verify email" allowStepSelect={active > 1}>
          <Shipping onClick={nextStep}/>
        </Stepper.Step>

        <Stepper.Step label="Third step" description="Get full access" allowStepSelect={active > 2}>
          <Payment onClickBack={prevStep} onClickNext={nextStep}/>
        </Stepper.Step>

        <Stepper.Step label="Final step" description="Get full access" allowStepSelect={active > 3}>
          <PlaceOrder onClickBack={prevStep} onClickNext={nextStep} handleEdit={handleEdit} />
        </Stepper.Step>

        <Stepper.Completed>
          <PreviewOrder/>
        
        </Stepper.Completed>

      </Stepper>
     
    </div>
  )
}

export default Checkout