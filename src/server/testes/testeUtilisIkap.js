const utilzIkap = require('../utils/ikapUtils')
const querys = require('../selectQuerys/querysZscanEvo/index.js')



async function teste(){
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

const cep = '74580-460'
const CEP = utilzIkap.formatCEP(cep)

const fone = '(51) 3249.5550 / (51) 9962.0208'
const formatFone = utilzIkap.formatFone(fone)

    const city = 'PORTO ALEGRE'
    const idCity = await querys.querysTbcity.selectCytsId(city);
    const obj = {
        estado_cvil: formatEstadoCivil,
        sx: formatsx,
        date_nasc: formatdate,
        nome: format.firstName,
        nomeMeio: format.middleName,
        nomeere: format.lastName,
        CPF: formatCPF,
        Telefone: formatFone,
        cp: CEP,
        IDCITY: idCity[0].cits_code
    }
    return console.log(obj)
}







teste()