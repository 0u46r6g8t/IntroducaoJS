const user = {
    name: "Gustavo",
    lastName: "Silva Quieregato"
};

function getFullName(user){
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    };
}

const Name = getFullName(user);

console.log(Name);