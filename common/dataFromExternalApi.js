const fetch = require("node-fetch");

module.exports = async function (apiUrl) {
    return await fetch(apiUrl)
    .then(resp => resp.json())
    .then(json => json)
    .catch(error => error)
}

/* 
Usage Example:
const DataFromExternalApi = require("./common/DataFromExternalApi");
apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=lombardia&units=metric&appid=042559fc8f13bd0e86e557aa02965a24";
dataFromExternalApi(apiUrl).then(info => console.log(info))
 */