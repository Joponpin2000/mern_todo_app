// import React, { Fragment } from 'react';
// import { connect } from 'react-redux';
// import { productQuantity, clearProduct } from '../actions/productQuantity';

// function Cart({ basketProps, productQuantity, clearProduct }) {

//     let productsInCart = [];

//     Object.keys(basketProps.products).forEach(function (item) {
//         if (basketProps.products[item].inCart) {
//             productsInCart.push(basketProps.products[item]);
//         }
//     })

//     productsInCart = productsInCart.map((product, index) => {
//         return (
//             <Fragment key={index}>
//                 <i className="fas fa-remove" onClick={() => clearProduct(product.name)}></i>
//                 <div className="product">
//                     {product.name}
//                     ${product.price}
//                     <div>
//                         <i className="fas fa-minus" onClick={() => productQuantity('decrease', product.name)}></i>
//                         {product.numbers}
//                         <i className="fas fa-plus" onClick={() => productQuantity('increase', product.name)}></i>
//                     </div>
//                     total - {product.numbers * product.price}
//                 </div>
//             </Fragment>
//         )
//     })

//     return (
//         <div>
//             {productsInCart}
//         </div>
//     )
// }

// const mapStateToProps = state => ({
//     basketProps: state.basketState
// });

// export default connect(mapStateToProps, { productQuantity, clearProduct })(Cart);