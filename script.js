class Person {
  constructor(nome, anni) {
    this.nome = nome;
    this.anni = anni;
  }
  piuVecchio(persona) {
    if (persona.anni > this.anni) {
      alert(persona.nome + " è più vecchio di " + this.nome);
    }
  }
}
let p1 = new Person("Antonio", 63);
let p2 = new Person("Luca", 43);
let p3 = new Person("Giacomo", 20);
console.log(p2);
p2.piuVecchio(p3);
