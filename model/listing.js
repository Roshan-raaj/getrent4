const mongoose= require("mongoose");
const schema=mongoose.Schema;
let listingSchema = new schema({ 

title:{type: String,
required: true},  

description:String,
image:{type: String,
default:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww",
set:(v)=>v===""? "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww":v},

price:Number,
location:String,
country:String,
reviews: [
    {
      type: schema.Types.ObjectId,
      ref:"review",
    }
],
owner:{
  type: schema.Types.ObjectId,
  ref:"user",
}
});

const listing= mongoose.model("listing", listingSchema);
module.exports =listing;