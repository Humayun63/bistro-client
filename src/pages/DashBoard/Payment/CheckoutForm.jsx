import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';

const CheckoutForm = ({ price }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [cardError, setCardError] = useState('')
  const [axiosSecure] = useAxiosSecure()
  const { user } = useAuth()
  const [clientSecret, setClientSecret] = useState('')
  const [processing, setProcessing] = useState(false)
  const [transactionId, setTransactionId] = useState('')

  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { price })
      .then(res => {
        setClientSecret(res.data.clientSecret)
      })
  }, [price])

  console.log(clientSecret)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)
    if (card == null) {
      return
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if (error) {
      setCardError(error.message)
    } else {
      console.log(paymentMethod);
    }
    setProcessing(true)
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || 'anonymous',
            email: user?.email || 'unknown',
          }
        }
      }
    )
    setProcessing(false)
    if (confirmError) {
      console.log(confirmError);
    }
    console.log(paymentIntent);

    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn-primary my-4 btn' type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {
        cardError &&
        <p className='text-red-500'>{cardError}</p>
      }
      {
        transactionId &&
        <p className='text-green-600 text-2xl'>Success! Your ID is: ${transactionId}</p>
      }
    </>

  );
};

export default CheckoutForm;