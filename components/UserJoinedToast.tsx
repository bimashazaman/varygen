'use client'

import { useEffect, useState } from 'react'

type User = {
  name: string
  location: string
}

const namesAndLocations: User[] = [
  { name: 'Bimu Yorker', location: 'New York' },
  { name: 'Jany Brit', location: 'London' },
  { name: 'Carlos Janeiro', location: 'Rio de Janeiro' },
  { name: 'Priyanka Desi', location: 'Mumbai' },
  { name: 'Ming Bei', location: 'Beijing' },
  { name: 'Fatima Nile', location: 'Cairo' },
  { name: 'Oliver Roo', location: 'Sydney' },
  { name: 'Chika Naija', location: 'Lagos' },
  { name: 'Sophia Grecian', location: 'Athens' },
  { name: 'Alejandro Mex', location: 'Mexico City' },
  { name: 'Nadia Ruski', location: 'Moscow' },
  { name: 'Hiroshi Yen', location: 'Tokyo' },
  { name: 'Amina Kenyan', location: 'Nairobi' },
  { name: 'Sam Maple', location: 'Toronto' },
  { name: 'Emma Eiffel', location: 'Paris' },
  { name: 'Liam Irish', location: 'Dublin' },
  { name: 'Isabella Iberia', location: 'Madrid' },
  { name: 'Lucas Paulo', location: 'Sao Paulo' },
  { name: 'Mia Roman', location: 'Rome' },
  { name: 'Ethan Lion', location: 'Singapore' },
  { name: 'Amelia Kiwi', location: 'Wellington' },
  { name: 'Aiden Windy', location: 'Chicago' },
  { name: 'Charlotte Berliner', location: 'Berlin' },
  { name: 'Jackson Joburg', location: 'Johannesburg' },
  { name: 'Olivia Magyar', location: 'Budapest' },
  { name: 'Benjamin Norsk', location: 'Oslo' },
  { name: 'Sophie Belgian', location: 'Brussels' },
  { name: 'Daniel Bosphorus', location: 'Istanbul' },
  { name: 'Lily Polish', location: 'Warsaw' },
  { name: 'Matthew K-Pop', location: 'Seoul' },
  { name: 'Chloe Thai', location: 'Bangkok' },
  { name: 'David Dane', location: 'Copenhagen' },
  { name: 'Grace Tango', location: 'Buenos Aires' },
  { name: 'Joseph Persian', location: 'Tehran' },
  { name: 'Zoe RedRiver', location: 'Hanoi' },
  { name: 'Samuel Malay', location: 'Kuala Lumpur' },
  { name: 'Ella Pinoy', location: 'Manila' },
  { name: 'James Finn', location: 'Helsinki' },
  { name: 'Scarlett Scot', location: 'Edinburgh' },
  { name: 'Andrew Inca', location: 'Lima' },
  { name: 'Madison Andes', location: 'Santiago' },
  { name: 'Alex Pharaoh', location: 'Cairo' },
  { name: 'Layla Fado', location: 'Lisbon' },
  { name: 'Nicholas Bohemian', location: 'Prague' },
  { name: 'Bella Viking', location: 'Stockholm' },
  { name: 'Oscar Koala', location: 'Brisbane' },
  { name: 'Lucy Kiwi', location: 'Auckland' },
  { name: 'Adam Emirati', location: 'Dubai' },
  { name: 'Evie Angel', location: 'Los Angeles' },
  { name: 'Henry Table', location: 'Cape Town' },
  { name: 'Eva Harbour', location: 'Hong Kong' },
  { name: 'Nathan Java', location: 'Jakarta' },
  { name: 'Mila Taipei', location: 'Taipei' },
  { name: 'Theo Bund', location: 'Shanghai' },
  { name: 'Hannah Taj', location: 'Delhi' },
]

const UserJoinedToast: React.FC = () => {
  const [toast, setToast] = useState<User | null>(null)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const showToast = () => {
      const randomUser =
        namesAndLocations[Math.floor(Math.random() * namesAndLocations.length)]
      setToast(randomUser)
      setIsVisible(true)
      setTimeout(() => setIsVisible(false), 5000) // Hide toast after 5 seconds for better visibility
    }

    const interval = setInterval(showToast, 8000)
    return () => clearInterval(interval)
  }, [])

  if (!isVisible || !toast) return null

  return (
    <div
      className={`z-[100] fixed left-0 bottom-4 bg-gradient-to-r from-pink-800 to-purple-600 dark:from-blue-700 dark:to-blue-950 text-white p-4 rounded-tr rounded-br shadow-lg transform transition-transform duration-300 animate-accordion-down px-5 font-thin`}
    >
      <span className='text-blue-200 px-2 dark:text-pink-300 font-bold'>
        {toast.name}
      </span>
      from <span className='text-green-300 font-bold'>{toast.location}</span>{' '}
      just joined VaryGen and using Unlimited AI tools.
      <span className='ml-2'>🎉</span>
    </div>
  )
}

export default UserJoinedToast
