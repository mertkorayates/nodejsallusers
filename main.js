express = require("express")
path = require("path")
bodyParser = require("body-parser")
app = express();
var kullanici = [];
var views = path.join(__dirname, 'views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');
 


app.post("/kayit/:id/:isim/:soyisim",(req,res)=>{
    gelendeger = req.body
    console.log({gelendeger})
    user = {
        id : req.params.id,
        isim : req.params.isim,
        soyisim : req.params.soyisim,
    }



    kullanici.push(user);


    res.send({
        id : req.params.id,
        isim : req.params.isim,
        soyisim : req.params.soyisim,
    })
})


app.get("/ekle",(req,res)=>{
  
res.send({kullanici})

})

app.listen(3000,()=>{
console.log("Port Openss")
})