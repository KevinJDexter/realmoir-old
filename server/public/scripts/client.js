

$(document).ready(onReady);

function onReady() {
  // let Falor = {
  //   name: 'Falor Fleetwind',
  //   birth: '198 Argas',
  //   death: '',
  //   age: '22 (deceased)',
  //   home: 'Fleetwind Manor'
  // };
  // postCharacterInfo(Falor);
  $('#objectType').on('change', dropDownSelected);
  $('.submitButton').on('click', submitForm);
  $('#charDiv').on('click', 'h3', toggleInfo);
  getCharacterInfo();
}

function submitForm () {
  if ($('#objectType').val() == 'character') {
    let newChar = {
      name: $('#nameIn').val(),
      birth: $('#birthIn').val(),
      death: $('#deathIn').val(),
      age: $('#ageIn').val(),
      home: $('#homeIn').val()
    };
    console.log("KABLAMO")
    postCharacterInfo(newChar);
  }
}

function getCharacterInfo() {
  $.ajax({
    method: "GET",
    url: '/characters'
  })
    .then(function (response) {
      console.log(response);
      response.forEach(character => {
        if (character.death == '') {
          character.death = 'Living';
        } else {
          character.age += ' (deceased)';
        }
        $('#charDiv').append(
          `<div><h3>${character.name}</h3>
          <div class="charInfo" style="display: none">
          <p><strong>Lived:</strong> ${character.birth} - ${character.death}</p>
          <p><strong>Age:</strong> ${character.age}</p>
          <p><strong>Home:</strong> ${character.home}</p>
          </div></div>`)
      });
    })
}

function postCharacterInfo(charToPost) {
  $.ajax({
    method: 'POST',
    data: charToPost,
    url: '/post_char'
  }).then((response) => {
    console.log(response);
    getCharacterInfo();
  });
}

function dropDownSelected() {
  let objectSelected = $(this).val();
  console.log(objectSelected);
  $('.inputForm').attr('style', 'display: none');
  if (objectSelected == 'character') {
    $('#charInputs').attr('style', 'display: block');
  }
}

function toggleInfo() {
  el = $(this).siblings();
  let isShowing = (el.attr('style') == 'display: block')
  $('.charInfo').attr('style', 'display: none');
  if (!isShowing) {
    $(this).siblings().attr('style', 'display: block');
  }
}