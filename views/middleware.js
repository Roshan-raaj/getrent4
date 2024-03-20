

module.exports.isLoggedIn=(req,res,next)=>{
    if(  !req.isAuthenticated()){
        res.locals.redirectUrl= req.originalUrl;
        console.log(res.locals.redirectUrl);
         req.flash("success","you must be logged in!");
        res.redirect("/login");
        }
        next();
     
};

