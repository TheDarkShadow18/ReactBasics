
function Product({title,price}){
    let isDiscount=price>30000
    let styles={backgroundColor: isDiscount?"pink":"null"}
    // const list= feature.map((option)=><li>{option}</li>)
    return(
        <div style={styles}>
        <h1>{title}</h1>
        <h5>Price={price}</h5>
        {/* <p>{feature}</p> */}
        {isDiscount && <p>5% discount</p> }
        {/* {price>30000?<p> 5% discount</p>:null} */}
        </div>
    )
}
export default Product;