const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
	{
		title: { 
            type: String, 
            required: true 
        },
		desc: { 
            type: String, 
            required: true 
        },
		img: { 
            type: String, 
            required: true 
        },
		category: { 
            type: String, 
            required: true 
        },
		size: { 
            type: String 
        },
		colour: { 
            type: String 
        },
		price: { 
            type: String, 
            required: true 
        },
		availableQty: { 
            type: Number 
        },
	},
	{ timestamps: true }
);

mongoose.models = {};
export default mongoose.model("Product", ProductSchema);
