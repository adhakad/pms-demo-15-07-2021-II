const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://pms-demo:@Aa1Bb2Hh3@@cluster0.ngu0t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology:true,useFindAndModify:false,});
var conn =mongoose.Collection;
var classDateSchema =new mongoose.Schema({
    room_id:
    {
        type:Number, 
    },
    school_key:
    {
        type:String,
    },
    start_date:
    {
      type:Number,  
      default:Date.now(),
    },
});

var classDateModel = mongoose.model('classDate', classDateSchema);
module.exports=classDateModel;

//mongodb+srv://pms-demo:@Aa1Bb2Hh3@@cluster0.ngu0t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority