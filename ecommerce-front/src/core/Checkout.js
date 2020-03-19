import React, { useState, useEffect } from 'react';
import { getProducts, getBraintreeClientToken, processPayment, createOrder } from './apiCore';
import { emptyCart } from './cartHelpers';
import Card from './Card';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom';
// // import "braintree-web"; // not using this package
// import DropIn from 'braintree-web-drop-in-react';
  
const Checkout=({products})=>{
//  return<div>{JSON.stringify(products)}</div>
 const getTotal = () => {
    return products.reduce((currentValue, nextValue) => {
        return currentValue + nextValue.count * nextValue.price;
    }, 0);
};
const showCheckout = () => {
    return isAuthenticated() ? (
     //   <div>{showDropIn()}</div>
     <button className=" btn btn-success">Checkout</button>
    ) : (
        <Link to="/signin">
            <button className="btn btn-primary">Sign in to checkout</button>
        </Link>
    );
};
return (
    <div>
        <h2>Total:₹ {getTotal()}</h2>
        {/* {showLoading(data.loading)}
        {showSuccess(data.success)}
        {showError(data.error)}*/}
        {showCheckout()} 
    </div>
);

}
export default Checkout