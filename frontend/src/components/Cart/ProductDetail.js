import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../../store/cartActions';
import './Cart.css';


function ProductDetail(props) {
  let stateCart = useSelector(state => state.cart);
  const item = props.props;
  const productId = item[0] -1;
  const quantity = item[1];
  const dispatch = useDispatch();
  // let total =0;

  const products = [
    {
      productName: "Cowboy Bebop",
      price: 3,
      description: "Great no-knead bread fermented in the moonlight overnight for superior flavor. Crust is flawless and the crumb has that old-school lattice.",
      imageURL: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-			    1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      productName: "Karems French Boule ",
      price: 2,
      description: "Traditional French bread from the original master chef, Antoine Karem!!",
      imageURL: "https://images.unsplash.com/photo-1603984042729-a34adc2ac9d0?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-			    1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      productName: "Farmhouse Wheat",
      price: 4,
      description: "Flavorful and Nutritious, makes customers say 'I would gladly spread peanut butter on this bread'",
      imageURL: "https://images.unsplash.com/photo-1533417177250-227597f5b264?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-			    1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      productName: "Smoked Bread",
      price: 3,
      description: "Proprietary technique that can only be purchased here. One of a kind Smoked Bread has a deep smoky flavor that will turn a ham sandwich into a smoked ham sandwich.",
      imageURL: "https://images.unsplash.com/photo-1511629036492-6c07153d3e83?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-			    1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      productName: "Rustic Italian/Ciabatta",
      price:  3,
      description: "Traditional bread of the Italian countryside. an everyday favorite.",
      imageURL: "https://images.unsplash.com/photo-1590346328376-f21c8e5b630e?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-			    1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      productName: "Irish Soda Bread",
      price: 3 ,
      description: "Traditional Irish soda bread. Tastes clean and refreshing, like a biscuit.",
      imageURL: "https://images.unsplash.com/photo-1584471973216-cadfdf0e15e5?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-			    1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      productName: "Rye Campaigne",
      price:  3,
      description: "Country style rye bread from the Alsace-Lorraine region between France and Germany",
      imageURL: "https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-			    1.2.1&auto=format&fit=crop&w=500&q=60",
    }
  ]
  
  const productURL = products[productId].imageURL;
  const productPrice = products[productId].price;

  
  // function cartConverter(array) {
  //   let cartObject = {};
  //   for (let i = 0; i < array.length; i++) {
  //     let currentValue = array[i];
  //     if (cartObject[currentValue] === undefined) {
  //       cartObject[currentValue] = 1;
  //     } else {
  //       cartObject[currentValue] += 1;
  //     }
  //   }
  //   return cartObject;
  // };
  
  // const currentCart = cartConverter(stateCart);
  // console.log("currentCart", currentCart);
  
  const cartPlus = async () => {
    // console.log("plus-button", props.props[0]);
    // currentCart[props.props[0]] += 1;
    await dispatch(cartActions.addQuantity(props.props[0]));
  }

  const cartMinus = async () => {
    // console.log("minus-button", props.props[0]);
    // console.log("cart", stateCart);
    for (let item of stateCart) {
      if (props.props[0] === item) {
        // console.log("item", (item));
        let idx = stateCart.indexOf(item);
        // console.log("item index", stateCart.indexOf(item));
        stateCart.splice(idx, 1);
        
        await dispatch(cartActions.subtractQuantity(stateCart));
        break;
      }
      // console.log("altered-cart", stateCart);
    };
    // console.log("test", test);
  }

  // for (let [key, value] of Object.entries(currentCart)) {
  //   total += (products[key-1].price * value);
  // }

  return (
    <>
      
      <div className="productDetail__product-wrapper">
        <div className="productDetail__product--image">
          <img className="productDetail__image" src={`${productURL}`} width="150" alt="product"/>
        </div>
        <div className="productDetail__product--name">
          {products[productId].productName}
        </div>
        <div className="productDetail__product--description">
            {products[productId].description}
        </div>
        <div className="productDetail__container--money">
          <div className="productDetail__product--price">
            Unit Price: $<span className="cart__money">{products[productId].price}</span>
          </div>
          <div className="productDetail__product--quantity">
            Unit Quantities: <span className="cart__money">{quantity}</span>
          </div>
          <div className="productDetail__product--subtotal">
            Subtotal: $<span className="cart__money">{productPrice * quantity}</span>
          </div>
        </div>
        <div className="productDetail__container--incrementals">
          <button className="productDetail__incremental--plus" onClick={cartPlus}>+</button>
          <button className="productDetail__incremental--minus" onClick={cartMinus}>-</button>
        </div>
      </div>
      
    </>
  )
}

export default ProductDetail;