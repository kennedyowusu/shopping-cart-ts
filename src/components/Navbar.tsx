import { FiShoppingBag } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { openCheckout } from '../features/slices/checkoutSlice'

const Navbar = () => {
  const [scroll, setScroll] = useState(0)

  const dispatch = useAppDispatch()
  const quantity = useAppSelector((state) => state.checkout.items)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY)
    })
  }, [])

  const handleCheckoutToggle = () => {
    dispatch(openCheckout())
  }

  return (
    <nav
      className={` bg-grey ${
        scroll > 20 ? 'bg-grey shadow-lg' : ''
      } fixed top-0 left-0 w-full z-20`}
    >
      <div className='flex items-center justify-between relative container py-4 px-2 mx-auto'>
        {/* <Link to='/'> */}
        <div className='font-bold text-2xl text-slate-500'>Shopping Cart</div>
        {/* </Link> */}
        <div className='relative cursor-pointer flex justify-between items-center gap-4'>
          <FiShoppingBag
            className='text-3xl opacity-80'
            onClick={handleCheckoutToggle}
          />
          <div className='absolute top-1 left-4 w-4 h-4 bg-red-600 text-white text-xs flex justify-center items-center rounded-full'>
            {quantity.reduce((acc, item) => {
              return acc + item.quantity
            }, 0)}
          </div>

          <div className='btn hidden md:block'>Sign In</div>
          <div className='btn hidden md:block'>Register</div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
