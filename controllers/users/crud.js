module.export=function(){

   function create(req, res, done) {
        if (req.body.nickName){
            var nickName = req.body.nickName.toLowerCase(); 
        }

        process.nextTick(function() {
               db.user.findOne({ nickName :  nickName }, function(err, user) {
                    if (err)
                        return done(err);

                    if (user) {
                        return done(null, false, req.flash('message', 'That nickName is already taken.'));
                    } else {

                        var newUser= new db.user();

                            newUser.nombre = req.body.nombre;
                  newUser.nickName = nickName;
                            newUser.documento = req.body.documento;
                            newUser.tipoPago = req.body.tipoPago;
                  newUser.contrasena = newUser.generateHash(req.body.contrasena);

              newUser.save(function(error, user) {
                 if (error)
                                return done(error);

                            if(req.user){
                              if(req.user.nickName=="admin"){
                                return done(null, false, req.flash('message', 'new user created  by admin'));
                              }else{
                                return done(null, user, req.flash('message', 'new user created'));   
                                }
                            }else{
                               return done(null, user, req.flash('message', 'new user created'));   
                                }
              });

                    }

                });

       });
    }
    

    function update(req, res, done) {
               db.user.findOne({ nickName :  nickName }, function(err, user) {
                    if (err)
                        return done(err);

                    if (user) {
                        return done(null, false, req.flash('message', 'That nickName is already taken.'));
                    } else {

                        var newUser= new db.user();

                            newUser.nombre = req.body.nombre;
                  newUser.nickName = nickName;
                            newUser.documento = req.body.documento;
                            newUser.tipoPago = req.body.tipoPago;
                  newUser.contrasena = newUser.generateHash(req.body.contrasena);

              newUser.save(function(error, user) {
                 if (error)
                                return done(error);

                            if(req.user){
                              if(req.user.nickName=="admin"){
                                return done(null, false, req.flash('message', 'new user created  by admin'));
                              }else{
                                return done(null, user, req.flash('message', 'new user created'));   
                                }
                            }else{
                               return done(null, user, req.flash('message', 'new user created'));   
                                }
              });

                    }

                });

       }
  
  }
