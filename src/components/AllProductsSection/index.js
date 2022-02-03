import {Component} from 'react'
import Cookies from 'js-cookie'
// import {async} from 'rxjs'
import ProductCard from '../ProductCard'
import './index.css'

class AllProductsSection extends Component {
  state = {
    productsList: [],
  }

  componentDidMount() {
    this.getProductsDetails()
  }

  getProductsDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const URL = 'https://apis.ccbp.in/products'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(URL, options)
    const jsonData = await response.json()
    console.log(jsonData)
    console.log('get all products details')
    const {products} = jsonData
    console.log(products)

    const allProducts = products.map(product => ({
      title: product.title,
      brand: product.brand,
      imageUrl: product.image_url,
      rating: product.rating,
      price: product.price,
      id: product.id,
    }))

    this.setState({
      productsList: allProducts,
    })
  }

  renderProductsList = () => {
    const {productsList} = this.state
    return (
      <div>
        <h1 className="products-list-heading">All Products</h1>
        <ul className="products-list">
          {productsList.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return <>{this.renderProductsList()}</>
  }
}

export default AllProductsSection
