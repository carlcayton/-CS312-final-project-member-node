const request = require("request");

const adminGetEP = "http://localhost/CS312-final-project-admin-php/api/get";
const adminPostEP = "http://localhost/CS312-final-project-admin-php/api/post";
const headers = {
    'x-api-key': 'hotdogs',
    // 'Accept': 'application/json',
    // 'Content-Type': 'application/json',
};

function initAdminEvents(id, res){
    const url = adminGetEP + "?user_id= " + id + "&action=GET_EVENTS";
    const options = {
        uri: url,
        method: "GET",
        headers: headers
    };
    request(options, (error, response, body) => {
        toReturn = body;
        res.json(JSON.parse(body))
        return;
    })
};

function createEvent(data, res) {
    const options = {
        uri: adminPostEP,
        method: "POST",
        headers: headers,
        body: data
    };
    request(options, (error, response, body) => {
        toReturn = body;
        res.json({
            message: true
        })
        return;
    })
}

module.exports = { initAdminEvents, createEvent }