'use client'

import * as z from 'zod'
import axios from 'axios'
import { Book } from 'lucide-react'
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

import { formSchema, languages } from './constants'

const Story = () => {
  const router = useRouter()
  const proModal = useProModal()
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      theme: '',
      setting: '',
      length: '',
      characters: '',
      languages: '',
    },
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content: `Generate a story in ${values.languages} with the theme ${values.theme}, set in ${values.setting}. The story should have approximately ${values.length} words and involve these characters: ${values.characters}.`,
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
    <div className='container mx-auto py-8 px-0 dark:bg-gray-900'>
      <Heading
        title='Story Generator'
        description='Generate a story with the theme, setting, length, and characters of your choice.'
        icon={Book}
        iconColor='text-blue-500 dark:text-blue-300'
        bgColor='bg-blue-500/10 dark:bg-blue-500/20'
      />
      <div className='px-0 lg:px-8 dark:text-gray-200 mt-8'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='rounded-lg shadow-md w-full p-6 space-y-5 gap-4'
          >
            <FormField
              name='theme'
              render={({ field }) => (
                <FormItem className='col-span-12 lg:col-span-6 '>
                  <FormControl>
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className='border-2 border-blue-300 focus:border-blue-500 rounded-lg w-full px-4 py-2 dark:bg-gray-800'>
                        <SelectValue>
                          Theme: {field.value || 'Select one'}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='Adventure'>Adventure</SelectItem>
                        <SelectItem value='Romance'>Funny</SelectItem>
                        <SelectItem value='Romance'>Romance</SelectItem>
                        <SelectItem value='Mystery'>Mystery</SelectItem>
                        <SelectItem value='Sci-fi'>Sci-fi</SelectItem>
                        <SelectItem value='Fantasy'>Fantasy</SelectItem>
                        <SelectItem value='Horror'>Horror</SelectItem>
                        <SelectItem value='Thriller'>Thriller</SelectItem>
                        <SelectItem value='Comedy'>Comedy</SelectItem>
                        <SelectItem value='Drama'>Drama</SelectItem>
                        <SelectItem value='Action'>Action</SelectItem>
                        <SelectItem value='Historical'>Historical</SelectItem>
                        <SelectItem value='Western'>Western</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name='setting'
              render={({ field }) => (
                <FormItem className='col-span-12 lg:col-span-6'>
                  <FormControl>
                    <Textarea
                      className='border-2 border-blue-300 focus:border-blue-500 rounded-lg w-full px-4 py-2 dark:bg-gray-800'
                      disabled={isLoading}
                      placeholder='Describe the setting (e.g. a bustling city in 2050).'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name='length'
              render={({ field }) => (
                <FormItem className='col-span-6 lg:col-span-3'>
                  <FormControl>
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className='border-2 border-blue-300 focus:border-blue-500 rounded-lg w-full px-4 py-2 dark:bg-gray-800'>
                        <SelectValue>{field.value} words</SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='100'>Short (100 words)</SelectItem>
                        <SelectItem value='500'>Medium (500 words)</SelectItem>
                        <SelectItem value='1000'>Long (1000 words)</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name='characters'
              render={({ field }) => (
                <FormItem className='col-span-12 lg:col-span-6'>
                  <FormControl>
                    <Textarea
                      className='border-2 border-blue-300 focus:border-blue-500 rounded-lg w-full px-4 py-2 dark:bg-gray-800'
                      disabled={isLoading}
                      placeholder='Describe the main characters (e.g. John, a retired detective).'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name='languages'
              render={({ field }) => (
                <FormItem className='col-span-12 lg:col-span-6'>
                  <FormControl>
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className='border-2 border-blue-300 focus:border-blue-500 rounded-lg w-full px-4 py-2 dark:bg-gray-800'>
                        <SelectValue>Language: {field.value}</SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {languages.map((lang) => (
                          <SelectItem key={lang} value={lang}>
                            {lang}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              className='col-span-12 w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-200 dark:bg-blue-400 text-white rounded-lg'
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

export default Story
