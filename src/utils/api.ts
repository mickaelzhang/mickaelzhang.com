import axios from 'axios';
var config = require('config');

var api = axios.create({
  baseURL: config.apiUrl,
});

export default api;