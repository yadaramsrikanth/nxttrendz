// Write your code here
import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })
      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-heading">
              Order Total:<span className="total-bill"> Rs {total} /-</span>
            </h1>
            <p className="items-count-in-cart">
              {cartList.length} Items in Cart
            </p>
            <button type="button" className="summary-button">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
