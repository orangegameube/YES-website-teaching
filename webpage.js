var trace1 = {
  x: [20.8, 13.23, 14.68, 14.65, 9.62, 8.72, 17.93, 21.92, 18.33, 52.06, 7.99, 93.08],
  y: [95, 844, 1009, 1050, 999, 1126, 948, 893, 902, 871, 883, 818],
  name: 'Sample Paper',
  type: 'bar',
}

var trace2 = {
  x: [20.8, 13.23, 14.68, 14.65, 9.62, 8.72, 17.93, 21.92, 18.33, 52.06, 7.99, 93.08],
  y: [95, 251, 216, 235, 182, 185, 248, 270, 243, 499, 158, 768],
  name: "Blue Paper",
  type: 'bar'
}


var data = [trace1, trace2];
var layout = {barmode: 'group'};
Plotly.newPlot('myDiv', data, layout);
