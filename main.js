express = require("express")
path = require("path")
bodyParser = require("body-parser")
app = express();
var kullanici = [];
var views = path.join(__dirname, 'views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');
 


app.post("/kayit",(req,res)=>{
    
    isim = req.body.isim;
    soyisim = req.body.soyisim;

    console.log({isim : isim , soyisim : soyisim})
    user = {
       
        isim : isim,
        soyisim : soyisim,
    }



    kullanici.push(user);


   

     res.send({user})


   
})


app.post("/ekle",(req,res)=>{
  
res.send({kullanici})

})

app.listen(3000,()=>{
console.log("Port Openss")
})