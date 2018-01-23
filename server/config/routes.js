var users=require('./../controllers/users');
module.exports = function(app){
    app.post('/login',function(req,res){
        users.login(req,res);
        console.log(users.login,'EFUAGEURSGFI');
    });

    app.get('/logout', function(req, res) {
        users.logout(req,res);
    });
};