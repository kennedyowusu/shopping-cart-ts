import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FiShoppingBag } from 'react-icons/fi'
import { BsTrash3 } from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { openCheckout, clearCart } from '../features/slices/checkoutSlice'
import ProductItem from './ProductItem'

const Checkout = () => {
  const dispatch = useAppDispatch()
  const { items } = useAppSelector((state) => state.checkout)

  const handleCheckoutToggle = () => {
    dispatch(openCheckout())
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className='flex col'>
      <div className='bg-transparent fixed z-30 left-0 top-0 w-full h-screen'>
        <div className='h-full bg-slate-500 sm:w-[40rem] min-w-[15rem] overflow-y-auto'>
          <div className='p-6 flex flex-col'>
            <div
              className='flex items-center justify-start cursor-pointer'
              onClick={handleCheckoutToggle}
            >
              <AiOutlineCloseCircle className='text-2xl text-white rounded-full border-2 mr-2' />
              <div className='flex justify-between items-center w-full'>
                <div className='text-lg md:text-xl font-bold text-white select-none'>
                  Close
                </div>
                <div className=' text-white font-bold text-lg md:text-xl flex justify-center items-center '>
                  <FiShoppingBag className='text-2xl text-white mr-2' /> (
                  {items.reduce((acc, item) => {
                    return acc + item.quantity
                  }, 0)}
                  )
                </div>
              </div>
            </div>

            <div className='mt-8'>
              {items.length === 0 ? (
                <div className='2xl uppercase text-center text-white font-bold'>
                  Your cart is empty
                </div>
              ) : (
                items.map((item) => <ProductItem key={item.id} {...item} />)
              )}
            </div>
          </div>
          <div className='mx-5'>
            <div className='flex justify-between items-center mb-5'>
              <div className='text-white font-bold text-lg md:text-xl'>
                Total Amount: $
                {items.reduce((acc, item) => {
                  return acc + item.price * item.quantity
                }, 0)}
              </div>
              <div className='text-white font-bold text-lg md:text-xl flex justify-between'>
                Total Items: {items.length}
              </div>
            </div>

            {items.length !== 0 && (
              <div className='flex justify-between items-center'>
                <div
                  className='btn cursor-pointer
                    border-2 border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black duration-300 ease-in-out
                    '
                >
                  Checkout
                </div>

                <div className='btn cursor-pointer'>
                  <BsTrash3
                    className='text-xl text-white'
                    onClick={handleClearCart}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
