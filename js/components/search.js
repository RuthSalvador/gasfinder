'use strict';

const SearchGas = (update) => {
  const allSearch = $('<div class="container-all"></div>');
  const search = $('<div class="container-search"></div>');
  const input = $('<input id="search-input" type="search" placeholder="Ingresa tu distrito a buscar">');
  const span = $('<span class="fa fa-search" aria-hidden="true"></span>');
  const filterSearch = $('<div class="station"></div>');

  allSearch.append(search);
  search.append(input);
  search.append(span);
  allSearch.append(filterSearch);

	input.on('keyup',(e) => {
    //const filterSearch = StationContainer(update);
    if(input.val() != "") {
      const distri = filterByDistrict(state.stations, input.val());
      biRender(filterSearch,distri, update);
    }
  });

  return allSearch;
}
const biRender = (filterSearch,distri,update) => {
  filterSearch.empty();
  distri.forEach(districtStation => {
    filterSearch.append(StationItem(districtStation,update));
  });
}
