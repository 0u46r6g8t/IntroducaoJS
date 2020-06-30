let name = 'default';

function getName() {
    return name;
}

function setName(value) {
    name = value;
}

module.exports = {
    getName,
    setName
};