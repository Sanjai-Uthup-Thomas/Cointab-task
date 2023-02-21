const db = require('../models/connection');
const axios = require('axios');
const Users = db.user;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


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
            const search=(req.query.search)
            console.log(search,"search");
            var condition = search ? {[Op.or]:[{Name: { [Op.like]: `%${search}%` }},{Email: { [Op.like]: `%${search}%`}},{Phone: { [Op.like]: `%${search}%`}}]} : null
            // console.log(condition,"condition");
            const page =parseInt(req.query.page) || 1;
            const pageSize = 10;
            const offset = (page - 1) * pageSize;
            const {count}=await Users.findAndCountAll({ where:condition})
            const pages = Math.ceil(count / pageSize);
            const users = await Users.findAll({
                where:condition,
                limit: pageSize,
                offset: offset,
            })
            console.log("condition");
            //   console.log(users,"users");
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