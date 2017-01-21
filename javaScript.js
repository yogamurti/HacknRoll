// ArrestedDevelopment

function info0() {
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
     plotOptions: {
       series: {
         connectNulls: true
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
        categories: ['AY14/15S1','AY14/15S2','AY15/16S1','AY15/16S2','AY16/17S1','AY16/17S2'],
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
            y:       null,
          },

          {
            y:       null,
          },

          {
            y:       null,
          },

          {
            y:       null,
          },

          {
            y:       null,
          },

          {
            y:       0,
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
            y:       null,
          },

          {
            y:       null,
          },

          {
            y:       null,
          },

          {
            y:       null,
          },

          {
            y:       null,
          },

          {
            y:       1,
          }
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      {
        name: 'Lecture 3',
        data: [

          {
            y:       null,
          },

          {
            y:       null,
          },

          {
            y:       null,
          },

          {
            y:       null,
          },

          {
            y:       null,
          },

          {
            y:       0,
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


function info1() {
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
     plotOptions: {
       series: {
         connectNulls: true
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
        categories: ['AY14/15S1','AY14/15S2','AY15/16S1','AY15/16S2','AY16/17S1','AY16/17S2'],
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
            y:       761,
          },

          {
            y:       0,
          },

          {
            y:       1139,
          },

          {
            y:       1,
          },

          {
            y:       1194,
          },

          {
            y:       501,
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
            y:       700,
          },

          {
            y:       0,
          },

          {
            y:       1009,
          },

          {
            y:       0,
          },

          {
            y:       387,
          },

          {
            y:       1,
          }
        ],
        marker: {
            radius: 4,
            symbol: "circle"
        }
      },
      {
        name: 'Lecture 3',
        data: [

          {
            y:       550,
          },

          {
            y:       1,
          },

          {
            y:       907,
          },

          {
            y:       1,
          },

          {
            y:       102,
          },

          {
            y:       0,
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

function info2() {
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
     plotOptions: {
       series: {
         connectNulls: true
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
        categories: ['AY14/15S1','AY14/15S2','AY15/16S1','AY15/16S2','AY16/17S1','AY16/17S2'],
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
        text: $('<div/>').html('CS1010S').text(),
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
            y:       4000,
          },

          {
            y:       0,
          },

          {
            y:       1238,
          },

          {
            y:       1,
          },

          {
            y:       3127,
          },

          {
            y:       1,
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

function info3() {
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
     plotOptions: {
       series: {
         connectNulls: true
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
        categories: ['AY14/15S1','AY14/15S2','AY15/16S1','AY15/16S2','AY16/17S1','AY16/17S2'],
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
        text: $('<div/>').html('EC1301').text(),
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
            y:       1,
          },

          {
            y:       0,
          },

          {
            y:       0,
          },

          {
            y:       0,
          },

          {
            y:       0,
          },

          {
            y:       0,
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
            y:       null,
          },

          {
            y:       0,
          },

          {
            y:       1,
          },

          {
            y:       0,
          },

          {
            y:       0,
          },

          {
            y:       1,
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

function info4() {
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
     plotOptions: {
       series: {
         connectNulls: true
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
        categories: ['AY14/15S1','AY14/15S2','AY15/16S1','AY15/16S2','AY16/17S1','AY16/17S2'],
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
        text: $('<div/>').html('MKT1003X').text(),
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
            y:       1,
          },

          {
            y:       1,
          },

          {
            y:       null,
          },

          {
            y:       0,
          },

          {
            y:       null,
          },

          {
            y:       0,
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
            y:       null,
          },

          {
            y:       0,
          },

          {
            y:       null,
          },

          {
            y:       0,
          },

          {
            y:       null,
          },

          {
            y:       0,
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

function info5() {
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
     plotOptions: {
       series: {
         connectNulls: true
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
        categories: ['AY14/15S1','AY14/15S2','AY15/16S1','AY15/16S2','AY16/17S1','AY16/17S2'],
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
        text: $('<div/>').html('PL1101E').text(),
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
            y:       400,
          },

          {
            y:       1,
          },

          {
            y:       966,
          },

          {
            y:       1,
          },

          {
            y:       805,
          },

          {
            y:       1,
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
            y:       427,
          },

          {
            y:       1,
          },

          {
            y:       884,
          },

          {
            y:       1,
          },

          {
            y:       900,
          },

          {
            y:       1,
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

function info6() {
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
     plotOptions: {
       series: {
         connectNulls: true
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
        categories: ['AY14/15S1','AY14/15S2','AY15/16S1','AY15/16S2','AY16/17S1','AY16/17S2'],
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
        text: $('<div/>').html('CS1010S').text(),
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
            y:       null,
          },

          {
            y:       700,
          },

          {
            y:       null,
          },

          {
            y:       null,
          },

          {
            y:       null,
          },

          {
            y:       null,
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

function go() {
  var data = document.getElementById("MC");
  var sendData = "data=" + data;
alert(sendData);
  $.post("display.php", sendData, function(response) {
    alert(response);
  });
}
