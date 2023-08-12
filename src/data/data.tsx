import shoe1 from '../assets/images/png/shoe18.png'
import shoe2 from '../assets/images/png/shoe11.png'
import shoe3 from '../assets/images/png/shoe12.png'
import shoe4 from '../assets/images/png/shoe13.png'
import shoe5 from '../assets/images/png/shoe14.png'
import shoe6 from '../assets/images/png/shoe15.png'
import shoe7 from '../assets/images/png/shoe16.png'
import shoe8 from '../assets/images/png/shoe17.png'
import shoe9 from '../assets/images/png/shoe7.png'

interface Products {
  id: number
  name: string
  price: number
  image: string
  description: string
  quantity?: number
}

export const data: Products[] = [
  {
    id: 1,
    name: 'Maverick Oxford',
    price: 100,
    image: shoe1,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Rebel Boots',
    price: 110,
    image: shoe2,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    quantity: 1,
  },
  {
    id: 3,
    name: 'Phoenix Boots',
    price: 120,
    image: shoe3,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    quantity: 1,
  },
  {
    id: 4,
    name: 'Dapper Shoes',
    price: 130,
    image: shoe4,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    quantity: 1,
  },
  {
    id: 5,
    name: 'Nomad Runners',
    price: 140,
    image: shoe5,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    quantity: 1,
  },
  {
    id: 6,
    name: 'Summit Boots',
    price: 150,
    image: shoe6,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    quantity: 1,
  },
  {
    id: 7,
    name: 'Streetwise Shoes',
    price: 160,
    image: shoe7,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    quantity: 1,
  },
  {
    id: 8,
    name: 'Nomad Boots',
    price: 170,
    image: shoe8,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    quantity: 1,
  },
  {
    id: 9,
    name: 'Vagabond shoes',
    price: 180,
    image: shoe9,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    quantity: 1,
  },
]
