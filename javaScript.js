// ArrestedDevelopment

function info() {
  $('#graph').highcharts({
      chart: {
        backgroundColor: "#17202A",
        spacingTop: 24,
        style: {
          fontSize: 12,
          fontFamily: 'Oxygen, sans-serif',
          fontWeight: 300,
        }
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: '#333333',
            stroke: '#000',
            states: {
              hover: {
                  fill: '#474747',
                  stroke: '#333',
              },
              select: {
                  fill: '#474747',
                  stroke: '#333',
              }
            }
          }
        }
     },
      yAxis: {
        allowDecimals: false,
        title: {
          text: "Lowest Successful Bid Point",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        },
        gridLineColor: 'rgba(255, 255, 255, .1)'
      },
      xAxis: {
        categories: ['AY14/15S2','AY15/16S1','AY15/16S2','AY16/17S1','AY16/17S2'],
        tickColor: "#333", // hide ticks
        lineColor: "#333", // hide line
        title: {
          text: "Semester",
          style: {
            color: "#FFF",
            fontWeight: 300,
          }
        },
        labels: {
          style: {
            color: "#999",
          }
        }
      },
      title: {
        text: $('<div/>').html('ACC1002X').text(),
        style: {
          color: "#FFF",
          font: '26px Lucida Sans Unicode',
          fontWeight: 300,
        }
      },
      legend: {
           layout: 'vertical',
           align: 'right',
           verticalAlign: 'middle',
           borderWidth: 0,
           itemStyle: {
            color: "#FFF",
        }
       },
        tooltip: {
            valueSuffix: ' Points'
        },
      series: [
      {
        name: 'Lecture 1',
        data: [
        
          {
            y:       80,
          },
        
          {
            y:       null,
          },
        
          {
            y:       83,
          },
        
          {
            y:       85,
          },
        
          {
            y:       74,
          }
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      {
        name: 'Lecture 2',
        data: [
        
          {
            y:       23,
          },
        
          {
            y:       46,
          },
        
          {
            y:       53,
          },
        
          {
            y:       75,
          },
          {
            y:       94,
          }
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      }
      ]
  });
};
