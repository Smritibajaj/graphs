//static data for graphs 
var chartData = {
    labels: ['Cananda', 'US', 'Japan', 'UK'],
    datasets: [{
       label: "1950-2000",
       backgroundColor: "blue",
       data: [2, 1.5, 1, 0.5]
    }, {
       label: "2000-2020",
       backgroundColor: "red",
       data: [1.2, -0.5, 1, -0.5]
    }, {
       label: "2020-2050",
       backgroundColor: "green",
       data: [1, -0.2, -1.2, 0.4]
    }]
 };
 var chartData = {
    labels: ['New Way', 'Old Way', '', 'UK'],
    datasets: [{
       label: "1950-2000",
       backgroundColor: "blue",
       data: [2, 1.5, 1, 0.5]
    },{
       label: "2020-2050",
       backgroundColor: "green",
       data: [1, -0.2, -1.2, 0.4]
    }]
 };
 
 var canvas = $('#canvas');
 var myBarChart = new Chart(canvas, {
    type: "bar",
    data: chartData,
    options: {
       scales: {
          yAxes: [{
             display: true,
             ticks: {
                min: -1.5,
                max: 2.5
             }
          }]
       }
    }
 });


 var canva = $('#canva');
 var chart = new Chart(canva , {
    type: 'bubble',
    data: {
      labels: "Africa",
      datasets: [
        {
          label: ["China"],
          backgroundColor: "rgba(255,221,50,0.2)",
          borderColor: "rgba(255,221,50,1)",
          data: [{
            x: 21269017,
            y: 5.245,
            r: 15
          }]
        }, {
          label: ["Denmark"],
          backgroundColor: "rgba(60,186,159,0.2)",
          borderColor: "rgba(60,186,159,1)",
          data: [{
            x: 258702,
            y: 7.526,
            r: 10
          }]
        }, {
          label: ["Germany"],
          backgroundColor: "rgba(0,0,0,0.2)",
          borderColor: "#000",
          data: [{
            x: 3979083,
            y: 6.994,
            r: 15
          }]
        }, {
          label: ["Japan"],
          backgroundColor: "rgba(193,46,12,0.2)",
          borderColor: "rgba(193,46,12,1)",
          data: [{
            x: 4931877,
            y: 5.921,
            r: 15
          }]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }, scales: {
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Happiness"
          }
        }],
        xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "GDP (PPP)"
          }
        }]
      }
    }
});