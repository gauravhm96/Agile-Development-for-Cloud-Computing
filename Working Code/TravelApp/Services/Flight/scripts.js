
const searchflights = !!document.getElementById('FlightSearch');

async function MyFlightSearch() {
  addEventListener('submit', async function (event) {
    event.preventDefault();

    var source = document.getElementById('inputGroupSelect01').value;
    console.log("from_station:", source);
  
    var destination = document.getElementById('inputGroupSelect02').value;
    console.log("Destination:", destination);
  
    var travel_date = document.getElementById('input-groupDate').value;
    console.log("from_station:", travel_date);
  
    let url_string = "https://flightserviceapitest.herokuapp.com/search";

    url_string = url_string + "?source="+source+"&destination="+destination+"&travel_date="+travel_date;

    console.log("API LINK");

    console.log(url_string);

    console.log("Test");


    const express = require("express");
    const app = express()
    const cors = require("cors")
    app.use(
      cors({
        origin : url_string,
        credentials:true,
        //methods: ['GET', 'POST'],
      })
    )
    
    
    fetch(url_string,{ method:"PUT",credentials:"include"})
      .then(res => res.json())
      .then(data=> console.log(data))
    // var xhr = new XMLHttpRequest()
    // xhr.onreadystatechange=function(){
    //   if(this.readyState == 4 && this.status == 200){
    //     console.log(xhr.responseText);
    //   } else {
    //     console.log("error");
    //   }
    // };
    // xhr.open("GET", url_string);
    // xhr.responseType = 'json';
    // xhr.send();
    // xhr.withCredentials = true;
    // xhr.onload = function (e) {
    //   if (this.status == 200) {
    //     console.log('response', this.response); // JSON response  
    //   }
    // };
    
    // console.log(xhr);



    // const response = await fetch(url_string);

    // const enquiredata = await response.json();
    // console.log(enquiredata);
  
    // const data = await response.json();
    // console.log(data);

  //   const domElementsToBeUpdated = [...document.getElementsByTagName('span')].filter(i => i.id);

  //   domElementsToBeUpdated.forEach(function (elem) {
  //     document.getElementById(elem.id).innerHTML = elem.id === "path" && !!enquiredata.via ? enquiredata.via[elem.idx] : enquiredata[elem.id]
  // })
  

  })
}


if(searchflights)
{
  MyFlightSearch();
}