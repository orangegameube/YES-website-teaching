var layout = {
  title: {
    text:'Sample Vs. Blue Paper Reflectivity',
    font: {
      family: 'Times New Roman',
      size: 24
    },
    xref: 'paper',
    x: 0.05,
  },
  paper_bgcolor: "white",
  xaxis: {
    title: {
      text: 'Wavelength (nm)',
      font: {
        family: 'Times New Roman',
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: '% reflectivity',
      font: {
        family: 'Times New Roman',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};

TESTER = document.getElementById("tester");
Plotly.newPlot(
  TESTER,
  [
    {
      x: ['red', 'green', 'orange', 'yellow', 'purple'],
      y: [1, 2, 4, 8, 16],
    type: 'bar'
    }
  ],
  layout
);
