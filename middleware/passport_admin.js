const { ExtractJwt, Strategy } = require('passport-jwt');
const { User, Adminlogin,Member } = require('../models');
const CONFIG = require('../config/config.json');
const { to } = require('../services/util.service');


module.exports = function (passport) {
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = CONFIG.jwt_encryption;

    passport.use(new Strategy(opts, async function (jwt_payload, done) {

        if (Object.keys(jwt_payload).length < 4) {
            return done(null, false);
        }


       // console.log(jwt_payload)
        let err, user, admin;
        if (jwt_payload.user_type == 'admin') {
            [err, admin] = await to(Adminlogin.findOne({ where: { id: jwt_payload.user_id, email: jwt_payload.email } }));
        } else {
            [err, user] = await to(Member.findOne({ where: { id: jwt_payload.user_id, username: jwt_payload.username } }));
        }

        if (err) return done(err, false);
        if (user) {
            return done(null, user);
        } else if (admin) {
            return done(null, admin);
        } else {
            return done(null, false);
        }
    }));
}