var request = require('request');
var jar;

module.exports = {
    setJar: (jarParam) => {
        jar = jarParam;
    },
    getJar: () => {
        if (jar)
            return jar;
        else {
            jar = request.jar();
            return jar;
        }
    }
}