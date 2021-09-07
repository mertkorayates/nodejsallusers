express = require("express")
path = require("path")
bodyParser = require("body-parser")
app = express();
var kullanici = [];
var views = path.join(__dirname, 'views');
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'pug');
 


app.post("/kayit/:id/:isim/:soyisim",(req,res)=>{
    console.log("kullanici kayit edildi"+req.bodyParser)
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
console.log("Port Open")
})