let template = document.createElement('template')
template.innerHTML = `
  <div class="tile-wrapper">
    <span>${this.number}</span>
  </div>
`

this.number

export class CityTile extends HTMLElement {

  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode:"open" })
    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    console.log("Custom element added to page.")
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.")
  }

  adoptedCallback() {
    console.log("Custom element moved to new page.")
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed.`)
  }
}

customElements.define("city-tile", CityTile)
