function formataData(date){
    
    let data = date;
    let ajustaMes = `${data.getMonth()}-${data.getDate()}`;


    if(ajustaMes == '2-29' || ajustaMes == '2-30' || ajustaMes == '2-31'){
        let format =  `${data.getFullYear()}-${data.getMonth()}-28 ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
        return format
    }else if(data.getMonth() == '0'){
        let format =  `${data.getFullYear()}-1-${data.getDate()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
        return format
    }else if(ajustaMes == '11-31'){
        let format =  `${data.getFullYear()}-${data.getMonth()}-30 ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
        return format
    }
    else{
        let format =  `${data.getFullYear()}-${data.getMonth()}-${data.getDate()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
        return format
    };
    
};

module.exports = formataData;