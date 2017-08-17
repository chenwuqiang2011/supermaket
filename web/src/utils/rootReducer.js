import login from '../modules/login/LoginReducer'
import post from '../modules/operator_interface/PostReducer'
import add from '../modules/login/AddReducer'
import {routerReducer as router} from 'react-router-redux'

import {combineReducers} from 'redux'
import products from '../modules/products/ProductsReducer'
import supplier from '../modules/supplier/SupplierReducer'
import searchProduct from '../modules/search/SearchReducer'
import cashier from '../modules/shouyin/shouyinReducer'
import addproduct from '../modules/addproduct/AddProductReducer'


const rootReducer = combineReducers({
    login,
    router,
    products,
    supplier,
    searchProduct,
    cashier,
    add,
    addproduct,
    post
})

export default rootReducer