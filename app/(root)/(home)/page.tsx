import Navbar from '@/components/Navbar'
import { UserButton } from '@clerk/nextjs'

export default function Home () {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
      <Navbar/>
      <h1 className="h1-bold">Hola mundo</h1>
    </div>
  )
}
