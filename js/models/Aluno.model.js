
class AlunoModel {
    constructor({nome, _id, notas} = {notas: {}}) {
        this.nome = nome
        this._id = _id !== undefined ? _id : this.generatedId()
        this.notas = {...notas}
        this.media = {}
    }

    generatedId() {
        AlunoModel.maxId += 1
        return AlunoModel.maxId
    }
}

AlunoModel.maxId = 0