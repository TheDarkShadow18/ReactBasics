import Product from './Product';
function ProductTab(){
    // let option=["hi-tech","durable","fast"]
    return(
    <>
    <Product title="Phone" price={10000}/>
    <Product title="Laptop" price={40000}/>
    <Product title="Pen" price={10}/>
    </>
    );
}
export default ProductTab;