
import { Link } from 'react-router-dom'
import './ProductBox.css';

function ProductBox({ProductImage, name, price}) {
  return (
    <div>
        <Link to="/products/2" target="_blank" className="product-item text-decoration-none ">
                 <div className="product-img">
                     <img src={ProductImage} alt="0" />
                </div>
                <div className="product-name text-center">{name}</div>
                <div className="product-price text-center">&#8377; {price}</div>
        </Link> 
    </div>
  )
}

export default ProductBox
