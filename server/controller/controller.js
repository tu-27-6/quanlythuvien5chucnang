var Userdb = require('../model/model')


exports.create = (req, res) => {
    if(!req.body) {
        res.send({message: 'Can not be empty'})
        return
    }

    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender
    })

    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(e => {
            res.send({message: e.message})
        })
}

exports.find = (req, res) => {
    Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(e => {
            res.send({message: e.message})
        })
}

exports.update = (req, res) => {
    if(!req.body) {
        return res.send({message: 'Can not be empty'})
    }

    const id = req.params.id
    Userdb.findByIdAndUpdate(id, req.body)
        .then(data => {
            if(!data) {
                res.send({message: 'User not found'})
            }
            else {
                res.send(data)
            }
        })
        .catch(e => {
            res.send({message: 'Update error'})
        })
}

exports.delete = (req, res) => {
    const id = req.params.id
    
    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data) {
                res.send({message: 'User not found'})
            }
            else {
                res.send({message: 'Delete successfully'})
            }
        })
        .catch(e => {
            res.send({message: 'Can not delete user with id: ' + id})
        })
}