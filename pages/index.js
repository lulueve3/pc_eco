import Header from "@/Components/Header";
import Layout from "@/Components/Layout";
import { useSession } from "next-auth/react";


export default function Home() {
  const {data: session} = useSession();
  return (
    <div>
      <Header/>
    </div>
  )
}
