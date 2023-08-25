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
  { name: 'Noah Dutch', location: 'Amsterdam' },
  { name: 'Ava Aussie', location: 'Canberra' },
  { name: 'William Swiss', location: 'Bern' },
  { name: 'Riley Kiwi', location: 'Wellington' },
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
  { name: 'Sebastian Swiss', location: 'Zurich' },
  { name: 'Layla Fado', location: 'Lisbon' },
  { name: 'Jackie Maple', location: 'Montreal' },
  { name: 'Ava Aussie', location: 'Melbourne' },
  { name: 'Leo Lion', location: 'Nairobi' },
  { name: 'Poppy Paddy', location: 'Dublin' },
  { name: 'Archie Aussie', location: 'Sydney' },
  { name: 'Florence French', location: 'Paris' },
  { name: 'Arthur Aussie', location: 'Canberra' },
  { name: 'Daisy Dutch', location: 'Amsterdam' },
  { name: 'Logan Aussie', location: 'Brisbane' },
  { name: 'Freya French', location: 'Paris' },
  { name: 'Theodore Aussie', location: 'Canberra' },
  { name: 'Elsie Dutch', location: 'Amsterdam' },
  { name: 'Finley Aussie', location: 'Canberra' },
  { name: 'Evelyn French', location: 'Paris' },
  { name: 'Gabriel Aussie', location: 'Canberra' },
  { name: 'Isla Dutch', location: 'Amsterdam' },
  { name: 'Harrison Aussie', location: 'Canberra' },
  { name: 'Tarekujjaman Riad', location: 'Dhaka' },
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
      setTimeout(() => setIsVisible(false), 5000) // Hide toast after 7 seconds for better visibility
    }

    const interval = setInterval(showToast, 10000)
    return () => clearInterval(interval)
  }, [])

  if (!isVisible || !toast) return null

  return (
    <div
      className={`z-[100] fixed left-0 bottom-4 bg-gradient-to-r 
      from-blue-500 to-blue-600 dark:from-pink-500 dark:to-pink-600 px-4 py-2 rounded-md shadow-md text-white
      `}
    >
      <span className='text-blue-100 px-2 dark:text-pink-100 font-bold'>
        {toast.name}
      </span>
      from{' '}
      <span className='text-green-200 font-bold'>{toast.location + ' '}</span>
      just joined VaryGen!
      <span className='ml-2'>🎉</span>
    </div>
  )
}

export default UserJoinedToast
