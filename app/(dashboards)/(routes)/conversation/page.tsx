'use client'

import { MessageSquare } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import Heading from '@/components/heading'

const ConversationPage = () => {
  const form = useForm({
    defaultValues: {
      prompt: '',
    },
  })

  return (
    <div>
      <Heading
        title='Conversation'
        description='Generate text from a given text.'
        Icon={MessageSquare}
        iconColor='text-violet-500'
        iconBgColor='bg-violet-500/10'
      />

      <div className='lg:px-8 px-4'></div>
    </div>
  )
}

export default ConversationPage
