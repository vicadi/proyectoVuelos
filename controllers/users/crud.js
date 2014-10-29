  
   module.exports.create = function(req, res, done) {
        if (req.body.nickName){
            var nickName = req.body.nickName.toLowerCase(); 
        }

        process.nextTick(function() {
          db.user.findOne({ nickName :  nickName }, function(err, user) {
              if (err)
                return done(err);

              if (user) {
                return done(new Error("User not created"), false, req.flash('message', 'That nickName is already taken.'));
              } else {

                var newUser= new db.user();
 
                  newUser.nombre = req.body.nombre;
                  newUser.nickName = nickName.toLowerCase();
                  newUser.documento = req.body.documento;
                  newUser.tipoPago = req.body.tipoPago;
                  newUser.contrasena = newUser.generateHash(req.body.contrasena);

                newUser.save(function(error, user) {
                  if (error)
                    return done(error);          
                  if(req.user){
                    if(req.user.nickName=="admin"){
                        return done(null, false, req.flash('message', 'new user created  by admin'));
                    }
                  }
                  if(user){
                    return done(null, user, req.flash('message', 'new user created'));   
                   }
                });
  
              }
          });
        });
    }
   
    module.exports.read = function(req, res, done) {
        db.user.find().exec(function (error, users) { 
            if (error)
                return done(error);          
            if(req.user){
              if(req.user.nickName=="admin"){
                 return done(null, users, req.flash('message', 'list users by admin'));
              }
           }
        });
    }

    module.exports.update = function (req, res, done) {
        var nickName=req.body.nickNameOriginal||req.user.nickName;
        var updateUser= {};
        var newUser= new db.user();
            if(req.body.nombre)
               updateUser.nombre = req.body.nombre;
            if(req.body.nickName)
              updateUser.nickName = req.body.nickName.toLowerCase();
            if(req.body.contrasena)
              updateUser.contrasena = newUser.generateHash(req.body.contrasena);
            if(req.body.documento)
              updateUser.documento = req.body.documento;
            if(req.body.tipoPago)
              updateUser.tipoPago = req.body.tipoPago;

        db.user.findOneAndUpdate({ "nickName" : nickName},{$set:updateUser},
            function(error, user){
               if (error)
                    return done(error);          
                 if(req.user){
                    if(req.user.nickName=="admin"){
                        return done(null, false, req.flash('message', 'user edited by admin'));
                    }
                    else{
                        return done(null, user, req.flash('message', 'user edited'));   
                    }
                 }
            }
          );
    }

  module.exports.deleteUser = function (req, res, done) {

      var nickName = req.params.nickName;
      db.user.findOneAndRemove({ "nickName" : nickName},
            function(error, user){
              if (error)
                    return done(error);          
                 if(req.user){
                    if(req.user.nickName=="admin"){
                        return done(null, false, req.flash('message', 'user delete by admin'));
                    }
                 }else{
                   return done(null, user, req.flash('message', 'user delete'));   
                 }  
            });
  }