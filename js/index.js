'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header(_ => render(root)));

  if (state.selectedStation == null) {
    wrapper.append(SearchGas(_ => {
      render(root);
      }));
    wrapper.append(StationContainer(_ => {
        render(root);
    }));
  } else {
    wrapper.append(StationDetails(_ => {
      render(root);
    }));
  }

  root.append(wrapper);
};

const state = {
  stations: null,
  selectedStation: null
};

$( _ => {

  getJSON('stations.json', (err, json) => {

    if (err) { return alert(err.message);}

    state.stations = json;

    const root = $('.root');
    render(root);
  });

});
