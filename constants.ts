import { Code, ImageIcon, MessageSquare, Newspaper } from 'lucide-react'

export const MAX_FREE_COUNTS = 3

export const tools = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    description:
      'Engage in seamless conversations and collaborations with our advanced chat tools.',
  },

  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: 'text-pink-700',
    bgColor: 'bg-pink-700/10',
    href: '/image',
    description:
      'Craft and edit captivating images with state-of-the-art tools. Amplify your creativity.',
  },
  // Cover letter generation
  {
    label: 'Cover Letter Generation',
    icon: Newspaper,
    color: 'text-orange-700',
    bgColor: 'bg-orange-700/10',
    href: '/letter',
    description:
      'Craft and edit captivating cover letters with state-of-the-art tools. Amplify your creativity.',
  },

  {
    label: 'Code Generation',
    icon: Code,
    color: 'text-green-700',
    bgColor: 'bg-green-700/10',
    href: '/code',
    description:
      'Streamline your development with AI-driven code suggestions. Code smarter, not harder.',
  },
]
