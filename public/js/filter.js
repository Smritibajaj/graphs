let array = [];

function pushinarray(obj){
    array.push(obj);
    return array;
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
    var i = array.indexOf(vname);
    array[i+1].vmperformance =vmperformance;
    array[i+1].vmpotential = vmpotential;
    console.log(array);
    return array;
});
$('#csearch').click(function(event){
    console.log(array);
    event.preventDefault();
    alert("i am called")
    var vname = $('#vname').val();
    var cmperformance = $('#cperformance').val();
    var cmpotential = $('#cpotential').val();
    var i = array.indexOf(vname);
    array[i+1].cmperformance =cmperformance;
    array[i+1].cmpotential = cmpotential;
    console.log(array);
    return array;
});
});