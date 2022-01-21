var config = {
    development: {
        //url to be used in link generation
        url: 'http://localhost',
        //mariadb connection settings
        database: {
            host:   'localhost',
            port:   '3306',
            db:     'project1',
            user: 'admin',
            password: 'pass4Project12022'
        },
        //server details
        server: {
            host: 'localhost',
            port: '5000'
        }
    }
};
module.exports = config;