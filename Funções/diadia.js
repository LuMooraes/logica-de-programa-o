let userName = getFirstName("Lucas Moraes de Matos", " ")

console.log("Welcome " + userName)

function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}