var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PISwitch' });
});

router.get('/button/:action',function(req,res){
  console.log(req.params);
  var actionString = req.params.action;
  console.log("action:" + actionString);
  var PythonShell = require('python-shell');
  
  var options = {
    mode: 'text',
    scriptPath: '/home/pi/Desktop/node/PiSwitch/PiSwitch/python/',
    args: [actionString]
  };
  PythonShell.run('command.py', options, function (err, results){
    
    console.log('result: %j', results);
  });
});

module.exports = router;
