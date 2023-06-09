//This is a reducer for the Products type.
//It will allow to asynchronously fetch data from the backend 

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/* GET */

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
    async() => {

        let payload = []

        await fetch("http://localhost:3000/products", {mode:"cors"})
        .then((response) => response.json() )
        .then((data) => {
            payload = data
          })
        
        return payload
    }
);

const productDataSlice = createSlice({
  name: 'product',
  initialState: {products:[]},
  reducers: {
    //this is not actually used in this module, but it helps to see the structure of the data :)
    productDataFetched(state, action) {
      state.push({        
        name: action.payload.name,
        cost: action.payload.cost,
        image: action.payload.image
      })
    },
  },
    extraReducers(builder) {
      builder
        .addCase(fetchProducts.pending, (state, action) => {
          //
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
          console.log("fetchProducts complete:", action.payload)
          state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
          console.log("error in extra reducers (fetchProducts)");
        });
    },
  
});

export const { productDataFetched } = productDataSlice.actions;
export default productDataSlice.reducer;