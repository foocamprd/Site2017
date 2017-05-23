$(document).ready(function() {
  console.log("ready");
  var path = "../image/profiles/profile";
  var arrayphoto = new Array();
  for(var i = 1; i < 13; i++) {
    arrayphoto[i - 1] = {url: path + i + ".jpg", sesion: "sesion" + i, title: getTitle(("sesion" + i))};
  }
  arrayphoto = _.shuffle(arrayphoto);
  firstDeck = arrayphoto.slice(0,8);
  secondDeck = arrayphoto.slice(8,10);
  thirdDeck = arrayphoto.slice(10,12);
  console.log(arrayphoto);
  // arrayphoto.pop();
  $.each( secondDeck, function( i, val ) {
    var item = "<div class='col-12 no-padding item'><a href=#"+val.sesion +"><img class'img-fluid'  src=" + val.url + "><h4 style='display:none'>"+val.title +"</h4></a></div>";
    $("#big1").append(item);
  });

  $.each( firstDeck, function( i, val ) {
    var b = 4;
    if(i == b){
      $("#grid").append("<div class='col-4 no-padding'></div>");
    }
    var item = "<div class='col-4 no-padding item'><a href=#"+val.sesion +"><img class'img-fluid'  src=" + val.url + "><h4 style='display:none'>"+val.title +"</h4></a></div>";
    $("#grid").append(item);
  });

  $.each( thirdDeck, function( i, val ) {
    var item = "<div class='col-12 no-padding item'><a href=#"+val.sesion +"><img class'img-fluid'  src=" + val.url + "><h4 style='display:none'>"+val.title +"</h4></a></div>";
    $("#big2").append(item);
  });
  // $("#big").append("<div class='col-12 no-padding'><a href=#"+lastPhoto.sesion +"><img  class'img-fluid' src=" + lastPhoto.url + "></a></div>");
  
  $("#grid .item, #big1 .item, #big2 .item").mouseover(function() {
    // console.log(this);
    // $( this ).find("img").hide();
    $( this ).find("h4").show();

    // $( this ).fadeIn( 500 );
  });

  $("#grid .item, #big1 .item, #big2 .item").mouseleave(function() {
    // console.log(this);
    // $( this ).find("img").show();
    $( this ).find("h4").hide();
    // $( this ).fadeIn( 500 );
  });

  $("#grid .item a").click (function() {
    var box = $( this ).attr("href");
    getAtention(box);
    console.log(box);
  });

});




function getTitle(i) {
  var title = $("#"+ i+ " .card .box .title").text();
  return title;
}

function getAtention(i) {
  $(i).find(".card").addClass('active')
  setTimeout(
    function() 
    {
      $(i).find(".card").removeClass('active');
    }, 2000);
}