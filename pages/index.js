import Featured from "@/Components/Featured";
import Header from "@/Components/Header";
import Layout from "@/Components/Layout";
import { useSession } from "next-auth/react";


export default function Home({products}) {
  const {data: session} = useSession();
  return (
    <div>
      <Header/>
      <Featured product = {product}/>
    </div>
  )
}
