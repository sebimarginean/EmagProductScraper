function calcTime(offset) {
    d = new Date();
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    nd = new Date(utc + (10800000*offset));
    return nd.toLocaleString();
}

module.exports = calcTime