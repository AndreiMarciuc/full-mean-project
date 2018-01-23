var mongoose=require('mongoose');
var User=mongoose.model('User');

module.exports ={
    login:function(req,res){
        User.find({name:req.body.name},function(err,users){
            if(users.length<1){
                User.create({name:req.body.name},function(err,user){
                    req.session.user=user;
                    req.session.save();
                    res.json({user:req.session.user});
                });
            }else{

                req.session.user=users[0];
                req.session.save();
                res.json({user:req.session.user});
            }
            console.log('********',req.session.user);
           
        });
        
    },
    logout: (req, res) => {
        req.session.user=null;
        res.json({user:null});
    }
};