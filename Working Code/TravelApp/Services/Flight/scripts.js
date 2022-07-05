
const searchflights = !!document.getElementById('FlightSearch');

const flightsFare = !!document.getElementById('formGetFlightDetails');

const flightsBook = !!document.getElementById('formBookFlights');

const flightsReschedule = !!document.getElementById('formReschedule');

const flightsCancel = !!document.getElementById('formCancel');

async function MyFlightSearch() {
  addEventListener('submit', async function (event) {
    event.preventDefault();

    var source = document.getElementById('inputGroupSelect01').value;
    console.log("from_station:", source);
  
    var destination = document.getElementById('inputGroupSelect02').value;
    console.log("Destination:", destination);
  
    var travel_date = document.getElementById('input-groupDate').value;
    console.log("from_station:", travel_date);
  
    let url_string = "https://flightserviceapitest.herokuapp.com/search/";

    url_string = url_string + "?source="+source+"&destination="+destination+"&travel_date="+travel_date;

    console.log("API LINK");

    console.log(url_string);

    console.log("Test");

    const response = await fetch(url_string, {
      mode: 'no-cors',
      method:"GET", 
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Accept': "application/json"
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer'
    });

    console.log(response);
  })
}



async function GetFlightFare() 
{
  addEventListener('submit', async function (event) {
    event.preventDefault();

    var ItenaryID = document.getElementById('input-groupItenaryID').value;
    console.log("Itenary ID:", ItenaryID);
  
    var SeatID = document.getElementById('input-groupSeatID').value;
    console.log("Seat ID:", SeatID);
  
    var Gender = document.getElementById('input-groupSexgetbook').value;
    console.log("Gender :", Gender);

    var Age = document.getElementById('input-groupAgegetbook').value;
    console.log("Age :", Age);

    var Date = document.getElementById('input-groupDatef').value;
    console.log("Date :", Date);
  
    let url_string = "https://flightserviceapitest.herokuapp.com/fare/";

    url_string = url_string + "?itinerary_id="+ItenaryID+"&seat_id="+SeatID+"&customer_gender="+Gender+"&customer_age="+Age+"&travel_date="+Date;

    console.log("API LINK");

    console.log(url_string);

    console.log("Test");

    const response = await fetch(url_string, {
      mode: 'no-cors',
      method:"GET", 
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Accept': "application/json"
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer'
    });

    console.log(response);

  })
}



async function BookFlight() 
{
  addEventListener('submit', async function (event) {
    event.preventDefault();

    var ItenaryID = document.getElementById('input-groupItenaryID').value;
    console.log("Itenary ID:", ItenaryID);
  
    var SeatID = document.getElementById('input-groupSeatID').value;
    console.log("Seat ID:", SeatID);

    var FirstName = document.getElementById('input-groupFirst').value;
    console.log("Seat ID:", FirstName);

    var LastName = document.getElementById('input-groupLast').value;
    console.log("Seat ID:", LastName);
  
    var Gender = document.getElementById('input-groupSex').value;
    console.log("Gender :", Gender);

    var Age = document.getElementById('input-groupAge').value;
    console.log("Age :", Age);

    var Date = document.getElementById('input-groupDatef').value;
    console.log("Date :", Date);
  
    let url_string = "https://flightserviceapitest.herokuapp.com/book/";

    url_string = url_string + "?itinerary_id="+ItenaryID+"&seat_id="+SeatID+"&customer_first_name="+FirstName+"&customer_last_name="+LastName+"&customer_gender="+Gender+"&customer_age="+Age+"&travel_date="+Date;

    console.log("API LINK");

    console.log(url_string);

    console.log("Test");

    // const response = await fetch(url_string, {
    //   mode: 'no-cors',
    //   method:"POST", 
    //   cache: 'no-cache',
    //   credentials: 'same-origin',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': "application/json"
    //   },
    //   redirect: 'follow',
    //   referrerPolicy: 'no-referrer'
    // });

    // console.log(response);

  })
}




async function RescheduleFlight() 
{
  addEventListener('submit', async function (event) {
    event.preventDefault();

    var BookingID = document.getElementById('input-groupRescheduleBookingtID').value;
    console.log("Booking ID:", BookingID);
  
    var Date = document.getElementById('input-groupRescheduleBookingDate').value;
    console.log("Date :", Date);
  
    let url_string = "https://flightserviceapitest.herokuapp.com/reschedule/";

    url_string = url_string + "?booking_id="+BookingID+"&travel_date="+Date;

    console.log("API LINK");

    console.log(url_string);

    console.log("Test");

    // const response = await fetch(url_string, {
    //   mode: 'no-cors',
    //   method:"PUT", 
    //   cache: 'no-cache',
    //   credentials: 'same-origin',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': "application/json"
    //   },
    //   redirect: 'follow',
    //   referrerPolicy: 'no-referrer'
    // });

    // console.log(response);

  })
}


async function CancelFlight() 
{
  addEventListener('submit', async function (event) {
    event.preventDefault();

    var BookingID = document.getElementById('input-groupCancelBookingtID').value;
    console.log("Booking ID:", BookingID);
    
    let url_string = "https://flightserviceapitest.herokuapp.com/cancel/";

    url_string = url_string + "?booking_id="+BookingID;

    console.log("API LINK");

    console.log(url_string);

    console.log("Test");

    // const response = await fetch(url_string, {
    //   mode: 'no-cors',
    //   method:"PUT", 
    //   cache: 'no-cache',
    //   credentials: 'same-origin',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': "application/json"
    //   },
    //   redirect: 'follow',
    //   referrerPolicy: 'no-referrer'
    // });

    // console.log(response);

  })
}



if(searchflights)
{
  MyFlightSearch();
}
else if(flightsFare)
{
  GetFlightFare();
}
else if(flightsBook)
{
  BookFlight();
}
else if(flightsReschedule)
{
  RescheduleFlight();
}
else if(flightsCancel)
{
  CancelFlight();
}
