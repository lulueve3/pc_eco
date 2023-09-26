import Layout from "@/Components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export default function NewProducts() {
    const [titile, setTitile] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [goToProducts,setGoToProducts] = useState();
    const router = useRouter();
    async function createProduct(ev){
        ev.preventDefault();
        // const data = {titile,description,price}
        // await axios.post('/api/products', data);
        setGoToProducts(true);
        toast.success('Thêm sản phẩm thành công!', {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

    }

    if(goToProducts){
        
        setTimeout(() =>{
            router.push('/products');
        },1500);
        
    }

    return (
        <Layout>
            
            <form onSubmit={createProduct}>
                <h1>New Product</h1>
                <label>Product Name</label>
                <input 
                    type="text" 
                    placeholder="product name" 
                    value={titile} 
                    onChange={ev => setTitile(ev.target.value)} />
                <label>Description</label>
                <textarea 
                    placeholder="description"
                    value={description} 
                    onChange={ev => setDescription(ev.target.value)}></textarea>
                <label>Price</label>
                <input 
                    type="number" 
                    placeholder="price"
                    value={price} 
                    onChange={ev => setPrice(ev.target.value)} />
                <button className="btn_primary float-right">Save</button>
            </form>
            <ToastContainer/>
        </Layout>
    )
}