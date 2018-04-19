$.getScript('characters.js', function() {
  console.log('loaded in characters.js');
});

$(document).ready(onReady);

function onReady () {
  for (let character of characterList) {
    let newListElement = '<ul>';
    newListElement += '<li>Name: ' + character.name + '</li>';
    newListElement += '<li>Born: ' + character.born + '</li>';
    newListElement += '<li>Died: ' + character.death + '</li>';
    newListElement += '<li>Age: ' + character.age + '</li>';
    newListElement += '<li>Home: ' + character.home + '</li>';
    newListElement += '</ul>';

    $('body').append(newListElement);
  }
  // console.log(characterList);
}

