const db = require('../db/index');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
//     subtotal: (req, res) => {
//      db.expenses.sum('amount', { where: { category: req.params.category , 
//       month:req.params.month } })
//      .then(sum => {
//       res.json(sum);
// })
//     },
//     total: function (req, res) {
//       db.expenses.sum('amount').then(sum => {
//           res.json(sum);
//         });
//     },
//     add: function (req, res) {
//       db.expenses.create({ 
//         amount:req.body.amount,
//         category: req.body.category,
//         month: req.body.month}).
//       then(resutl => {
//        res.sendStatus(201);
//       });
//     }

  signUp : (req,res) => {
    let userName = req.body.userName;
    let password = req.body.password;

    db.user.findOne({where:{userName : userName}}).then(data => {
      if(data === null){
        bcrypt.hash(password , saltRounds, (err,hash)=> {
      db.user.create({
        userName:userName,
        passWord : hash,
      }).then(data => {res.sendStatus(201)})

      })

      }else{

        res.status(400).send('this user name is exsisted , try another one')
      }

    })
    

  },

  logIn : (req,res) => {
    let userName = req.params.userName;
    let password = req.params.password;
    

    db.user.findOne({where:{userName:userName}}).then(data => {
      bcrypt.compare(password, data.dataValues.passWord, (err,result)=>{
        if(result) {res.sendStatus(201)}
          else{res.status(400).send('twrong password')}
      })
    })
  },

  ask : (req,res) =>{
    let question = req.body.question;
    let name = req.body.user;

    db.question.create({
      question:question,
      name:name
    }).then(data => res.sendStatus(201))
    .catch(err => console.log(err))
  },

  answer : (req,res) => {
    let answer = req.body.answer;
    let id = req.body.id;

    db.question.update({answer:answer,answered:true},{where: {qid:id}})
    .then(data => res.sendStatus(201))
    .catch(err => console.log(err))

  },

  getAll : (req,res) =>{
    let answered = req.params.bool;

    if(answered === 'true') {answered= true;}
    else{answered = false}

    db.question.findAll({where :{answered:answered}})
    .then(data => {
      res.send(data)
    })
  }


  
};


