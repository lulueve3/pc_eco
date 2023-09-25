import Layout from "@/Components/Layout";
import { useSession } from "next-auth/react";


export default function Home() {
  const {data: session} = useSession();
  return (
    <Layout>
    
      <div className="text-blue-900 flex gap-1 justify-between">
        <h2>
          Hello, <b>{session?.user?.name}</b> 
        </h2>
        <div className="flex bg-gray-200 gap-1 rounded-lg overflow-hidden">
            <img src={session?.user?.image} className="w-8 h-8"/>
            {session?.user?.name}
            <span className="px-1 py-2"></span>
        </div>
      </div>
    </Layout>
  )
}
