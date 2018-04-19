const characterList = [];

class Character {
  constructor(name, birth, death, age, home) {
    this.name = name;
    this.birth = birth;
    this.death = death;
    this.age = age;
    this.home = home;
  }

  saveCharacter() {
    if (characterList.indexOf(this) == -1) {
      characterList.push(this);
    }
  }

  getCharacters() {
    return characterList;
  }
}

module.exports = Character;