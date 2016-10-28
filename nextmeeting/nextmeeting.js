var dragons = [
  { name:'Alex'},
{ name:'Zach'},
{ name:'Laura'},
{ name:'Pat'},
{ name:'John'},
{ name:'Natalie'},
{ name:'Alvin'},
{ name:'Dave'},
{ name:'Martyna'},
{ name:'Greta'},
{ name:'Roshan'},
{ name:'Janna'},
{ name:'Craig'},
{ name:'Rebecca'},
{ name:'Melissa'},
{ name:'Randy'},
{ name:'Pete'},
{ name:'Spin Again'}
];

$(function() {

var $r = $('.roulette').fortune(dragons);

var clickHandler = function() {
  $('.spinner').off('click');
  $('.spinner span').hide();
  $r.spin().done(function(dragon) {
    $('.dragon').text('You have: ' + dragon.name);
    $('.spinner').on('click', clickHandler);
    $('.spinner span').show();
  });
};

$('.spinner').on('click', clickHandler);
});