import "./ProductPopup.css";
// import CloseIcon from "../../assets/ClosePopup/close.jpeg";
import AddToCartIcon from "../../assets/AddToCartIcon/cart_8t6kp9u3x5i4_512.png";

type ProductPopupProps = {
  id?: string;
  image: any;
  name: any;
  description: any;
  ingredients: any;
  price: any;
  closePopup: any;
};

function ProductPopup(props: ProductPopupProps) {
  return (
    <div className="product-popup-container">
      <div className="product-popup-overlay" onClick={props.closePopup}></div>
      <div className="product-popup-content">
        {/* <img
          src={CloseIcon}
          alt="Close Popup"
          className="close-button"
          onClick={props.closePopup}
        /> */}
        {/* <div className="information-container"> */}
        <div className="product-popup-left-side">
          {" "}
          <img src={props.image} alt={props.name} className="product-image" />
          <h3 className="product-price">{props.price} $</h3>
        </div>
        <div className="product-popup-right-side">
          <h1 className="product-name-pu">{props.name}</h1>
          <h3 className="product-description-title">Description</h3>
          <p className="product-description">{props.description}</p>
          <h3 className="product-description-title">Ingredients</h3>
          <p className="product-description">{props.ingredients}</p>
          <div className="add-to-cart-button-location">
            <button className="add-to-cart-button">
              <img
                className="AddToCartIcon"
                src={AddToCartIcon}
                alt="AddToCartIcon"
              />
              Add to Cart
            </button>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default ProductPopup;
