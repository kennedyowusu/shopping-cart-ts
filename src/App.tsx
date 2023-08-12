import Navbar from './components/Navbar'
import ProductContainer from './components/ProductContainer'
import Checkout from './components/Checkout'
import Footer from './components/Footer'
import { useAppSelector } from './hooks/hooks'
import { selectIsCheckoutOpen } from './features/slices/checkoutSlice'

function App() {
  const isCheckoutOpen = useAppSelector(selectIsCheckoutOpen)

  return (
    <div className='font-body'>
      <Navbar />
      <ProductContainer />
      {isCheckoutOpen && <Checkout />}
      <Footer />
    </div>
  )
}

export default App
