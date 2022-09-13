import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        {
            "id": 0,
            "title": "Model S",
            "description": "Order Online for Touchless Delivery",
            "image": "model-s.jpg",
            "leftBtnText": "Custom Order",
            "rightBtnText": "Existing Inventory",
        },
        {
            "id": 1,
            "title": "Model 3",
            "description": "Order Online for Touchless Delivery",
            "image": "model-3.jpg",
            "leftBtnText": "Custom Order",
            "rightBtnText": "Existing Inventory",
        },
        {
            "id": 2,
            "title": "Model X",
            "description": "Order Online for Touchless Delivery",
            "image": "model-x.jpg",
            "leftBtnText": "Custom Order",
            "rightBtnText": "Existing Inventory",
        },
        {
            "id": 3,
            "title": "Model Y",
            "description": "Order Online for Touchless Delivery",
            "image": "model-y.jpg",
            "leftBtnText": "Custom Order",
            "rightBtnText": "Existing Inventory",
        },
        {
            "id": 4,
            "title": "Solar Panels",
            "description": "Lowest Cost Solar Panels in America",
            "image": "solar-panel.jpg",
            "leftBtnText": "Order Now",
            "rightBtnText": "Learn More",
        },
        {
            "id": 5,
            "title": "Solar Roof",
            "description": "Order Online for Touchless Delivery",
            "image": "solar-roof.jpg",
            "leftBtnText": "Order Now",
            "rightBtnText": "Learn More",
        },
        {
            "id": 6,
            "title": "Accessories",
            "image": "accessories.jpg",
            "leftBtnText": "Shop Now",
        }
    ]
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {}
});

export const selectData = state => state.data.data

export default dataSlice.reducer;