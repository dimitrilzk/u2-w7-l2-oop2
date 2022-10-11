class Pagina {
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pageSize = 10;
  listProduct() {
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      document.getElementById("list-item").innerHTML += `<div>${item}</div>`;
    }
  }
}
let primaPagina = new Pagina();
