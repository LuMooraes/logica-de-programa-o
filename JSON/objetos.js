class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log(`O sabor é ${this.saborDaMassa} e o recheio de ${this.saborRecheio}`)
    }

    assar(){
        console.log(`O bolo de ${this.saborRecheio} está assando...`)
    }
}

let boloFesta = new formaDeBolo ("massa de morango", "ninho")
let boloPremium = new formaDeBolo ("baunilha", "coco")

boloFesta.assar()
boloPremium.assar()