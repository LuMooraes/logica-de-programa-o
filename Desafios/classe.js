class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      const ataques = {
        mago: 'magia',
        guerreiro: 'espada',
        monge: 'artes marciais',
        ninja: 'shuriken'
      };
      const ataque = ataques[this.tipo] || 'ataque desconhecido';
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso
  const heroi1 = new Heroi('Gandalf', 1000, 'mago');
  heroi1.atacar(); // saída: o mago atacou usando magia
  
  const heroi2 = new Heroi('Aragorn', 35, 'guerreiro');
  heroi2.atacar(); // saída: o guerreiro atacou usando espada
  
  const heroi3 = new Heroi('Kung Fu', 25, 'monge');
  heroi3.atacar(); // saída: o monge atacou usando artes marciais
  
  const heroi4 = new Heroi('Naruto', 20, 'ninja');
  heroi4.atacar(); // saída: o ninja atacou usando shuriken