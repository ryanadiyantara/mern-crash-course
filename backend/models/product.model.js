import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true, //createdAt. updatedAt
  }
);

const Product = mongoose.model("Product", productsSchema);

export default Product;
