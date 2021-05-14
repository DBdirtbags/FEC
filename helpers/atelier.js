const axios = require('axios');
const config = require('../APIconfig');
let API_URL = 'http://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';
let qaEndpoint = 'http://qa-lb-168771840.us-east-2.elb.amazonaws.com';
let productEndpoint = 'http://load-balancer-3000-3921421.us-east-2.elb.amazonaws.com';

const getEndpoint = (endpoint, callback) => {
  if (endpoint.includes('questions') || endpoint.includes('answers')) {
    API_URL = qaEndpoint;
  } else if (endpoint.includes('products') || endpoint.includes('cart')) {
    API_URL = productEndpoint;
  } else {
    API_URL = 'http://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';
  }

  axios.get(`${API_URL}/${endpoint}`, {
    headers: {
      Authorization: config.API_KEY
    }
  })
    .then(response => {
      callback(null, response.data);
    })
    .catch(error => {
      console.log('Err getting all products from Atelier', error);
    });
};

const postToEndpoint = (endpoint, body, callback) => {
  if (endpoint.includes('questions') || endpoint.includes('answers')) {
    API_URL = qaEndpoint;
  } else if (endpoint.includes('products') || endpoint.includes('cart')) {
    API_URL = productEndpoint;
  } else {
    API_URL = 'http://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';
  }

  axios.post(`${API_URL}/${endpoint}`, body, {
    headers: {
      Authorization: config.API_KEY
    }
  })
    .then(response => {
      callback(null, response);
    })
    .catch(error => {
      console.log('Error posting to Atelier', error.message);
    });
};

const putToEndpoint = (endpoint, body, callback) => {
  if (endpoint.includes('questions') || endpoint.includes('answers')) {
    API_URL = qaEndpoint;
  } else if (endpoint.includes('products') || endpoint.includes('cart')) {
    API_URL = productEndpoint;
  } else {
    API_URL = 'http://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';
  }

  axios.put(`${API_URL}/${endpoint}`, body, {
    headers: {
      Authorization: config.API_KEY
    }
  })
    .then(response => {
      callback(null, response);
    })
    .catch(error => {
      console.log('Error updating Atelier', error);
    });
};

module.exports = {
  getEndpoint: getEndpoint,
  postToEndpoint: postToEndpoint,
  putToEndpoint: putToEndpoint
};
