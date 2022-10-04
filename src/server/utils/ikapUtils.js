class UtilsIkap {

    static formatsexo(sexo){
        let format = sexo.replace(/\s/g, '')
        if(format == 'M'){
            return 1;
        };

        if(format == 'F'){
            return 2;
        }else{
            return 3;
        };
    };

    static formatdate(date){
        let mes = date.getMonth() + 1;
        let format =  `${date.getFullYear()}-${mes}-${date.getDate()}`;
        return format;
    };

    static formatEstadoCivil(estado_civil){
        if(estado_civil == 'Solteiro(a)'){
            return 1;
        }else{
            return 5;
        };
    };

    static formatNome(name){
        let parts = name.split(' ');
        let firstName;
        let middleName;
        let lastName;
    
        if (parts.length > 2) {
            firstName = parts[0];
            middleName = parts[1];
            lastName = getLastName(parts, 2);
        } else if (parts.length > 1) {
            firstName = parts[0];
            lastName = parts[1];
        } else {
            firstName = name;
        }

        return {
            firstName,
            middleName,
            lastName
        }

        function getLastName(name, index) {
            let auxlastName = name.splice(index).join(' ');
            return auxlastName;
        }
    }

    static formatDoc(doc){
        return doc.replace(/[\(\)\.\s-]+/g,'')
    }

    static formatCEP(cep){
        return cep.replace(/[-]+/g,'')
    }

    static formatFone(fone){
        const format = fone.replace(/[\(\)\.\s-]+/g,'')
        const separaFone = format.split('/')
        return separaFone
    }
}

module.exports = UtilsIkap