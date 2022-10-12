const { Camera } = require('../models')
module.exports = {
    // get all Camera
    async index(req, res) {
        try {
            const Camera = await Camera.findAll()
            res.send(Camera)
        } catch (err) {
            res.status(500).send({
                error: 'The Camera information was incorrect'
            })
        }
    },
    // create Camera
    async create(req, res) {
        console.log(JSON.stringify(req.body))
        try {
            const Camera = await Camera.create(req.body)
            res.send(Camera.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Camera incorrect'
            })
        }
    },
    // edit Camera, suspend, active
    async put(req, res) {
        try {
            await Camera.update(req.body, {
                where: {
                    id: req.params.CatId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Cat incorrect'
            })
        }
    },
    
// delete Camera
async remove(req, res) {
        try {
            const Camera = await Camera.findOne({
                where: {
                    id: req.params.CatId
                }
            })
            if (!Camera) {
                return res.status(403).send({
                    error: 'The Camera information was incorrect'
                })
            }
            await Camera.destroy()
            res.send(Camera)
        } catch (err) {
            res.status(500).send({
                error: 'The Camera information was incorrect'
            })
        }
    },
    // get Cat by id
    async show(req, res) {
        try {
            const Camera = await Camera.findByPk(req.params.CatId)
            res.send(Camera)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'The Camera information was incorrect'
            })
        }
    }
}
