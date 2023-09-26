import Nav from "@/Components/Nav"
import { useSession, signIn, signOut } from "next-auth/react"


export default function Layout({children}) {
  const { data: session } = useSession()
  if(!session){
    return(
      <div className="bg-yellow-300 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button onClick={() => signIn('google')} className="bg-white p-2 rounded-md px-4">Login with google</button>
        </div>
      </div>
    )
    
  }
  return (
    <div className="bg-yellow-600 min-h-screen flex">
    <Nav/>
      <div className="flex-grow bg-white mt-1 mb-1 mr-1 rounded-lg p-4">{children}</div>
    </div>
  )
  
}
