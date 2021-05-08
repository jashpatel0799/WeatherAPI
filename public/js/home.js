let curDate = document.getElementById('date');
let weatherIcon = document.getElementById('weathericon');
let tempStatus = weatherIcon.innerHTML;

if(tempStatus == "Sunny")
{
    weatherIcon.innerHTML = "<i class='fa fa-sun' style='color: #eccc68;'></i>";
}
else if(tempStatus == "Clouds")
{
    weatherIcon.innerHTML = "<i class='fa fa-cloud' style='color: #ffffff;'></i>";
}
else if(tempStatus == "Rainy")
{
    weatherIcon.innerHTML = "<i class='far fa-cloud-rain' style='color: #a4b0be;'></i>";
}
else if(tempStatus == "?"){
    weatherIcon.innerHTML = "<i class='fa fa-minus' style='color: #ffffff;'></i>";
}
else
{
    weatherIcon.innerHTML = "<i class='fa fa-sun' style='color: #eccc68;'></i>";
}

let getCurrentDay = () => {
    let currentTime = new Date();
    let weekdays = new Array(7);
    weekdays[0] = "SUN";
    weekdays[1] = "MON";
    weekdays[2] = "TUS";
    weekdays[3] = "WED";
    weekdays[4] = "THU";
    weekdays[5] = "FRI";
    weekdays[6] = "SAT";

    return weekdays[currentTime.getDay()];
}

let getCurrentDate = () => {
    let currentDate = new Date();
    let totalMonth = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUNE",
        "JULY",
        "AUG",
        "SEPT",
        "OCT",
        "NOV",
        "DEC"
    ]
    let day = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
    month = totalMonth[month];

    let hours = currentDate.getHours();
    let mins = currentDate.getMinutes();

    let perios = 'AM';

    if(hours>12 && mins>00){
        perios = 'PM';
        hours = hours - 12;
    }
    else{
        perios = 'AM';
    }
    if(hours<10){
        hours = "0" + hours;
    }
    if(mins<10){
        mins = "0" + mins;
    }

    return `${month} ${day}, ${year} | ${hours}:${mins}${perios}`;
}

let day = getCurrentDay()
let date = getCurrentDate()

curDate.innerHTML = day + " | " + date;

let mes = document.getElementById("note");
let message = mes.getAttribute('value');

function myFunction(){
    if(message == "Please Enter Correct CityName"){
        window.alert(message);
    }
}