import { useEffect ,useState } from 'react'
import Header from '../Header'
import {ProductContainer ,ProductLogo} from './styledComponents'

const Products = () => {
  const [products , setProducts] = useState([])
  useEffect(() => {
    fetch('https://apis.ccbp.in/products')
    .then((response) => {return response.jsonData()})
    .then((jsonData) => {console.log(jsonData)})
  }
  ,[])
  return (
        <div>
          <Header />
          <ProductContainer>
           <ProductLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png" 
             // src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRVu6QDcpE0Ti-X9B7lBRs4HWmStjt3RXp84vkeerxet7djvWnvTV2RHlpZDfvtDq49NJaAfM2HAJHMJIml15iNCb0etrhw386JFU8NMWqC2ilkVq2T6mbk'
              alt="products"
              loading='lazy'
            /> 
          </ProductContainer>
        </div>
  )
}
export default Products