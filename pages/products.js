import Layout from "@/Components/Layout";
import Link from "next/link";

export default function Products() {
  return (
    <Layout>
      <Link href={'/products/new'} className="bg-green-400 rounded-md p-2">Add Products</Link>
    </Layout>
  )
}
