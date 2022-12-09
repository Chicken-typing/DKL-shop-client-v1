import React, {useState, useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../action";
import { Button, Result } from 'antd';
import { useNavigate } from "react-router-dom";
import { Callbacks } from "jquery";


const style = { layout: "vertical" };

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner, total, callBack}) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const navigate = useNavigate()
  const [paidFor, setPaidFor] = useState(false)
  const [error, setError] = useState(null)
  const handleApprove = (orderID) => {
      setPaidFor(true)
      dispatch(clearCart())
  }
  
  if(error)
  {
    alert(error)
  }
  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);
  if(paidFor)
  {
    
    return <Result
    status="success"
    title="Successfully Purchased Product"
    subTitle="You can go shopping continue and choose your best product."
    extra={[
      <Button key="buy" onClickCapture={() => {
        callBack()
        navigate("/")
      }}>Buy Again</Button>,
    ]}
  />
  }
  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
      onClick={(data, actions) => {
        const hasBought = false
        if(hasBought)
        {
          setError("You has bought it")
          return actions.reject()
        }
        else {
          return actions.resolve()
        }
      } }
        style={style}
        disabled={false}
        forceReRender={[total, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: total,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove = { async (data, action) => {
          const order = await action.order.capture();
          console.log("order", order);

          handleApprove(data.orderID);
      }}
      onCancel={() => {}}
      onError={(err) => {
          setError(err);
          console.log("PayPal Checkout onError", err);
      }}
      />
    </>
  );
};
function PaypaButton({ total, callBack }) {


  const currency = "USD";
  return (
    <PayPalScriptProvider
      options={{
        "client-id": "test",
        components: "buttons",
        currency: "USD",
      }}
    >
      <ButtonWrapper currency={currency} showSpinner={false} total={total} callBack={callBack} />
    </PayPalScriptProvider>
  );
}

export default PaypaButton;
