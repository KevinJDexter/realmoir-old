

$(document).ready(onReady);

function onReady() {
  let Falor = {
    name: 'Falor Fleetwind',
    birth: '198 Argas',
    death: '220 Argas',
    age: '22 (deceased)',
    home: 'Fleetwind Manor'
  };
  postCharacterInfo(Falor);
  $('#objectType').on('change', charSelected);
}

function getCharacterInfo() {
  $.ajax({
    method: "GET",
    url: '/characters'
  })
    .then(function (response) {
      console.log(response);
    })
}

function postCharacterInfo(charToPost) {
  $.ajax({
    type: 'POST',
    data: charToPost,
    url: '/post_char'
  }).then((response) => {
    console.log(response);
    getCharacterInfo();
  });
}

function charSelected() {
  let objectSelected = $(this).val();
  console.log(objectSelected);
  $('.inputForm').attr('style', 'display: none');
  if (objectSelected == 'character') {
    $('#charInputs').attr('style', 'display: block');
  }
}