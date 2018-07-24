const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSign(user){
    const EXPIRE_TIME = 60 * 60 * 24 * 7 //expire for one week
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: EXPIRE_TIME
    })
}

module.exports = {
    async register (req, res) {
        try{
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (e) {
            res.status(400).send({
                error: e.toString()
            })
        }
    },
    async login (req, res) {
        try{
            const {email, password} = req.body
            const user = await User.findOne({where: {email: email}})
            if(!user){
               return res.status(403).send({
                    error: 'Incorrect Login information'
                })
            }
            // #TODO: password comparison pending
            const isPasswordValid = true
            if(!isPasswordValid){
                return res.status(403).send({
                    error: 'Incorrect Login information1'
                })
            }
            const userJSON = user.toJSON()
            res.send({
                user: userJSON,
                token: jwtSign(userJSON)
            })
        } catch (e) {
            res.status(500).send({
                error: 'Internal Server Error'
            })
        }
    }
}