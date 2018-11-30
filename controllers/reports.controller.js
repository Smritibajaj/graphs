const Reports = require('../models/reports.model');
//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.get_all_graphs = function (req, res, next) {
    Reports.find({}, function(err, reports){
      //  res.render('pages/reports', { reports: reports });
      res.send(reports);
    });
};

exports.graph_details = function (req, res, next) {
    Reports.findById(req.params.id, function (err, reports) {
        if (err) { console.log(err); }
        //res.render('pages/login', { reports: reports });
        res.send(reports);
    })
};

exports.graph_create = function (req, res, next) {
    console.log(req.body)
    let reports = new Reports(
        {
        label: req.body.label,
        datasets: req.body.datasets,
        options: req.body.options,
        type : req.body.type,
        }
    );
    console.log(req.body)
    reports.save(function (err) {
        if (err) {
            console.log(err)
        }
        res.send('Graph Created successfully');
    })
};