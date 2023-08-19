'use client'

import axios from 'axios'
import { useState } from 'react'
import { Check, Zap } from 'lucide-react'
import { toast } from 'react-hot-toast'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useProModal } from '@/hooks/use-pro-modal'
import { tools } from '@/constants'
import { cn } from '@/lib/utils'

export const ProModal = () => {
  const proModal = useProModal()
  const [loading, setLoading] = useState(false)

  const onSubscribe = async () => {
    try {
      setLoading(true)
      const response = await axios.get('/api/stripe')
      window.location.href = response.data.url
    } catch (error) {
      toast.error('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent className=' bg-gradient-to-t from-pink-100 to-yellow-100 dark:from-black dark:to-blue-950'>
        <DialogHeader>
          <DialogTitle className='flex justify-center items-center flex-col gap-y-3 pb-4'>
            <h2 className='text-2xl text-center font-bold dark:text-zinc-200 text-zinc-700'>
              Elevate Your Experience with VaryGen Pro
            </h2>
            <p className='text-base dark:text-zinc-300 text-zinc-700 text-center'>
              Join thousands who have harnessed exclusive features, premium
              support, and unparalleled speed!
            </p>
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className='text-center text-zinc-900 font-medium px-4'>
          {tools.map((tool) => (
            <div
              key={tool.href}
              className='px-3 py-1 border-black/10 flex items-center justify-between hover:shadow-lg transition text-gray-800 dark:text-gray-200'
            >
              <div className='flex items-center gap-x-4'>
                <div className={cn('p-2 w-fit ', tool.bgColor)}>
                  <tool.icon className={cn('w-8 h-8', tool.color)} />
                </div>
                <div className='font-medium text-lg'>{tool.label}</div>
              </div>
              <Check className='w-6 h-6 text-green-600' />
            </div>
          ))}
        </DialogDescription>
        <div className='flex flex-col space-y-2'>
          <Button
            disabled={loading}
            onClick={onSubscribe}
            size='lg'
            variant='premium'
            className='w-full'
          >
            Upgrade Now for Just $14.99/month
            <Zap className='w-5 h-5 ml-2 fill-white' />
          </Button>
          <p className='text-xs text-center dark:text-zinc-300 text-zinc-600'>
            The price will be increasing to 200$/month soon.
          </p>
          <p className='text-sm text-center dark:text-zinc-300 text-zinc-600 italic'>
            Limited time offer. Do not miss out!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
