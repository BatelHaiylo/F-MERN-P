const { secretKey } = require("../config/keys");
const UsersModal = require("../model/user_schema");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const strategyOptions = {
  secretOrKey: secretKey,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const strategyCallback = (jwt_payload,done) => {
    UsersModal.findById(jwt_payload.id)
    .then((user)=>{
        console.log('user found');
        return done(null,false)})
    .catch((e)=>{
        console.log(e.message)
        return done(e,false)})
}

const passportMiddleware = (passport) => {
  passport.use(new JwtStrategy(strategyOptions,strategyCallback));
};

module.exports =  passportMiddleware ;
