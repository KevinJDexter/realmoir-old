const Character = require('./characters');

class Library {
  constructor () {
    characters: []
    locations: []
    events: []
  }

  saveElement(element) {
    if (element instanceof Character) {
      characters.push(element);
    // } else if (element instanceof Location) {
    //   locations.push(element);
    // } else if (element instanceof Event) {
    //   events.push(element);
    }
    
  };
};

module.exports = Library;