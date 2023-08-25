'use client'

import * as z from 'zod'
import axios from 'axios'
import { MessageSquare } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { ChatCompletionRequestMessage } from 'openai'

import { BotAvatar } from '@/components/bot-avatar'
import { Heading } from '@/components/heading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { cn } from '@/lib/utils'
import { Loader } from '@/components/loader'
import { UserAvatar } from '@/components/user-avatar'
import { Empty } from '@/components/ui/empty'
import { useProModal } from '@/hooks/use-pro-modal'

import { formSchema } from './constants'

const ConversationPage = () => {
  const router = useRouter()
  const proModal = useProModal()
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content: values.prompt,
      }
      const newMessages = [...messages, userMessage]

      const response = await axios.post('/api/conversation', {
        messages: newMessages,
      })
      setMessages((current) => [...current, userMessage, response.data])

      form.reset()
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen()
      } else {
        toast.error('Something went wrong.')
      }
    } finally {
      router.refresh()
    }
  }

  return (
    <div className='container mx-auto py-8'>
      <Heading
        title='Conversation'
        description='Our most advanced conversation model.'
        icon={MessageSquare}
        iconColor='text-violet-500 dark:text-violet-300'
        bgColor='bg-violet-500/10 dark:bg-violet-500/20'
      />
      <div className='px-4 lg:px-8 dark:text-gray-200 mt-8'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='rounded-lg shadow-md w-full p-6 grid grid-cols-12 gap-4'
          >
            <FormField
              name='prompt'
              render={({ field }) => (
                <FormItem className='col-span-12 lg:col-span-10'>
                  <FormControl>
                    <Input
                      className='border-2 border-violet-300 focus:border-violet-500 rounded-lg w-full px-4 py-2 dark:bg-gray-800'
                      disabled={isLoading}
                      placeholder='What is the meaning of life?'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              className='col-span-12 lg:col-span-2 w-full bg-violet-500 hover:bg-violet-600 transition-colors duration-200 dark:bg-violet-400 text-white rounded-lg'
              type='submit'
              disabled={isLoading}
            >
              Generate
            </Button>
          </form>
        </Form>
        <div className='space-y-4 mt-8'>
          {isLoading && (
            <div className='p-8 rounded-lg shadow-md w-full flex items-center justify-center bg-muted dark:bg-gray-700'>
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label='No conversation started.' />
          )}
          <div className='flex flex-col-reverse gap-y-6'>
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  'p-6 w-full flex items-start gap-x-6 rounded-lg shadow-md',
                  message.role === 'user'
                    ? 'bg-white dark:bg-gray-800 border dark:border-gray-700'
                    : 'bg-muted dark:bg-gray-700'
                )}
              >
                {message.role === 'user' ? <UserAvatar /> : <BotAvatar />}
                <p className='text-base' style={{ whiteSpace: 'pre-line' }}>
                  {message.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConversationPage
