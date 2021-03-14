// механизм событий для элемента img
import Logic from './Logic.js';
import Gui from './Gui.js';

const gui = new Gui();
const logic = new Logic(gui);
logic.init();
