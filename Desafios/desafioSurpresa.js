// ### O QUE PRECISA SER FEITO ?

//Crie um código para armazenar o máximo de informações possível dos pokemon da imagem ao lado e ao final, para cada um, exiba uma mensagem de saída escrita o nome do pokemon concatenado com "Cadastrado com sucesso"

let nomePokemon = ["Poochyena" , "Zigzagoon" , "Dragonite" , "Dragonite" , "Dragonite" , "Poochyena" , "Wurmple"]
let infoPokemon = [
["Lv2" , "Sexo: M" , "HP: 13/13"],
["Lv2" , "Sexo: F" , "HP: 13/13"],
["Lv5" , "Sexo: M" , "HP: 25/25"],
["Lv5" , "Sexo: F" , "HP: 24/24"],
["Lv5" , "Sexo: F" , "HP: 24/24"],
["Lv3" , "Sexo: F" , "HP: 15/15"],
["Lv2" , "Sexo: M" , "HP: 07/10"],
]

console.log("O pokemon " + nomePokemon [2] + " está no " + infoPokemon [2][0] + " é do " + infoPokemon [2][1] + " tem o " + infoPokemon[2][2] + " e esta cadastrado com sucesso");