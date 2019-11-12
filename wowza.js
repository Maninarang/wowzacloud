
const express= require('express');
const app = express();
const request = require("request");

const hostname = 'https://api.cloud.wowza.com'
const path = '/api/v1.3/live_streams/';
const wscApiKey = 'aLo9yKGAeKOB6xZvXLvnu1WeEQDhvwuiLLh0HH8yKNwJO6CyYQrN90WNwcAz3420';
const wscAccessKey = '1RSQqQGHDv4tW2QQRECCrhr4aCrbtUbVUxSvSyCrPR4oVdTFgHmGK0EoDXLR332b';
const  headers = { 
  'wsc-access-key': wscAccessKey,
  'wsc-api-key': wscApiKey
}


//////======================== Create Stream=======================///////////

app.post('/createStream',(req,res) => {

const options = { method: 'POST',
  url: hostname + path,
  headers: headers,
  body: 
   { live_stream: 
      { name: 'mani',
        transcoder_type: 'transcoded',
        billing_mode: 'pay_as_you_go',
        broadcast_location: 'us_west_california',
        encoder: 'other_rtmp',
        delivery_method: 'push',
        aspect_ratio_width: 1920,
        aspect_ratio_height: 1080 } },
        json: true 
      };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  res.send(body);
});

})

//////======================== Start/ Stop Stream =======================///////////


app.put('/streamStatus/:streamId/:status',(req,res) => {
const options = { 
  method: 'PUT',
  url: hostname + path + req.params.streamId+ '/'+ req.params.status,
  headers:  headers
   }
request(options, function (error, response, body) {
  if (error) throw new Error(error);
  res.send(body)
  //console.log(body);
});

})

//////======================== get list of streams============= ///////////

app.get('/streams',(req,res) => {

const options = { method: 'GET',
  url: hostname + path,
  headers: headers
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  res.send(body)
  console.log(body);
});

})


//////======================== stream Detail============= ///////////

app.get('/stream/:streamId',(req,res) => {

  const options = { method: 'GET',
    url: hostname + path + req.params.streamId,
    headers: headers
      };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  res.send(body)
    console.log(body);
  });
  
  
  })


/////=================== state of stream =============//////////


app.get('/streamState/:streamId',(req,res) => {

  const options = { method: 'GET',
    url: hostname + path + req.params.streamId+ '/state',
    headers: headers
      };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  res.send(body);
    console.log(body);
  });
  

})


////////=================== get metrics of stream ==============////////


 app.get('/streamMetrics/:streamId',(req,res) => {
  const options = { method: 'GET',
    url: hostname + path + req.params.streamId+ '/stats',
    headers: headers
      };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.send(body)
  });
  
 })

app.listen(3000);