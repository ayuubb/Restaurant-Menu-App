import toggle from '../../public/images/icons/line.png';
import close from '../../public/images/icons/x.png';

class Appbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav>
      <div class="logo">
        <a href="/" class="header__logo">RESTOIN.</a>
      </div>
      <div class="toggle__menu" id="btn-menu">
        <a href="#"><img src="${toggle}" alt="toggle-menu" /></a>
      </div>
      <div class="nav-menu" id="nav-menu">
        <div class="close__btn" id="btn-close">
          <a href="#"><img src="${close}" alt="close" /></a>
        </div>
        <ul class="nav__list">
          <li class="nav__item"><a href="/" class="nav__link">Home</a></li>
          <li class="nav__item">
            <a href="#/favorite" class="nav__link">Favorite</a>
          </li>
          <li class="nav__item">
            <a
              href="https://www.linkedin.com/in/ayuubb/"
              target="_blank"
              rel="noopener noreferrer"
              class="nav__link"
              >About</a
            >
          </li>
        </ul>
      </div>
    `;
  }
}

customElements.define('app-bar', Appbar);
