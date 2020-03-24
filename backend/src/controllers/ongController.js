const connection = require('../database/connection.js')
const crypto = require('crypto')

module.exports = {
    create: async (req,res) => {
        const { name, email, whatsapp, city, uf } = req.body
        const id = crypto.randomBytes(4).toString('HEX')

        const result = await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return res.json({ id })
    },

    index: async (req,res) => {
        const ongs = await connection('ongs').select('*')
        return res.json(ongs)
    }
}