let express = require('express')
let http = require('http')

let app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');


app.get('/', (req, res)=>{

    let cityname = req.query;
    let city = "surat";

    if(cityname.city)
    {
        city = cityname.city.split(" ").join("%20");
    }

    var options = {
        host : 'api.openweathermap.org',
        path : '/data/2.5/weather?q=' + city + '&appid=1edc3d1b624b21f2c273f73170884d3c',
        port : 80,
        method : 'GET'
      }

      var request = http.request(options, (response) => {
        var body = "";
        response.on('data', (data) => {

            body += data;
            objdata = JSON.parse(body);
            // console.log(objdata.main.temp);
            if(objdata.cod==200){
                var data = {
                    Temp: (objdata.main.temp - 273.15).toFixed(2),
                    Tempmin: (objdata.main.temp_min - 273.15).toFixed(2),
                    Tempmax: (objdata.main.temp_max - 273.15).toFixed(2),
                    City: objdata.name,
                    Country: objdata.sys.country,
                    Status: objdata.weather[0].main,
                    Message: ""
                }
            }
            else{
                var data = {
                    Temp: "-",
                    Tempmin: "-",
                    Tempmax: "-",
                    City: "-",
                    Country: "-",
                    Status: "?",
                    Message: "Please Enter Correct CityName"
                }
            }
            res.render('home', { data:data });
            app.use(express.static(__dirname + '/public'));

        });

        
        response.on('end', (e) => { 
            if (e) return console.log("Error:", e)
            // console.log("end");
        });

      });

      request.on('error', (e) => {
        console.log('Problem with request: ' + e.message);
      });

      request.end();
      
});
  
app.listen(4000, function(req, res){
    console.log('Running...');
})