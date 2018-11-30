const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ReportsSchema = new Schema({
    label: {type: Array, required: true},
    datasets: {type: Array, required: true},
    options: {type: Object, required: true},
    type:{type: String,required:true},
});


// Export the model
module.exports = mongoose.model('Reports', ReportsSchema);