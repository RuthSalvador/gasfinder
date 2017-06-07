'use strict';

const SearchGas = (update) => {
  const allSearch = $('<div class="container-all"></div>');
  const search = $('<div class="container-search"></div>');
  const input = $('<input id="search-input" type="search" placeholder="Ingresa tu distrito a buscar">');
  const span = $('<span class="fa fa-search" aria-hidden="true"></span>');
  const prueba = $('<div class="station"></div>');

  allSearch.append(search);
  search.append(input);
  search.append(span);
  allSearch.append(prueba);

	input.on('keyup',(e) => {
    //const prueba = StationContainer(update);
    if(input.val() != "") {
      const distri = filterByDistrict(state.stations, input.val());
      biRender(prueba,distri, update);
    }
  });

  return allSearch;
}
const biRender = (prueba,distri,update) => {
  prueba.empty();
  distri.forEach(districtStation => {
    prueba.append(StationItem(districtStation,update));
  });
}
