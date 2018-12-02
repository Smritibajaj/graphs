let usercanvas = $('#usergraph');
usercanvas.hide();
//create canvas on the fly through get api
$(document).ready(function () {
  var ctx = $("#canvas");
  $.ajax({
    type: "GET",
    url: "http://localhost:8086/reports/5c00c3ebe7c2cc308093ba71",
    dataType: 'json',
    success: function (data) {
      var graphData = JSON.stringify(data);
      var refineddata = JSON.parse(graphData);
      console.log(refineddata);
      console.log(refineddata.datasets)
      console.log(refineddata.label)
      getcanvas(ctx, refineddata);
    },
  });
});

// common dialog box
function openDialog() {
  $("#dialog").dialog();
  $('.ui-dialog-titlebar').addClass('background');
  $('.ui-dialog-titlebar-close').addClass('dialog-box');
  var image = '<img src="/images/close.png" class="me">'
  $('.ui-dialog-titlebar-close').append(image);
  $('.me').addClass('close');
}

//function to create graph 
function getcanvas(ctx, data) {
  var canvas = new Chart(ctx, {
    type: data.type,
    data: { labels: data.label, datasets: data.datasets },
    options: data.options,
  });
}
//function redirect to personalize reports
function redirect() {
  window.location.href = '/filter';
}
// create customize graph function
function usergraphfunc() {
  //alert("Handler for .submit() called.");
  var arr = [];
  var labels = ["Fulltime", "Parttime", "Casual", "Contractor"];
  var backgroundColor = ['red', 'blue', 'green', 'yellow'];
  var graphtype = $('option:selected').text();
  $('input').each(function () {
    var input = $(this).val();
    arr.push(input);
  })
  //console.log(arr);
  var usergraph = {
    type: graphtype,
    options: {},
    label: labels,
    datasets: [{ data: arr, backgroundColor: backgroundColor }]
  }
  usercanvas.show();
  //console.log(usergraph);
  openDialog();
  getcanvas(usercanvas, usergraph);
};


