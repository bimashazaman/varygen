'use client'

import * as z from 'zod'
import axios from 'axios'
import { useRef, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { Mic, Music, Send } from 'lucide-react'

import { Heading } from '@/components/heading'
import { Button } from '@/components/ui/button'
import { Loader } from '@/components/loader'
import { Empty } from '@/components/ui/empty'
import { useProModal } from '@/hooks/use-pro-modal'

import { formSchema } from './constants'

const MusicPage = () => {
  const proModal = useProModal()
  const router = useRouter()
  const [music, setMusic] = useState<string>()

  const [recording, setRecording] = useState<boolean>(false)
  const [recordedBlob, setRecordedBlob] = useState<any>(null)

  let mediaRecorder: any = useRef(null)

  const startRecording = async () => {
    //if there recordedBlob already, reset the data to null to record again
    if (recordedBlob) {
      setRecordedBlob(null)

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
          })
          mediaRecorder.current = new MediaRecorder(stream)
          mediaRecorder.current.start()
          setRecording(true)
          mediaRecorder.current.addEventListener('dataavailable', (e: any) => {
            setRecordedBlob(URL.createObjectURL(e.data))
          })
        } catch (error) {
          console.log(error)
        }
      }
    } else {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
          })
          mediaRecorder.current = new MediaRecorder(stream)
          mediaRecorder.current.start()
          setRecording(true)
          mediaRecorder.current.addEventListener('dataavailable', (e: any) => {
            setRecordedBlob(URL.createObjectURL(e.data))
          })
        } catch (error) {
          console.log(error)
        }
      }
    }
  }

  const stopRecording = () => {
    mediaRecorder.current.stop()
    setRecording(false)
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      audio: '',
    },
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async () => {
    try {
      setMusic(undefined)

      const audioBlob = await fetch(recordedBlob).then((r) => r.blob())
      const formData = new FormData()

      formData.append('audio', audioBlob)

      const response = await axios.post<{
        audio: string
      }>('/api/music', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      setMusic(response.data.audio)
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
    <div className='flex flex-col items-center justify-center min-h-full  p-6'>
      <div className='w-full   rounded-lg shadow-md p-8'>
        <Heading
          title='Music Generation'
          description='Turn your voice into music.'
          icon={Music}
          iconColor='text-emerald-500'
          bgColor='bg-emerald-500/10'
        />

        <div className='flex justify-center mt-6'>
          <button
            onClick={recording ? stopRecording : startRecording}
            className={`
              flex
              justify-center
              items-center
              rounded-full
              bg-gray-800/50
              hover:bg-gray-800/70
              text-white
              p-2
              w-16
              h-16
              transition
              transform
              hover:scale-105
              focus:outline-none
              focus:ring-2
              focus:ring-emerald-500
              focus:ring-opacity-50
            `}
          >
            <Mic
              size={100}
              className={`transition-transform ${
                recording ? 'text-red-500 animate-pulse' : 'text-white'
              } hover:scale-110`}
            />
          </button>
        </div>

        {recordedBlob && (
          <audio controls className='w-full mt-6'>
            <source src={recordedBlob} />
          </audio>
        )}

        <Button
          className='w-full mt-6 bg-emerald-500 hover:bg-emerald-600 text-white transition-transform transform hover:scale-105'
          onClick={onSubmit}
          disabled={isLoading}
          size='icon'
        >
          Submit Recording
        </Button>

        {isLoading && (
          <div className='flex justify-center mt-10'>
            <Loader />
          </div>
        )}

        <br />
        <br />
        <br />
        {!music && !isLoading && <Empty label='No music generated.' />}

        {music && (
          <audio controls className='w-full mt-6'>
            <source src={music} />
          </audio>
        )}
      </div>
    </div>
  )
}

export default MusicPage
