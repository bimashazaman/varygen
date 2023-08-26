import {
  Book,
  Code,
  CopyMinus,
  ImageIcon,
  MessageSquare,
  Newspaper,
} from 'lucide-react'

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
    label: 'Content Summarization',
    icon: CopyMinus,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    href: '/summarization',
    description:
      'Summarize your content with our advanced AI tools. Save time and money.',
  },
  //story generation

  {
    label: 'Story Generation',
    icon: Book,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    href: '/story',
    description:
      'Craft and edit captivating stories with state-of-the-art tools. Amplify your creativity.',
  },

  {
    label: 'Code Generation',
    icon: Code,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400',
    href: '/code',
    description:
      'Streamline your development with AI-driven code suggestions. Code smarter, not harder.',
  },
]
