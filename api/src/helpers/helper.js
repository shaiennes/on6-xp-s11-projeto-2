const obterId = (array) => { // Modo de não repetir ID se alguma maravilhosa for excluida
    if (array.length > 0) {
        return array[array.length - 1].id + 1
    } else {
        return 1
    }
  }

const semNomeRepetido = (dados, nome) => {
    const encontrarRepetido = dados.find(Maravilhosa => Maravilhosa.name.toLowerCase() == nome.toLowerCase())
    return encontrarRepetido
}

module.exports = {
    obterId,
    semNomeRepetido
}