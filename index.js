const express = require("express");

const app = express();

const users = [{
    name: "Abhi",
    kidenys:[{
        healthy : false
    }]

}];

app.use(express.json());

app.get('/', (req, res) =>{
     // logic
     const abhiKidenys = users[0].kidenys;
     const numberOfKidenys = abhiKidenys.length;
     let numberOfHealthyKidenys  = 0;

     for(let i = 0 ; i<abhiKidenys.length; i++){
       if(abhiKidenys[i].healthy){
        numberOfHealthyKidenys = numberOfHealthyKidenys + 1;
       }
     }
     const numberOfUnhealthyKidenys = numberOfKidenys - numberOfHealthyKidenys;

     res.json({
        numberOfKidenys,
        numberOfHealthyKidenys,
        numberOfUnhealthyKidenys
     })
})

app.post('/', function(req, res){

    const isHealthy = req.body.isHealthy;
    users[0].kidenys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
    
})

app.put('/', (req, res) =>{
    for(let i = 0; i< users [0].kidenys.length; i++){
        users[0].kidenys[i].healthy = true;
    }

    res.json({
        msg : "Done!"
    })
})
// removing all the unhealthy kidenys
app.delete('/', (req, res) =>{
    const newKidenys = [];
  for(let i = 0; i<users[0].kidenys.length; i++){
    if(users[0].kidenys[i].healthy){
        newKidenys.push({
            healthy : true
        })
    }
  }
  users[0].kidenys = newKidenys;
  res.json({msg : "Done"})
})
app.listen(3000);