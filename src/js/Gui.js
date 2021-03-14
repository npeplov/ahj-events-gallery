export default class Gui {
  constructor() {
    this.name = document.querySelector('input[name=title]');
    this.url = document.querySelector('input[name=url]');
    this.gallery = document.querySelector('.gallery');
    this.error = document.querySelector('.error');
  }

  init() {
    this.gallery.addEventListener('click', this.removeImage.bind(this));
  }

  checkImage() {
    const img = document.createElement('img');
    img.src = this.url.value;
    img.onload = () => { this.addImage(img); };
    img.onerror = () => { this.error.innerHTML = 'Error in image url'; };
  }

  addImage(img) {
    const wrapper = document.createElement('div');
    this.gallery.appendChild(wrapper);
    wrapper.appendChild(img);

    const close = document.createElement('div');
    close.className = 'close';
    wrapper.appendChild(close);

    this.url.value = '';
    this.name.value = '';
    this.error.innerHTML = '';
  }

  removeImage(e) {
    this.gallery.removeChild(e.target.parentElement);
  }

  showError(error) {
    this.error.innerHTML = error;
  }
}
