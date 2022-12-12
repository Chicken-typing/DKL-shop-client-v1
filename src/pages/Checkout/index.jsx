import { useState } from 'react';
import { Stepper } from '@mantine/core';
import Shipping from '../../components/Shipping';
import { useDispatch, useSelector } from 'react-redux';
import Payment from '../../components/Payment';
import PlaceOrder from '../../components/PlaceOrder';
import PreviewOrder from '../../components/PreviewOrder';
import { useNavigate } from 'react-router';




function Checkout() {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  const navigate = useNavigate()
  const editPayment = () => {
    setActive(1)
    navigate('payment')

  }
  const editInfo = () => {
    setActive(0)
    navigate('shippingAddress')
  }
  const handleEdit = {
    editPayment: editPayment,
    editInfo: editInfo  
    
  }
  return (
    <div className='mt-10 pt-8 px-20'>
       
       <Stepper active={active} onStepClick={setActive} breakpoint="sm">

        <Stepper.Step label="Second step" description="Shipping Information" allowStepSelect={active > 0}>
          <Shipping onClick={nextStep}/>
        </Stepper.Step>

        <Stepper.Step label="Third step" description="Payment Method" allowStepSelect={active > 1}>
          <Payment onClickBack={prevStep} onClickNext={nextStep}/>
        </Stepper.Step>

        <Stepper.Step label="Final step" description="PlaceOrder" allowStepSelect={active > 2}>
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