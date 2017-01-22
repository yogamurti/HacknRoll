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
        text: $('<div/>').html('Bidding Round 1A - ACC1002X - School of Business - Programme').text(),
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
            valueSuffix: ' Point(s)'
        },
      series: [
      {
        name: 'Lecture 1',
        color:'purple',
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
        color:'green',
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
        color:'orange',
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
        text: $('<div/>').html('Bidding Round 2A - ACC1002X - School of Business - Programme').text(),
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
            valueSuffix: ' Point(s)'
        },
      series: [
      {
        name: 'Lecture 1',
        color:'purple',
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
        color:'green',
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
        color:'orange',
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
        text: $('<div/>').html('Bidding Round 2A - CS1010S - School of Computing - Programme').text(),
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
            valueSuffix: ' Point(s)'
        },
      series: [
      {
        name: 'Lecture 1',
        color:'purple',
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
        text: $('<div/>').html('Bidding Round 2A - EC1301 - School of Computing - Programme').text(),
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
            valueSuffix: ' Point(s)'
        },
      series: [
      {
        name: 'Lecture 1',
        color:'purple',
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
        color:'green',
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
        text: $('<div/>').html('Bidding Round 2A - MKT1003X - School of Computing - Programme').text(),
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
            valueSuffix: ' Point(s)'
        },
      series: [
      {
        name: 'Lecture 1',
        color:'purple',
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
        color:'green',
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
        text: $('<div/>').html('Bidding Round 2A - PL1101E - Faculty of Arts and Social Sciences - Programme').text(),
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
            valueSuffix: ' Point(s)'
        },
      series: [
      {
        name: 'Lecture 1',
        color:'purple',
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
        color:'green',
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

// not used
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
            valueSuffix: ' Point(s)'
        },
      series: [
      {
        name: 'Lecture 1',
        color:'purple',
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

function info7() {
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
        text: $('<div/>').html('Bidding Round 2A - MKT1003X - Faculty of Science - Programme').text(),
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
            valueSuffix: ' Point(s)'
        },
      series: [
      {
        name: 'Lecture 1',
        color:'purple',
        data: [

          {
            y:       1,
          },

          {
            y:       124,
          },

          {
            y:       null,
          },

          {
            y:       1,
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
      },
      {
        name: 'Lecture 2',
        color:'green',
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
            y:       1,
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

//function go() {
//  var data = document.getElementById("MC");
//  var sendData = "data=" + data;
//alert(sendData);
//  $.post("display.php", sendData, function(response) {
//    alert(response);
//  });
//}
