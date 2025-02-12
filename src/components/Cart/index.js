import Header from '../Header'
import { CartContainer , CartLogo } from './styledComponent'
const Cart = () => (
  <>
    <Header />
    <CartContainer>
      <CartLogo
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        alt="cart"
        loading='lazy'
      />
    </CartContainer>
  </>
)

export default Cart