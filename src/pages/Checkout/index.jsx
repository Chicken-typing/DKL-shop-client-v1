import { useState } from 'react';
import { Stepper } from '@mantine/core';
import Shipping from '../../components/Shipping';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../../action/Shipping';
import Payment from '../../components/Payment';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Radio } from 'antd';
import {  Group } from '@mantine/core';

import PlaceOrder from '../../components/PlaceOrder';


function Checkout() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  const dispatch = useDispatch()
  const shipping = useSelector(state => state.ShippingInfo.shippingAddress)
  const handle = () => {
    nextStep()
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
          <PlaceOrder onClickBack={prevStep} onClickNext={nextStep}/>
        </Stepper.Step>

        <Stepper.Completed>
          Completed, click back button to get to previous step
        
        </Stepper.Completed>

      </Stepper>

      {/* <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button variant='default' onClick={handle} type='submit'>Next step</Button>
      </Group> */}
     
    </div>
  )
}

export default Checkout