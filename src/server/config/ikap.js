const dbOptions = {
    host: '127.0.0.1',
    port: 3050,
    database: 'C:\\iKap\\tabelas\\BASE.FDB',
    user: 'SYSDBA',
    password: 'masterkey',
    role: null,
    pageSize: 4096,
    timeout: 3000,
    lowercase_keys: true,
    retryConnectionInterval: 100
}



module.exports = {
    dbOptions
}