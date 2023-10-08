import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
    {
        name: String,
        price: Number,
        visitors: Number,
        sales: Number,
        month: String
    }
)

const Product = mongoose.models.Products || mongoose.model('Products', productSchema)

export default Product;