//função de formatação de datas

function formataData(date){
    
    let data = date;
    let mes = data.getMonth() + 1;
    let ajustaMes = `${mes}-${data.getDate()}`;

    if(ajustaMes == '2-29' || ajustaMes == '2-30' || ajustaMes == '2-31'){
        let format =  `${data.getFullYear()}-${mes}-28 ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
        return format
    }else if(data.getMonth() == '0'){
        let format =  `${data.getFullYear()}-1-${mes} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
        return format
    }else if(ajustaMes == '11-31'){
        let format =  `${data.getFullYear()}-${mes}-30 ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
        return format
    }
    else{
        let format =  `${data.getFullYear()}-${mes}-${data.getDate()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
        return format
    };
    
};

module.exports = formataData;