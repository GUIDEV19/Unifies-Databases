const utilzIkap = require('../utils/ikapUtils')

//teste formatação nome

const nome = 'Guilherme bezerra dos santos'
const format = utilzIkap.formatNome(nome)


//teste formatação sexo

const sexo = "O   "

const formatsx = utilzIkap.formatsexo(sexo)


// teste Formatação data

const data_nasc = new Date('1981-10-28T03:00:00.000Z') 
const formatdate = utilzIkap.formatdate(data_nasc)




// teste formatação estado civil 

const estado_civil = 'Solteiro'
const formatEstadoCivil = utilzIkap.formatEstadoCivil(estado_civil)

const cpf = '708.094.561.50'
const formatCPF = utilzIkap.formatDoc(cpf)

const fone = '(51) 3249.5550 / (51) 9962.0208'
const formatFone = utilzIkap.formatFone(fone)





const obj = {
    estado_cvil: formatEstadoCivil,
    sx: formatsx,
    date_nasc: formatdate,
    nome: format,
    CPF: formatCPF,
    Telefone: formatFone
}

console.log(obj)