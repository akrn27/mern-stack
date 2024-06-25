import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    image: {
      type: [String],
      required: true
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  {timestamps: true}
);

const productsModel = mongoose.model("Products", productsSchema);

export default productsModel;
