class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section>
      <div class="hero">
        <div tabindex="0" class="hero__desc">
          <h1 class="hero__text">Selamat datang di RESTOIN</h2>
          <p>Temukan restoran favorite mu untuk tempat makan</p>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define('hero-section', Hero);
