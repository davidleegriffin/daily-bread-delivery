// import './Product.css';

function ProductDetail(props) {
  const product = props.props;
  
  return (
    <div className="productDetail__product-wrapper">
      {product[0]}{product[1]}
    </div>
  )
}

export default ProductDetail;