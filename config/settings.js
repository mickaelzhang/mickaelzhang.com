
const config = process.env.NODE_ENV === 'development' ? {
  'apiUrl': 'http://localhost:8888/portfolio-api/web/'
} : {
  'apiUrl': 'https://api.mickaelzhang.com/'
};

module.exports = config;