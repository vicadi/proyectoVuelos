var LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {

	// used to serialize the user for the session
	passport.serializeUser(function(user, done) {
        done(null, user.id);
    });


    passport.deserializeUser(function(id, done) {
        db.user.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // login local
    passport.use('local-login', new LocalStrategy({

        // by default, local strategy uses username and password
        usernameField : 'nickName',
        passwordField : 'contrasena',
        //Esta logueado o no
        passReqToCallback : true
    },
    function(req,nickName,contrasena,done) {
        if (nickName)
            nickName = nickName.toLowerCase();

        // asynchronous
        process.nextTick(function() {
            db.user.findOne({nickName: nickName}, function(err, user) {
                if (err)
                    return done(err, null , req.flash('message', 'Error connect.'));

                if (!user)
                    return done(null, null, req.flash('message', 'No user found.'));

                if (!user.validPassword(contrasena))
                    return done(null, null, req.flash('message', 'Oops! Wrong password.'));

                else
                    return done(null, user, req.flash('message', 'Welcome'));
            });
        });

    }));

}