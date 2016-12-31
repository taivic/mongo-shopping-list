exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://taivic:3rdiudul@ds151078.mlab.com:51078/taivic' :
                            'mongodb://localhost/shopping-list-dev');
exports.PORT = process.env.PORT || 8080;