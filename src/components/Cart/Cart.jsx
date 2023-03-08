import "./Cart.css";
import { useSelector } from "react-redux";
import { removeItem } from "../../pages/redux/CartReducer";
import { useDispatch } from "react-redux";

const Cart = ({ open, setOpen }) => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  console.log(products);
  return (
    <>
      {open && (
        <>
          <div className="overlay"></div> {/* add the overlay */}
          <div className={`drawer${open ? ' open' : ''}`}>
            <div className="text-container">
              <h2 className="">YOUR TRUNK</h2>
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                className="icon-close"
                viewBox="0 0 24.64 24.64"
                onClick={handleClose}
              >
                <path d="M24.64 2l-2-2-10.32 10.31L2 0 0 2l10.31 10.32L0 22.64l2 2 10.32-10.31 10.32 10.31 2-2-10.31-10.32L24.64 2z"></path>
              </svg>
            </div>
            {products?.map((state) => (
              <div className="item" key={state.id}>
                <div>
                  <img src={state.imageUrl} alt="" />
                </div>
                <div>
                  <h1>{state.title} </h1>
                </div>
                <div>
                  <h1 className="total-products">qty. {state.quantity}</h1>
                </div>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  viewBox="0 0 24.64 24.64"
                  className="delete-btn-cart"
                  onClick={() => dispatch(removeItem(state.id))}
                >
                  <path d="M24.64 2l-2-2-10.32 10.31L2 0 0 2l10.31 10.32L0 22.64l2 2 10.32-10.31 10.32 10.31 2-2-10.31-10.32L24.64 2z"></path>
                </svg>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Cart;

