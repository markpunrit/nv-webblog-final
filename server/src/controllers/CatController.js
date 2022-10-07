const { Cat } = require('../models')
module.exports = {
    // get all Cat
    async index(req, res) {
        try {
            const Cats = await Cat.findAll()
            res.send(Cats)
        } catch (err) {
            res.status(500).send({
                error: 'The Cats information was incorrect'
            })
        }
    },
    // create Cat
    async create(req, res) {
        console.log(JSON.stringify(req.body))
        try {
            const Cat = await Cat.create(req.body)
            res.send(Cat.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Cat incorrect'
            })
        }
    },
    // edit Cat, suspend, active
    async put(req, res) {
        try {
            await Cat.update(req.body, {
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
    
// delete Cat
async remove(req, res) {
        try {
            const Cat = await Cat.findOne({
                where: {
                    id: req.params.CatId
                }
            })
            if (!Cat) {
                return res.status(403).send({
                    error: 'The Cat information was incorrect'
                })
            }
            await Cat.destroy()
            res.send(Cat)
        } catch (err) {
            res.status(500).send({
                error: 'The Cat information was incorrect'
            })
        }
    },
    // get Cat by id
    async show(req, res) {
        try {
            const Cat = await Cat.findByPk(req.params.CatId)
            res.send(Cat)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'The Cat information was incorrect'
            })
        }
    }
}
