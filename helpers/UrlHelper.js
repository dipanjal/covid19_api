module.exports.removeFBCLID = (url) => {
    return this.replaceByRegex(REGEX_PROPERTIES.FBCLID_REGEX, url, '');
};

module.exports.replaceByRegex = (regex, string, replaceWithString) => {
    return string.replace(new RegExp(regex), replaceWithString);
};

let REGEX_PROPERTIES = {
    FBCLID_REGEX: '\\?fbclid=.*$'
};