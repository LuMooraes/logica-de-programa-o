let fruta ="Uva"

switch (fruta) {
    case "Laranja":
        console.log("Laranja é uma fruta cítrica")
        break;
    case "Maça":
        console.log("Maça é uma fruta doce")
        break;
    case "Banana":
    case "Uva":
        console.log("Banana é uma fruta amarela " + fruta)
        break;
    default:
        console.log("Não conheço essa fruta")
}