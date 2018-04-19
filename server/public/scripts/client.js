// const character = require('../modules/characters');
// $.getScript('../characters.js', function () {
//   console.log()
// })

const locations = [];
const events = [];

$(document).ready(onReady);

function onReady() {
  let Falor = {
    name: 'Falor Fleetwind',
    birth: '198 Argas',
    death: '220 Argas',
    age: '22 (deceased)',
    home: 'Fleetwind Manor'
  };
  $.ajax({
    type: 'POST',
    data: Falor,
    url: '/post_char'
  }).then((response) => {
    console.log(response);
    getCharacterInfo();
  });
}

const characterList = [];

function getCharacterInfo() {
  $.ajax({
    method: "GET",
    url: '/characters'
  })
    .then(function (response) {
      console.log(response);
    })
}