let array = [];
var ctx = $("#canvas");
ctx.hide();
function createdata(labels,data1,data2,data3) {
    let data = {
        type: 'bar',
        label : labels, 
        datasets: [{
          label: 'Manager Ratings',
          backgroundColor: "#aad700",
          yAxisID: "bar-y-axis",
          //data: managerdata,
          data: data1
        }, {
          label: 'VP Ratings',
          backgroundColor: "#ffe100",
          yAxisID: "bar-y-axis",
          //data: vpdata,
          data: data2
        }, {
          label: 'CEO Ratings',
          backgroundColor: "#ef0000",
          yAxisID: "bar-y-axis",
          //data: ceodata,
          data: data3
        }],
        options: {
            title: {
              display: true,
              text: "Employee Appraisal Reports"
            },
            tooltips: {
              mode: 'label'
            },
            responsive: true,
            scales: {
              xAxes: [{
                stacked: true,
              }],
              yAxes: [{
                stacked: false,
                ticks: {
                  beginAtZero: true,
                  min: 0,
                  max: 60
                }
              }, {
                id: "bar-y-axis",
                stacked: true,
                display: false, //optional
                ticks: {
                  beginAtZero: true,
                  min: 0,
                  max: 60
                },
                type: 'linear'
              }]
            }
          }}
    return data;
}
function pushinarray(obj){
    array.push(obj);
    return array;
}
function getcanvas(ctx,data){
    var canvas = new Chart(ctx, {
      type: data.type,
      data: {labels : data.label , datasets : data.datasets},
      options:  data.options,
    });
}
function createarray(array){
    for(let i=2; i<obj.length;i++){
        let newarray = [];
        newarray.push(array[i].obj.name);
}
}
$(document).ready(function() {
$('#pusharr').click(function(event){
    event.preventDefault();
    alert("i am called")
    var name = $('#name').val();
    var mperformance = $('#performance').val();
    var mpotential = $('#potential').val();
    let obj = {
        name : name,
        managerperrating: mperformance,
        managerpotrating : mpotential,
        vmperformance:"",
        vmpotential:"",
        cmpotential:"",
        cmpotential:"",
        mtotal: parseInt(mperformance) + parseInt(mpotential),
        vtotal:"",
        ctotal:"",
    }
    pushinarray(obj);
    console.log(array);
});
$('#msearch').click(function(event){
    console.log(array);
    event.preventDefault();
    alert("i am called")
    var vname = $('#vname').val();
    var vmperformance = $('#vperformance').val();
    var vmpotential = $('#vpotential').val();
    var i = array.findIndex(x => x.name==vname);
    if(i<0){
        alert("please enter correct employee name");
        return
    }
    array[i].vmperformance =vmperformance;
    array[i].vmpotential = vmpotential;
    array[i].vtotal = parseInt(vmperformance) + parseInt(vmpotential);
    //console.log(array);
    return array;
});
$('#csearch').click(function(event){
    console.log(array);
    event.preventDefault();
    alert("i am called")
    var cname = $('#cname').val();
    var cmperformance = $('#cperformance').val();
    var cmpotential = $('#cpotential').val();
    var i = array.findIndex(x => x.name==cname);
    if(i<0){
        console.log("please enter correct employee name");
        return
    }
    array[i].cmperformance =cmperformance;
    array[i].cmpotential = cmpotential;
    array[i].ctotal = parseInt(cmperformance) + parseInt(cmpotential);
   // console.log(array);
    return array;
});

$('#graph').click(function(event){
    event.preventDefault();
    alert("i am called");
    let labels = array.map(obj => obj.name);
   console.log(labels);
   let managerdata = array.map(obj => obj.mtotal);
   console.log(managerdata);
   let vpdata = array.map(obj => obj.vtotal);
   console.log(vpdata);
    let ceodata = array.map(obj => obj.ctotal);
    console.log(ceodata);
    let data = createdata(labels,managerdata,vpdata,ceodata);
    ctx.show();
    getcanvas(ctx,data)
});
});