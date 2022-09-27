function validateName(name){
    name.replace(/[^a-zA-Z ]/g, "")
    return name
}

module.exports = validateName
