import Layout from "@/Components/Layout";
import Link from "next/link";

export default function Dashboard() {
  return (
    <Layout>
      <Link href={'/admin/products/new'} className="bg-green-400 rounded-md p-2">DashBoard</Link>
    </Layout>
  )
}
