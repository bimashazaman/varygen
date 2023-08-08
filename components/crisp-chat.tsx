'use client'

import { useEffect } from 'react'
import { Crisp } from 'crisp-sdk-web'

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('fee88c93-2099-47de-8a1e-b33507d62293')
  }, [])

  return null
}
