//Nomes dos métodos para implementação:

const model = require("../models/maravilhosas-models")
const helper = require('../helpers/helper')
//getMaravilhosas

const selectAllData = models.selectAllData()

const getMaravilhosas = (request, response) => response.status(200).send(selectAllData)


//getMaravilhosaById

const getMaravilhosaById = (request, response) => {
    const id = request.params.id
    const encontrarId = models.selectDataById(id)
    if(encontrarId) {
        response.status(200).send(encontrarId)
    }else{
        response.status(400).send("ID não encontrado! :/")
    }
}

//addMaravilhosa 

const addMaravilhosa = (request, response) => {
    const nova = request.body
    const novaMaravilhosa = {
        id: helper.obterId(selectAllData),
        name: nova.name,
        photo: nova.photo,
        subtitle: nova.subtitle,
        about: nova.about,
        phrase: nova.phrase,
        history: nova.history,
        addedBy: nova.addedBy
    }

    const semNomeRepetido = helper.semNomeRepetido(selectAllData, nova.name)
    if (semNomeRepetido){
        response.status(400).send("Essa Maravilhosa já está cadastrada ;)")
    } else {
        if(novaMaravilhosa.id && novaMaravilhosa.name && novaMaravilhosa.photo && novaMaravilhosa.subtitle && novaMaravilhosa.about && novaMaravilhosa.phrase && novaMaravilhosa.history && novaMaravilhosa.addedBy) { 
            const insertData = models.insertData(novaMaravilhosa)
            response.status(201).json(insertData) 
        }else{
            response.status(400).json("Preencha todos os dados corretamente.") 
        }        
    }
}

//updateMaravilhosa 

const updateMaravilhosa = (request, response) => {
    const maravilhosaAtualizada = request.body
    console.log('body', maravilhosaAtualizada)
    const id = parseInt(request.params.id)
    const atualizacaoFeita = models.updateData(id, maravilhosaAtualizada)

    response.status(200).send(atualizacaoFeita)
    
}
   
//deleteMaravilhosa

const deleteMaravilhosa = (request, response) => {
    const id = request.params.id
    const encontrarId = models.selectDataById(id)
    if(models.deleteData(encontrarId)) {
    
        response.status(200).send(selectAllData)
    }else{
        response.status(404).send("ID não encontrado! :(")
    }
}

module.exports = {
    getMaravilhosas, 
    getMaravilhosaById,
    addMaravilhosa,
    updateMaravilhosa, 
    deleteMaravilhosa
} 
