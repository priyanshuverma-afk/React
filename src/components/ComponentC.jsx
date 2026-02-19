import { useEffect, useState } from 'react';

const ComponentC = () => {
    const [product, setProduct] = useState([])
    console.log("product",product)
    const data = () => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json(),
             setProduct(res))
            .then(console.log(res.products,"check"));
            // console.log(res.products,"check")
          
           
    }
   
    // console.log(data)
    
    useEffect(() => {
        data()
        
    }, [])
    return (
        <div>
            <h1>ComponentC</h1>
{/* {
    data.map((items)=>(
        <div>
<h1>{items.title}</h1>
        </div>
    ))
} */}
        </div>





    )
}

export default ComponentC