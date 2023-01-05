

$(function() {
  var apiKey = "7cba649e57cb52cf1e78aa8bb6aa1a02";

  $(document).on("click", "#search", function() {
    console.log("search", $("#city").val());

     $.get("http://api.openweathermap.org/geo/1.0/direct?q="+ $("#city").val() + "&limit=5&appid=" + apiKey, function(result) {
      console.log("city", result);

      try {
        //Write city to header
        $("#city-header").html(result[0].name + ", " + result[0].state );

        // search for weather using result[0].latitude and result[0].longitude
        // http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}

        // display results

        // make history button, append to #history

        
      }
      catch {
        $("#city-header").html("City not found");

      }
  
      }, "json");

  });

});

