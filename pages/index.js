import Featured from "@/Components/Featured";
import Header from "@/Components/Header";
import LastProducts from "@/Components/LastProducts";

const lastProducts = [
  {id:100 , titile: "Laptop Asus TUF Gaming F15 FX507ZC4-HN074W", desc: "a", price: 200, images: "https://anphat.com.vn/media/product/250_45807_1.jpg" },
  {id:200 , titile: "Laptop Asus Vivobook Go 14 E1404FA-NK177W", desc: "b", price: 500, images: "https://anphat.com.vn/media/product/250_45325_laptop_asus_vivobook_go_14_e1404fa_nk177w.jpg" },
  {id:300 , titile: "VGA Gigabyte RTX 4060 Aero OC 8GB", desc: "c", price: 250111222, images: "https://anphat.com.vn/media/product/250_45664_vga_gigabyte_rtx_4060_aero_oc_8gb___5_.jpg" },
  {id:400 , titile: "VGA Gigabyte RTX 4060 Aero OC 8GB", desc: "c", price: 1000, images: "https://anphat.com.vn/media/product/250_45664_vga_gigabyte_rtx_4060_aero_oc_8gb___5_.jpg" },
  {id:500 , titile: "VGA Gigabyte RTX 4060 Aero OC 8GB", desc: "c", price: 1000, images: "https://anphat.com.vn/media/product/250_45664_vga_gigabyte_rtx_4060_aero_oc_8gb___5_.jpg" },
  {id:600 , titile: "VGA Gigabyte RTX 4060 Aero OC 8GB", desc: "c", price: 1000, images: "https://anphat.com.vn/media/product/250_45664_vga_gigabyte_rtx_4060_aero_oc_8gb___5_.jpg" },
  {id:700 , titile: "VGA Gigabyte RTX 4060 Aero OC 8GB", desc: "c", price: 1000, images: "https://anphat.com.vn/media/product/250_45664_vga_gigabyte_rtx_4060_aero_oc_8gb___5_.jpg" },

]


export default function Home({products}) {
  return (
    <div>
      <Header/>
      <Featured product={lastProducts[0]}/>
      <LastProducts lastProducts ={lastProducts} />
    </div>
  )
}
