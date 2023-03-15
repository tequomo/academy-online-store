(function() {
  var init = function() {
    var mySlider = new rSlider({
      target: '#sampleSlider',
      values: [10000, 1000000],
      range: true,
      tooltip: true,
      scale: true,
      labels: false,
      step: 10000
    });
  };
  window.onload = init;
})();
