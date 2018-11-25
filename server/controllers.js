const db = require('../db/index');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {

  signUp : (req,res) => {
    let userName = req.body.userName;
    let password = req.body.password;
    console.log(password)
    db.user.findOne({where:{userName : userName}}).then(data => {
      if(data === null){
        bcrypt.hash(password , saltRounds, (err,hash)=> {
          console.log(hash,'hhhhhh')
        db.user.create({
        userName:userName,
        passWord : hash,
      }).then(data => {res.status(201).send('ok')})

      })

      }else{

        res.status(201).send('this user name is exsisted , try another one')
      }

    })
    

  },

  logIn : (req,res) => {
    let userName = req.params.userName;
    let password = req.params.password;
    

    db.user.findOne({where:{userName:userName}}).then(data => {
      if(data === null){res.status(201).send('you have to sign up first')
}else{
      bcrypt.compare(password, data.dataValues.passWord, (err,result)=>{
        if(result && userName === 'admin') {res.status(201).send('admin')}
          else if(result) {res.status(201).send('ok')}

          else{res.status(201).send('wrong password')}
      })
    }
    })
  },

  // add : (req,res) =>{
  //   // if (req.params.method === 'ask'){
  //   //       console.log(req.params.method)

  //   // }else{
  //   // console.log(req.params.method)
  //   // }
  //   console.log('jjjjj')

  // },

  ask : (req,res) => {
    let question = req.body.question;
    let name = req.body.user;
    console.log(question,'asssssssssssl')
    console.log(name,'assssssssssssk')

    db.question.create({
      question:question,
      name:name,
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


