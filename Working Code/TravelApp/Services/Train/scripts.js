
const isbooking = !!document.getElementById('trainbookingform');

const isbookingdetails = !!document.getElementById('trainBookingdetails');

const isenquiry = document.getElementById('trainEnquireform');

function trainbooking()
{
  var form = document.getElementById('trainbookingform');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
  
    var uuid = document.getElementById('input-groupUUID').value;
    console.log("uuid:", uuid);
  
    var from_station = document.getElementById('inputGroupSelect01').value;
    console.log("from_station:", from_station);
  
    var to_station = document.getElementById('inputGroupSelect02').value;
    console.log("to_station:", to_station);
  
    let str1 = document.getElementById('input-groupDate').value;
    let str2 = document.getElementById('input-grouptime').value;
  
    let date_time = str1.concat(str2);
    date_time = date_time.replace("-", "").replace("-", "").replace(":", "");
  
    console.log("date_time:", date_time);
  
    var TrainClass = document.getElementById('input-groupclass').value;
    console.log("TrainClass:", TrainClass);
  
    var no_of_passenger = document.getElementById('input-groupPassengers').value;
    console.log("no_of_passenger:", no_of_passenger);
  
    var seats = document.getElementById('input-groupSeats').value;
    console.log("seats:", seats);
  
    var special_service_flag = document.getElementById('input-groupspecialservice').value;
    console.log("special_service_flag:", special_service_flag);
  
    var food_service = document.getElementById('input-groupFood').value;
    console.log("food_service:", food_service);
  
    var luggage_service = document.getElementById('input-groupLuggage').value;
    console.log("luggage_service:", luggage_service);
  
    let url_string = "http://3.220.176.193/index.php/train/booking";
  
    url_string = url_string + "?uuid=" + uuid + "&from_station=" + from_station + "&to_station=" + to_station + "&date_time=" + date_time + "&class=" + TrainClass + "&no_of_passenger=" + no_of_passenger + "&special_service_flag=" + special_service_flag + "&seats=" + seats + "&food_service=" + food_service + "&luggage_service=" + luggage_service;
  
    console.log(url_string);
  
    console.log("API LINK");
  
    console.log(fetch(url_string));
  
    const response = await fetch(url_string);
  
    const data = await response.json();
    //console.log("output:",data);
    //const {uuid,from_station_name,to_station_name,train_date,amount,total_amount, no_of_passenger,seats,special_service_flag,food_service,luggage_service,connecting,is_connection,train_list_count,status,} = data;
  
    const { amount, connecting } = data;
  
    const modifiedData = { ...data, trainClass: data.class };
  
    //document.getElementById('amount') = amount;
    // document.getElementById('connecting') = connecting;
  
    console.log("output:", amount);
    console.log("output:", connecting);
  
    // localStorage.setItem("AMOUNT",amount);
  
    localStorage.setItem('responseData', JSON.stringify(modifiedData));
  
    window.location.href = 'booking details.html';
  })
}


function mybookingdetails()
{
  
const responseData = JSON.parse(localStorage.getItem('responseData'));

const domElementsToBeUpdated = [...document.getElementsByTagName('span')].filter(i => i.id);

domElementsToBeUpdated.forEach(function (elem) {
    document.getElementById(elem.id).innerHTML = elem.id === "path" && !!responseData.via ? responseData.via[elem.idx] : responseData[elem.id]
})

}

async function myenquiredetails() {
  addEventListener('submit', async function (event) {
    event.preventDefault();

    var uuid = document.getElementById('input-groupUUID').value;
    console.log("uuid:", uuid);

    let url_string = "http://3.220.176.193/index.php/train/enquire";

    url_string = url_string + "/" + uuid;

    console.log("API LINK");

    console.log(url_string);

    const response = await fetch(url_string);
    
    const enquiredata = await response.json();
    console.log(enquiredata);


    const domElementsToBeUpdated = [...document.getElementsByTagName('span')].filter(i => i.id);

    domElementsToBeUpdated.forEach(function (elem) {
      document.getElementById(elem.id).innerHTML = elem.id === "path" && !!enquiredata.via ? enquiredata.via[elem.idx] : enquiredata[elem.id]
  })
  

  })
}


if(isbooking)
{
   trainbooking();
}
else if(isbookingdetails)
{
   mybookingdetails();
}
if(isenquiry)
{
  myenquiredetails();
}
