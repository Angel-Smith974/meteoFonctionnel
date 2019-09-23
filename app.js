$(document).ready(function () {
    $("#reset").click(function (e) {
        location.reload();
    });
    935146
    [-21.1, 55.6]
    $("#actualiser").click(function (e) {
        $.ajax({
            type: "POST",
                 url: "http://api.openweathermap.org/data/2.5/group?id=935146&APPID=9670e6a5402cd91b21657044e695cb4c&units=metric&lang=fr",
              dataType: "json",
            success: function (result, status, xhr) {
                res = CreateWeatherJson(result);
              
            },
           
        });
    });

    function CreateWeatherJson(json) {
        var newJson = "";
        for (i = 0; i < json.list.length; i++) {
            cityId = json.list[i].id;
            coord = json.list[i].coord.lon;
            temp = json.list[i].main.temp +"°C";
            pressure = json.list[i].main.pressure;
            humidity = json.list[i].main.humidity;
            tempmin = json.list[i].main.temp_min;
            tempmax = json.list[i].main.temp_max;
            nom = json.list[i].name;
            meteo = json.list[i].weather[i].description;

        }
        document.getElementById("temp").innerHTML = temp;
        document.getElementById("nom").innerHTML = nom;
        console.log(json.list)
        console.log("la météo est " + meteo);
    }
});
