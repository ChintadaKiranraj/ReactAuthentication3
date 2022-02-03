import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class EachProductDetails extends Component {
  state = {
    productDetails: {},
  }

  componentDidMount() {
    this.getProductsDetails()
  }

  getProductsDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const URL = 'https://apis.ccbp.in/products/1'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(URL, options)
    const jsonData = await response.json()
    console.log('jsonData in each product in details:', jsonData)
    console.log('get all products details')
    const {product} = jsonData
    console.log(product)

    // const singleProduct = {
    //   title: product.title,
    //   brand: product.brand,
    //   imageUrl: product.image_url,
    //   rating: product.rating,
    //   price: product.price,
    //   id: product.id,
    // }
    // this.setState({
    //   productDetails: singleProduct,
    // })
  }

  render() {
    return <h1>Product Details</h1>
  }
}

export default EachProductDetails
