


const express= require("express");
const mongoose =require("mongoose");
const Listing= require("./model/listing");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");
const wrapAsync= require("./utils/wrapasync");
const ExpressError=require("./utils/expressError");
const {ListingSchema, reviewSchema}=require("./schema.js")
 const Review= require("./model/review.js");
const flash = require("connect-flash");
const passport= require("passport");
const localStrategy= require("passport-local");
const User= require("./model/user.js");
const {isLoggedIn}= require("./views/middleware.js");
const {saveRedirecturl}= require("./views/middleware.js")







async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/getrent', {
  
});
}
main().then(()=>{
    console.log("connected to db")
})










const app= express();
const path= require("path");
const { date } = require("joi");
const { Session } = require("inspector");
const session = require("express-session");
const listing = require("./model/listing");
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));


const sessionOptions = {
    secret: "myscretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
    expires: Date.now() + 7*24*60*60*1000,
    maxAge: 7*24*60*60*1000,
    httpOnly: true,
    }
};


app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



const validatelisting =(req,res,next)=>{
    let {error} =ListingSchema.validate(req.body);

 if(error){
    throw new ExpressError(400,error);
 }
 else{
    next();
 }

 
}

const validateReview =(req,res,next)=>{
    let {error} =reviewSchema.validate(req.body);

 if(error){
    throw new ExpressError(400,error);
 }
 else{
    next();
 }

 
};



app.use((req,res,next)=>{
    res.locals.currentuser= req.user;
    next();

});


app.post("/review/:id", isLoggedIn,wrapAsync( async (req,res)=>{
    validateReview;
 const {id}= req.params;  
let rev= req.body;
let review= new Review(
    {
        rating: rev.reviewvalue,
      comment:rev.commment,
    }
)

review.author=req.user._id;
 await review.save();

 const listing= await Listing.findById(id);
  listing.reviews.push(review._id);
  listing.save();
 res.redirect(`/listings/${listing._id}`)

}));

app.get("/signup", (req,res)=>{
    res.render("./users/user.ejs");
})

app.post("/signup", async(req,res,next)=>{
    let {username,email,password}= req.body;
  
    const duser= new User({username,email});
   await User.register(duser,password);

   req.login(duser,(err)=>{
    if(err){
        return next(err);
    }
    req.flash("newusersuccess", "account created successfully!");
    res.redirect("/listings");

   })




   

})



app.get("/login", (req,res)=>{
   let name= req.flash("success")
    res.render("./users/user2.ejs",{name});
})



app.post("/login",passport.authenticate('local', { failureRedirect: '/login', failureFlash: true}), async(req,res)=>{

req.flash("success", "you are logged in");

res.redirect("/listings");


});




app.get("/logout",(req,res)=>{
   
    req.logout((err)=>{

if(err){
    return next(err);
}
req.flash("success", "you are logged out!");
res.redirect("./listings");

    }
    )

});








app.get("/",(req,res)=>{
    res.redirect("./listings");
})

app.get("/listings", wrapAsync(async (req,res)=>{
    const alllisting= await Listing.find({});
    const nameee= req.flash("success");
    const newuser= req.flash("newusersuccess");
    res.render("./listings/index.ejs",{alllisting,nameee, newuser})
}))


app.get("/listings/new", isLoggedIn,(req,res)=>{  
    res.render("./listings/new.ejs");
})

app.get("/listings/edit/:id",isLoggedIn, wrapAsync(async (req,res)=>{
    const {id}= req.params;
    const listing= await Listing.findById(id);

    res.render("./listings/edit.ejs",{listing})
 }))


 app.delete("/listings/:id",isLoggedIn,wrapAsync(async(req,res)=>{
    const {id}= req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings")
}))


app.get("/listings/:id", wrapAsync(async (req,res)=>{
    const {id}= req.params;
    const listing= await Listing.findById(id).populate({path:"reviews", populate:{path: "author"},}).populate("owner");
    console.log(listing);
    res.render("./listings/show.ejs",{listing})
}))



app.post("/listings",wrapAsync(async(req,res)=>{
    validatelisting;
  const newlisting= new Listing(req.body);
  newlisting.owner=req.user._id;
 await newlisting.save();
 req.flash("success", "new review created");
 
    res.redirect("/listings")
}))





app.put("/listings/:id",wrapAsync(async(req,res)=>{
    validatelisting;
    const {id}=req.params;
    const bodyy= req.body;
    const listing= await Listing.findById(id);
    await listing.updateOne(bodyy);
 res.redirect(`/listings/${id}`);



}));








app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"page not found!"))
});



app.use((err,req,res,next)=>{
    
   let{statuscode=500,message="something went wrong"}=err;
   res.status(statuscode).render("error.ejs",{message})
})






let port=8080;
app.listen(port,()=>{
    console.log("server is listening");
})



