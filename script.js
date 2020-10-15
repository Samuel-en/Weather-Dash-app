// created an ajax call
$(document).ready(function () {
    console.log("hello");
    
    $("#yieldWeather").click(function () {
        var city = $(city).val();
    
        if (city != "") {
          $.ajax({
            url:
              "http//api.openweathermap.org/data/2.5/forecast?q=" + city + "&units = metric" +
              "&appid=af418dd03c2c611c561b7cbb2962897c",
      
          });
    
        }else{
            $("error").html('Search cannot be empty');
    
        }
      });
});
