module.exports={
    getAll: (req, res, next) => {
        const db = req.app.get('db')

        db.getAllHouses()
        .then( houses => { res.status(200).send(houses)
        // .catch( err => {
        //     res.status(500).send({errorMessage: 'Oops'})
        //     console.log(err)
        // })
        })},

    createHouse: (req, res, next) => {
        const db = req.app.get('db')
        const {propertyname, address, city, state, zip} = req.body

        console.log(req.body)
        db.create_house([propertyname, address, city, state, zip])
        .then( () => res.sendStatus(200))
    },

    deleteHouse: (req, res) => {
        const db = req.app.get('db')

        // console.log(req.params)
        db.delete_house(req.params.id)
        .then( () => res.sendStatus(200))
    }
}