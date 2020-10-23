//Nomes dos métodos para implementação:

const model = require("../models/maravilhosas-models")

//getMaravilhosas

const getMaravilhosas = (request, response) => {
    response.status(200).json(model.selectAllData())
}

//getMaravilhosaById

const getMaravilhosaById = (request, response) => {
    const id = parseInt(request.params.id)
    const maravilhosa = model.selectDataById(id)

    if(maravilhosa){
        response.status(200).json(maravilhosa)
    } else {
        response.status(404).json({ mensagem: 'Id não encontrado'})
    }
}

//addMaravilhosa 

const addMaravilhosa = (request, response) => {
    const newData = request.body

    const addedData = model.insertData(newData)
    if(addedData){
        response.status(201).json(addedData)
    } else {
        response.status(206).json({ mensagem: 'Algum campo não foi preenchido corretamente'})
    }
}

//updateMaravilhosa 

const updateMaravilhosa = (request, response) => {
    const updatedData = request.body
    const id = parseInt(request.params.id)
    const update = model.updateData(updatedData, id)
    if(update) {
        response.status(200).json(update)
    } else {
        response.status(404).json({ mensagem: 'Id não encontrado'})
    } 
}
//deleteMaravilhosa

const deleteMaravilhosa = (request, response) => {
    const id = parseInt(request.params.id)

    const deleted = model.deleteData(id)

    if(deleted) {
        response.status(200).json(deleted)
    } else {
        response.status(404).json({ mensagem: 'Id não encontrado'})
    }
}

module.exports = {
    getMaravilhosas,
    getMaravilhosaById,
    addMaravilhosa,
    updateMaravilhosa,
    deleteMaravilhosa
}