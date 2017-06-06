'use strict';

const SearchGas = () => {
  const search = $('<div class="container-search"></div>');
  const input = $('<input type="search" placeholder="Ingresa tu distrito a buscar">');
  const span = $('<span class="fa fa-search" aria-hidden="true"></span>');

  search.append(input);
  search.append(span);


  return search;
}
