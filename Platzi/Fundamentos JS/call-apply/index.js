class Toogable {
  constructor(el) {
    this.el = el
    this.el.innerHTML = 'Off'
    this.activated = false
    this.el.addEventListener('click', this.onClick.bind(this))
  }
  onClick(){
    this.activated = !this.activated   // cambiar estado
    this.toogleText() // llamar toogleText
  }
  toogleText(){
    // cambiar texto
    this.el.innerHTML = this.activated? 'On' : 'Off'
  }
}

const button = document.getElementById('boton')
const miBotom = new Toogable(button)
