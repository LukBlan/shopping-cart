import {useOutletContext, useParams} from "react-router-dom";

function ProductModal() {
  const [products] = useOutletContext();
  const {id} = useParams()
  const product = products[id]
  console.log(product)

  if (!product) return <></>
  return(
    <div>{product.title}</div>
  )
}

export { ProductModal }