// const container = document.querySelector(".container");
// const seats = document.querySelectorAll(".row .seat:not(.occupied)");
// const count = document.getElementById("count");
// const total = document.getElementById("total");
// const movieSelect = document.getElementById("movie");

// populateUI();

// let ticketPrice = +movieSelect.value;

// // Save selected movie index and price
// function setMovieData(movieIndex, moviePrice) {
//   localStorage.setItem("selectedMovieIndex", movieIndex);
//   localStorage.setItem("selectedMoviePrice", moviePrice);
// }

// // Update total and count
// function updateSelectedCount() {
//   const selectedSeats = document.querySelectorAll(".row .seat.selected");

//   const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

//   localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

//   const selectedSeatsCount = selectedSeats.length;

//   count.innerText = selectedSeatsCount;
//   total.innerText = selectedSeatsCount * ticketPrice;

//   setMovieData(movieSelect.selectedIndex, movieSelect.value);
// }

// // Get data from localstorage and populate UI
// function populateUI() {
//   const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

//   if (selectedSeats !== null && selectedSeats.length > 0) {
//     seats.forEach((seat, index) => {
//       if (selectedSeats.indexOf(index) > -1) {
//         seat.classList.add("selected");
//       }
//     });
//   }

//   const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

//   if (selectedMovieIndex !== null) {
//     movieSelect.selectedIndex = selectedMovieIndex;
//   }
// }

// // Movie select event
// movieSelect.addEventListener("change", (e) => {
//   ticketPrice = +e.target.value;
//   setMovieData(e.target.selectedIndex, e.target.value);
//   updateSelectedCount();
// });

// // Seat click event
// container.addEventListener("click", (e) => {
//   if (
//     e.target.classList.contains("seat") &&
//     !e.target.classList.contains("occupied")
//   ) {
//     e.target.classList.toggle("selected");

//     updateSelectedCount();
//   }
// });

// // Initial count and total set
// updateSelectedCount();

// let ver = 20;
// let hello = 40;
// let name = "hello";

// if (ver > hello) {
//   console.log("hello");
// } else {
//   console.log("hello me");
// }

// const loginBtn =  document.getElementById("login");
// loginBtn.addEventListener('click' , function(){
//     const loginArea = document.getElementById('login-area');
//     loginArea.style.display = 'none';

//     const transactionArea = document.getElementById('amount');
//     transactionArea.style.display = 'block';

// })

// amount area

//  const Name = ['hello' , 'world' , 'ok'];
//  console.log(Name);

function fun() {
  let ver = 200;
  let hello = 40;
  if (ver > hello) {
    console.log("ok good work");
  } else {
    console.log("ok bad");
  }
}

const funNmae = fun(); 

var price = 100;
var price2 = 200;
if (price > price2){
  console.log(funNmae);
}


// const depositBtn =  document.getElementById('addAmount');
// depositBtn.addEventListener('click' , function(){

//     const despositAmount = document.getElementById('depositValue').value;
//     const depositNumber = parseFloat(despositAmount);

//     const currentDeposit = document.getElementById('cureentvalue').innerText;
//     const currentDepositNumber = parseFloat(currentDeposit);
//     const totalDeposit = depositNumber + currentDepositNumber;
//     document.getElementById('cureentvalue').innerText = totalDeposit;

//     update('cureentBalance' , depositNumber)
//     const currentBalance = document.getElementById('cureentBalance').innerText;
//     const currentBalanceNumber = parseFloat(currentBalance);
//     const totalBalance = depositNumber + currentBalanceNumber;
//     document.getElementById('cureentBalance').innerText = totalBalance

//     document.getElementById('depositValue').value = '';

// })

// // withdrow-amount

// const withdrow = document.getElementById('addawithdrow');
// withdrow.addEventListener('click' , function () {

//     const withdrowNumber = getNumber('withdrow');
//     update('cureentWithdraw' , withdrowNumber)
//     update('cureentBalance' , -1 * withdrowNumber)

//     document.getElementById('withdrow').value = '';

// })

// function getNumber(id) {

//     const withdrowAmount = document.getElementById(id).value
//     const withdrowNumber = parseFloat(withdrowAmount);
//     return withdrowNumber;

// }

// function update( id , depositNumber) {
//     const currentBalance = document.getElementById( id ).innerText;
//     const currentBalanceNumber = parseFloat(currentBalance);
//     const totalBalance = depositNumber + currentBalanceNumber;
//     document.getElementById( id ).innerText = totalBalance;
// }
