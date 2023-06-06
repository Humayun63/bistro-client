import React from 'react';
import SectionTitle from '../../../components/SectionTititle/SectionTitle';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../../hooks/useCart';


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_TOKEN)
const Payment = () => {
    const [,cart] = useCart()
    const total = cart.reduce((sum, item) => sum + item.price ,0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <SectionTitle
                heading={'payment'}
                subHeading={'Please process'}
            ></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;