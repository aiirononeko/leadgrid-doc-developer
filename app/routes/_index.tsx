import type { MetaFunction } from '@remix-run/node'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div>
      <Avatar>
        <AvatarImage src='https://i.pravatar.cc/300' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}
