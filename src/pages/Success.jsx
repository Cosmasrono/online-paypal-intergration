import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { CLIENT_ID } from "../Config/Config";
import SignOutPage from "../Components/SignOutPage";

const products = [
  
  {
    id: 2,
    name: "Shoe 1",
    image: "https://cdn.pixabay.com/photo/2021/08/15/06/54/sunflower-6546993_1280.jpg",
    price: 310,
  },
  {
    id: 3,
    name: "Shoe 2",
    image: "https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990_640.jpg",
    price: 600,
  },
  
  {
    id: 4,
    name: "Shoe 3",
    image: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
    price: 249,
  },

  {
    id: 5,
    name: "Shoe 4",
    image: "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_640.jpg",
    price: 222,
  },


  {
    id: 6,
    name: "Shoe 5",
    image: "https://cdn.pixabay.com/photo/2016/10/07/13/36/tangerines-1721590_640.jpg",
    price: 490,
  },


  {
    id: 7,
    name: "Shoe 6",
    image: "https://cdn.pixabay.com/photo/2015/08/05/09/55/mens-shoes-875948_640.jpg",
    price: 360,
  },


  {
    id: 8,
    name: "Shoe 7",
    image: "https://cdn.pixabay.com/photo/2016/10/28/11/57/tic-tac-toe-1777859_640.jpg",
    price: 400,
  },


  {
    id: 9,
    name: "Shoe 8",
    image: "https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_640.jpg",
    price: 215,
  },


  {
    id: 10,
    name: "Shoe 9",
    image: "https://cdn.pixabay.com/photo/2016/02/17/15/37/laptop-1205256_640.jpg",
    price: 200,
  },


  {
    id: 11,
    name: "Shoe 2",
    image: "https://cdn.pixabay.com/photo/2017/09/01/03/47/fantasy-2702997_640.jpg",
    price: 250,
  },


  {
    id: 12,
    name: "Shoe 2",
    image: "https://cdn.pixabay.com/photo/2016/11/30/15/23/apples-1873078_640.jpg",
    price: 125,
  },
];

const Checkout = () => {
  const [show, setShow] = useState(null); // Store the ID of the product with the PayPalButtons displayed
  const [success, setSuccess] = useState(false);
  const [orderID, setOrderID] = useState(null); // Store the order ID after successful payment
  const [purchasedProducts, setPurchasedProducts] = useState([]); // Store the IDs of the products that have been purchased

  const createOrder = (data, actions) => {
    const currentProduct = products.find((product) => product.id === show);

    return actions.order.create({
      purchase_units: [
        {
          description: currentProduct.name,
          amount: {
            currency_code: "USD",
            value: currentProduct.price,
          },
        },
      ],
    }).then((orderID) => {
      setOrderID(orderID);
      return orderID;
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);

      // Add the ID of the purchased product to the 'purchasedProducts' state
      setPurchasedProducts((prevPurchasedProducts) => [...prevPurchasedProducts, show]);
    });
  };

  useEffect(() => {
    if (success) {
      alert("Payment successful!!");
      console.log("Order successful. Your order id is--", orderID);
    }
  }, [success, orderID]);

  return (
   <div>
    <SignOutPage />
     
    <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
   
      <div
        style={{
          display: "flex",
          flexDirection: "row", // Display products in a row
          flexWrap: "wrap", // Allow wrapping when container width is exceeded
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{ flex: "1 0 300px", margin: "10px" }}
            className="flex items-center justify-center flex-col hover:scale-105"
          >
            <div>
              <img src={product.image} alt={product.name} style={{ maxWidth: "100%", height: "auto" }} />
            </div>
            <div>
              <h1>{product.name}</h1>
              <p>${product.price}</p>
            </div>
            <div>
              <button
                type="submit"
                onClick={() => setShow(product.id)}
                disabled={purchasedProducts.includes(product.id) || success || orderID}
                className="bg-blue-600 p-2 m-3 rounded-md"
              >
                {purchasedProducts.includes(product.id) ? "Already Purchased" : "Buy now"}
              </button>
            </div>
            {show === product.id && (
              <div>
                <PayPalButtons
                  style={{ layout: "vertical" }}
                  createOrder={createOrder}
                  onApprove={onApprove}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </PayPalScriptProvider></div>
  );
};

export default Checkout;
