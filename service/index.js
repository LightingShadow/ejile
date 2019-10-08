const express=require('express');
const app=express();
const appData=require('../data.json');
const seller=appData.seller;
const goods=appData.goods;
const ratings=appData.ratings;
const cors=require('cors');
app.use(cors());
var apiRoutes=express.Router();
app.use('/api',apiRoutes);

apiRoutes.get('/seller',function(req,res){
  res.json({
    errno:0,
    seller:seller
    })
});

apiRoutes.get('/goods',function(req,res){
  res.json({
    errno:0,
    goods:goods
  });
});

apiRoutes.get('/ratings',function(req,res){
  res.json({
    errno:0,
    ratings:ratings
  })
});


app.listen(3000,()=>{
  console.log('Server start at port:3000。。。');
});
