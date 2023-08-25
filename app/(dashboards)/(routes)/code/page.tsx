'use client'

import * as z from 'zod'
import axios from 'axios'
import { Code } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import ReactMarkdown from 'react-markdown'
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

const CodePage = () => {
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

      const response = await axios.post('/api/code', { messages: newMessages })
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
    <div className=' text-gray-900 dark:text-gray-100 py-6'>
      <Heading
        title='Code Generation'
        description='Generate code using descriptive text.'
        icon={Code}
        iconColor='text-green-700 dark:text-green-300'
        bgColor='bg-green-700/10 dark:bg-green-700/20'
      />
      <div className='px-4 lg:px-8'>
        <div className='border-b border-gray-200 dark:border-gray-600'>
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
                        className='border-2 border-green-600 focus:border-green-700 rounded-lg w-full px-4 py-2 dark:bg-gray-800'
                        disabled={isLoading}
                        placeholder='Simple toggle button using react hooks.'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className='col-span-12 lg:col-span-2 w-full bg-green-700 hover:bg-green-600 text-white'
                type='submit'
                disabled={isLoading}
                size='icon'
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className='space-y-4 mt-4'>
          {isLoading && (
            <div className='p-8 rounded-lg w-full flex items-center justify-center bg-muted dark:bg-gray-700'>
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label='No conversation started.' />
          )}
          <div className='flex flex-col-reverse gap-y-4'>
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  'p-8 w-full flex items-start gap-x-8 rounded-lg',
                  message.role === 'user'
                    ? 'bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-800'
                    : 'bg-muted dark:bg-gray-700'
                )}
              >
                {message.role === 'user' ? <UserAvatar /> : <BotAvatar />}
                <ReactMarkdown
                  components={{
                    pre: ({ node, ...props }) => (
                      <div className='overflow-auto w-full my-2 bg-black/10 dark:bg-gray-900 p-2 rounded-lg lg:px-2'>
                        {' '}
                        <div className='flex justify-end'>
                          <Button
                            className='text-xs'
                            size='icon'
                            onClick={() => {
                              navigator.clipboard.writeText(
                                message.content || ''
                              )
                              toast.success('Copied to clipboard.')
                            }}
                          >
                            Copy
                          </Button>
                        </div>
                        <pre {...props} />
                      </div>
                    ),
                    code: ({ node, ...props }) => (
                      <code
                        className='bg-black/10 dark:bg-gray-900 rounded-lg p-1'
                        {...props}
                      />
                    ),
                  }}
                  className='text-sm overflow-hidden leading-7'
                >
                  {message.content || ''}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodePage
