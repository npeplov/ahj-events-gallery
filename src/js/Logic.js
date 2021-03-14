export default class Logic {
  constructor(gui) {
    this.gui = gui;
  }

  init() {
    this.gui.init();
    this.gui.url.addEventListener('keypress', this.checkKey.bind(this));
  }

  checkKey(e) {
    if (e.key === 'Enter') {
      if (this.gui.url.value === '') {
        this.gui.showError('Enter at least 1 symbol!');
        return;
      }
      this.gui.checkImage();
    }
  }
}
