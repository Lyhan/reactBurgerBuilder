const axios = require("axios");

const instance = axios.create({
    baseURL:'https://react-myburger-6bc94-default-rtdb.firebaseio.com/'
})

export default instance;