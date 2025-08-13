// wrtite a middle ware fro auth
const authentication =(req,res,next)=>{
    const authenticationHeader= req['auth'];
    // get the token here 
    let token ="";
    if(token!=null || !isValidToken(token)){
        return res.sendStatus(401)


    }
    next();
}
const app = express();
app.use(authentication);
app.Use(dbconnextion);
// atomicty , co ,