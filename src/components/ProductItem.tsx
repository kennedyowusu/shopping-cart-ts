import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from '../features/slices/checkoutSlice'

const ProductItem = (items: {
  id: number
  name: string
  image: string
  price: number
}) => {
  const { id, name, image, price } = items

  const dispatch = useAppDispatch()
  const quantity = useAppSelector((state) => state.checkout.items)

  const handleRemoveItem = () => {
    dispatch(removeItem({ id, name, image, price }))
  }

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity({ id, name, image, price }))
  }

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity({ id, name, image, price }))
  }

  const selectedItem = quantity.find((item) => item.id === id)
  const totalPrice: number = selectedItem
    ? selectedItem.price * (selectedItem.quantity || 0)
    : 0

  return (
    <div
      className='flex justify-between items-center mb-4
    border-b-2 border-white pb-4
    '
    >
      <div className='flex items-center gap-4'>
        <img
          src={image}
          alt={name}
          className='w-20 h-20 object-contain object-center
        rounded-md shadow-md overflow-hidden relative hover:shadow-xl transition-all duration-300 ease-in-out border-2 border-white
          '
        />
        <div className='flex flex-col'>
          <div className='font-bold text-white'>{name}</div>
          <div className='font-bold text-white'>
            {/* $
            {quantity.find((item) => item.id === id)?.price *
              quantity.find((item) => item.id === id)?.quantity} */}
            ${totalPrice}
          </div>
          <div>
            <div className='flex items-center gap-4'>
              <div
                className='btn cursor-pointer
              border-2 border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black duration-300 ease-in-out
              '
                onClick={handleDecreaseQuantity}
              >
                -
              </div>
              <div className='text-white'>
                {quantity.find((item) => item.id === id)?.quantity}
              </div>
              <div
                className='btn cursor-pointer
              border-2 border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black duration-300 ease-in-out
              '
                onClick={handleIncreaseQuantity}
              >
                +
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='btn cursor-pointer
      border-2 border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black duration-300 ease-in-out
      '
        onClick={handleRemoveItem}
      >
        Remove
      </div>
    </div>
  )
}

export default ProductItem
