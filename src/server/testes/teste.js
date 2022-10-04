const biblioteca = {
    ":?ads": "á",
    ":.sdf": "Á"
  }
  
  
  const texto = ":?ads :.sdf :?ads :.sdf" ;
  
  // const textoFormatado = texto.replace()
  
  function replace(texto) {
    const keys = Object.keys(biblioteca); //[":?ads", ":.sdf"]
  
  
  
    // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    // console.log(keys);
  
    keys.forEach((key) => {
        if (texto.includes(key)) {
            texto = texto.replace(key, biblioteca[key]);
        }
    });
  
    return texto;
  }
  
  console.log(replace(texto));