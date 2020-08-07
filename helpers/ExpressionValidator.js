const REGEX_LIST = {
    COUNTRY_NAME_REGEX: /^[A-Za-z]+((\.)?\s*[A-Za-z]+)*$/g
}

module.exports.isValidCountryName = countryName => {
    return countryName.match(REGEX_LIST.COUNTRY_NAME_REGEX);
};