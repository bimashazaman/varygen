'use client'

import * as z from 'zod'
import axios from 'axios'
import { Newspaper } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { ChatCompletionRequestMessage } from 'openai'

import { BotAvatar } from '@/components/bot-avatar'
import { Heading } from '@/components/heading'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { cn } from '@/lib/utils'
import { Loader } from '@/components/loader'
import { UserAvatar } from '@/components/user-avatar'
import { Empty } from '@/components/ui/empty'
import { useProModal } from '@/hooks/use-pro-modal'

import { formSchema } from './constants'

const CoverLetter = () => {
  const router = useRouter()
  const proModal = useProModal()
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
      tone: '',
      wordCount: '',
      applicantType: '',
    },
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content: `Generate a ${values.tone} tone cover letter for a ${values.applicantType} applicant. The letter should be approximately ${values.wordCount} words long, with paragraphs separated by blank lines. Here are the specifics: ${values.prompt}`,
      }
      const newMessages = [...messages, userMessage]

      const response = await axios.post('/api/conversation', {
        messages: newMessages,
      })
      setMessages((current) => [...current, response.data])

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
    <div className='container mx-auto py-8 dark:bg-gray-900'>
      <Heading
        title='Cover Letter Generator'
        description='Generate a cover letter for your next job application.'
        icon={Newspaper}
        iconColor='text-orange-500 dark:text-orange-300'
        bgColor='bg-orange-500/10 dark:bg-orange-500/20'
      />
      <div className='px-4 lg:px-8 dark:text-gray-200 mt-8'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='rounded-lg shadow-md w-full p-6 grid grid-cols-6 gap-4'
          >
            <FormField
              name='prompt'
              render={({ field }) => (
                <FormItem className='col-span-12 lg:col-span-10'>
                  <FormControl>
                    <Textarea
                      className='border-2 border-orange-300 focus:border-orange-500 rounded-lg w-full px-4 py-2 dark:bg-gray-800'
                      disabled={isLoading}
                      placeholder='Paste your job description or proposal here.'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name='tone'
              render={({ field }) => (
                <FormItem className='col-span-6 lg:col-span-3'>
                  <FormControl>
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue>{field.value} tone</SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='formal'>Formal</SelectItem>
                        <SelectItem value='casual'>Casual</SelectItem>
                        <SelectItem value='unique'>Unique</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name='applicantType'
              render={({ field }) => (
                <FormItem className='col-span-6 lg:col-span-3'>
                  <FormControl>
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue>{field.value} applicant</SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='team'>Team</SelectItem>
                        <SelectItem value='individual'>Individual</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name='wordCount'
              render={({ field }) => (
                <FormItem className='col-span-6 lg:col-span-3'>
                  <FormControl>
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue>{field.value} words</SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='10'>10 words</SelectItem>
                        <SelectItem value='50'>50 words</SelectItem>
                        <SelectItem value='100'>100 words</SelectItem>
                        <SelectItem value='200'>200 words</SelectItem>
                        <SelectItem value='300'>300 words</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              className='col-span-12 w-full bg-orange-500 hover:bg-orange-600 transition-colors duration-200 dark:bg-orange-400 text-white rounded-lg'
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

export default CoverLetter
