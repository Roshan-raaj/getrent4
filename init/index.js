const mongoose= require("mongoose")
const initData= require("./data.js")
const listing= require("../model/listing")

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/getrent');
}
main().then(()=>{
    console.log("connected to db")
})

 async function initDb(){
  await listing.deleteMany({});
  initData.data = initData.data.map((obj)=>({...obj, owner:"65f6d197e8d1bcd7db1438ba"}))
  await listing.insertMany(initData.data)
  console.log("data was initialized")
}

initDb(); 