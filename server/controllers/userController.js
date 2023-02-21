const db = require('../models/connection');
const axios = require('axios');
const Users = db.user;


module.exports = {
    addUsers: async (req, res) => {
        try {
            const { data } = await axios.get('https://randomuser.me/api/?results=50')
            const users = data.results;
            users.forEach(async user => {
                const { name, gender, email, phone, picture } = user
                const fullName = `${name.first} ${name.last}`
                const data = {
                    Name: fullName,
                    Gender: gender,
                    Email: email,
                    Phone: phone,
                    Picture: picture.thumbnail
                }
                await Users.create(data);
            })
            res.json({ message: "users added successfully" })
        } catch (error) {
            res.status(500).json(error.message);
        }

    },
    getUsers: async (req, res) => {
        try {
            const page =parseInt(req.query.page) || 1;
            const pageSize = 10;
            const offset = (page - 1) * pageSize;
            const total=await Users.count()
            const pages = Math.ceil(total / pageSize);
            const users = await Users.findAll({
                limit: pageSize,
                offset: offset
              })
            res.json({ users: users,pages })
        } catch (error) {
            res.status(500).json(error.message);
        }
    },
    deleteUsers: async (req, res) => {
        try {
            await Users.destroy({
                where: {},
                truncate: true
            })
            res.json({ staus: "All records deleted" })
        } catch (error) {
            res.status(500).json(error.message);
        }
    },
}