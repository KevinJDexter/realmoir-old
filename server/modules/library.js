const Character = require('./characters');

class Library {
  constructor () {
    this.characters = []
    this.locations = []
    this.events = []
  }

  saveElement(element) {
    if (element instanceof Character) {
      this.characters.push(element);
    // } else if (element instanceof Location) {
    //   this.locations.push(element);
    // } else if (element instanceof Event) {
    //   this.events.push(element);
    }
    
  };
};

module.exports = Library;