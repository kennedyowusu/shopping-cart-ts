import { addItem } from '../features/slices/checkoutSlice'
import { useAppDispatch } from '../hooks/hooks'

const Product = (data: {
  id: number
  name: string
  image: string
  price: number
}) => {
  const dispatch = useAppDispatch()

  const { id, name, image, price } = data

  const handleAddToCart = () => {
    dispatch(addItem({ id, name, image, price }))
  }

  return (
    <div
      className='bg-grey h-[400px] flex flex-col justify-center rounded-md
    shadow-md overflow-hidden relative hover:shadow-xl transition-all duration-300 ease-in-out
    '
      key={id}
    >
      <div
        className='
        mx-auto
      '
      >
        <img
          src={image}
          alt={name}
          className='
          w-full h-80 object-cover object-center
        '
        />
      </div>
      <div className='flex justify-between gap-12 mx-5'>
        <div className='flex flex-col'>
          <div className='font-bold'>{name}</div>
          <div className='font-bold'>${price}</div>
        </div>
        <div className='btn cursor-pointer' onClick={handleAddToCart}>
          Add to Cart
        </div>
      </div>
    </div>
  )
}

export default Product
