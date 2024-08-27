module.exports ={
    HOST : process.env.DB_HOST || 'localhost',
    USER : process.env.DB_USER || 'root',
    PASSWORD :process.env.DB_PASSWORD || 'root',
    DB : process.env.DB_NAME || 'Base_Havana',
    PORT : process.env.DB_PORT || 8889,
    dialect : 'mysql',
    pool : {
        max: 5,
        min : 0,
        acquire : 30000,
        idle : 10000
    }
}





