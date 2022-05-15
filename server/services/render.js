const axios = require('axios')

exports.homeRoute = (req, res) => {

    axios.get('http://localhost:3000/api/users')
        .then(respond => {
            console.log(respond.data)
            res.render('index', {users: respond.data})
        })
        .catch(e => {
            res.send(e)
        })

}

exports.add_user = (req, res) => {
    res.render('add_user')
}

exports.update_user = (req, res) => {
    axios.get('http://localhost:3000/api/users', {params: {id: req.query.id}})
        .then((userData) => {
            res.render('update_user', {user: userData.data})
        })
        .catch(e => {
            res.send(e)
        })
}

