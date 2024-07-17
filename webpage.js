var traceOG = {
  x: ['DV', 'Blue (470)', 'Cyan (500)', 'Green (550)', 'Yellow (600)', 'Orange (630)', 'Red (665)', 'Deep Red (780)', 'IR1', 'IR2', 'IR3', 'IR4'],
  y: [20.8, 13.23, 14.68, 14.65, 9.62, 8.72, 17.93, 21.92, 18.33, 52.06, 7.99, 93.08],
  type: 'bar',
}

var data = [traceOG];
var layout = {title: 'Spectrometer Experiment Wavelength Vs. % Reflectivity',
              xaxis: {title: 'Color and Wavelength (nm)'},
              yaxis: {title: '% Reflectivity'}
             };


Plotly.newPlot('myDiv', data, layout);




// var trace1 = {
//   x: [95, 844, 1009, 1050, 999, 1126, 948, 893, 902, 871, 883, 818],
//   y: [20.8, 13.23, 14.68, 14.65, 9.62, 8.72, 17.93, 21.92, 18.33, 52.06, 7.99, 93.08],
//   name: 'Sample Paper',
//   type: 'bar',
// }

// var trace2 = {
//   x: [95, 251, 216, 235, 182, 185, 248, 270, 243, 499, 158, 768],
//   y: [20.8, 13.23, 14.68, 14.65, 9.62, 8.72, 17.93, 21.92, 18.33, 52.06, 7.99, 93.08],
//   name: "Blue Paper",
//   type: 'bar'
// }

// var layout = {barmode: 'group',
//              title: 'Spectrometer Experiment Wavelength Vs. % Reflectivity',
//               xaxis: {title: 'Color and Wavelength (nm)'},
//               yaxis: {title: '% Reflectivity'}
//              };

// var data = [trace1, trace2];
// var layout = {barmode: 'group'};
// Plotly.newPlot('myDiv2', data2, layout2);
