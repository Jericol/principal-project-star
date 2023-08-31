import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slice';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import headerConfig from '../../utils/headerConfig.js'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart: (state, action) => {
            const purchasesCart = action.payload
            return purchasesCart;
        }
    }
})
// funcion antigua 
 export const getCartThunk = () => (dispatch) => {
     dispatch(setIsLoading(true));
     return axios.post('http://190.60.237.163/verdetalleped', headerConfig())
         .then((res) => dispatch(setCart(res.data.RESP)))
         .finally(() => dispatch(setIsLoading(false)));
 }

// funcion nueva
// export const getCartThunk = () => (dispatch) => {
//     dispatch(setIsLoading(true));
//     return axios.post('http://190.60.237.163/encabezadoped', getConfig())
//         .then((res) => {dispatch(setCart(res.data.RESP))})
//         .catch((error) => console.log(error.message, 'error en la solicitud getcard'))
//         .finally(() => dispatch(setIsLoading(false)))
// }


 export const addCartThunk = () => (dispatch) => {
     dispatch(setIsLoading(true));
     return axios.post("http://190.60.237.163/itempedido",  headerConfig())
         .then((res) => dispatch(getCartThunk(res.data.RESP)))
         .catch(() => alert('hubo un error'))
         .finally(() => dispatch(setIsLoading(false)));
 }


// funcion nueva prueba
// export const addCartThunk = (cartAdd) => (dispatch) => {
//     dispatch(setIsLoading(true));
//     return axios.post("http://190.60.237.163/itempedido", cartAdd, getConfig())
//         .then((res) => dispatch(getCartThunk(res.data.RESP)))
//         .catch(() => alert('hubo un error'))
//         .finally(() => dispatch(setIsLoading(false)));
// }

 export const findCartThunk = () => (dispatch) => {
     dispatch(setIsLoading(true));
     return axios.post("http://190.60.237.163/finpedido", {}, getConfig())
         .then(() => dispatch(getCartThunk()))
         .finally(() => dispatch(setIsLoading(false)));
 }

// funcion nueva prueba
// export const findCartThunk = () => (dispatch) => {
//     dispatch(setIsLoading(true));
//     return axios.post("http://190.60.237.163/finpedido", {}, getConfig())
//         .then(() => dispatch(getCartThunk()))
//         .finally(() => dispatch(setIsLoading(false)));
// }


export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
