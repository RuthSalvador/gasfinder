'use strict';

const SearchGas = () => {
  const search = $('<div class="container-search"></div>');
  const input = $('<input type="search" placeholder="Ingresa tu distrito a buscar">');
  const span = $('<span class="fa fa-search" aria-hidden="true"></span>');


  search.append(input);
  search.append(span);

/*  input.on('keypress',(e) => {
    if (e.which != "") {
      text: input.val(),
      completed: false,
    }
  });*/
  return search;
}