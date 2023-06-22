var seat1 = document.querySelectorAll('.seat1');
var seat2 = document.querySelectorAll('.seat2');
var seat3= document.querySelectorAll('.seat3');
var selectedSeats = document.getElementById('selected-seats');
var bookBtn = document.getElementById('book-btn');
var subtotal = document.getElementById("subtotal");

var selectedCount1 = 0,selectedCount2 = 0,selectedCount3 = 0;

var price3=300, price2=200, price1=100;
var temp1=0,temp2=0,temp3=0;
seat1.forEach((seat) => {
  seat.addEventListener('click', () => {
    seat.classList.toggle('selected1');

    if (seat.classList.contains('selected1')) 
    {
      selectedCount1++;
    }
    else {
        selectedCount1--;
    }
    selectedSeats.innerText = `Selected Seats: ${selectedCount2+selectedCount3+selectedCount1}`;
    
    if (selectedCount1 > 0) 
    {
        bookBtn.disabled = false;
       
          temp1 = price1*selectedCount1;
    }
    else if(selectedCount1==0){
      bookBtn.disabled = false;
      temp1 = price1*selectedCount1;
    }
    else {
        bookBtn.disabled = true;
      }
   
    });
});
    

seat2.forEach((seat) => {
  seat.addEventListener('click', () => {
    seat.classList.toggle('selected2');

    if (seat.classList.contains('selected2')) 
    {
      selectedCount2++;
    }
    else {
        selectedCount2--;
    }
    selectedSeats.innerText = `Selected Seats: ${selectedCount2+selectedCount3+selectedCount1}`; 
    
    if (selectedCount2 > 0) 
    {
        bookBtn.disabled = false;
          temp2 = price2*selectedCount2;
        
    }
    else if(selectedCount2==0){
      bookBtn.disabled = false;
      temp2 = price2*selectedCount2;
    }
    else {
        bookBtn.disabled = false;
      }
    });
});
    
seat3.forEach((seat) => {
  seat.addEventListener('click', () => {
    seat.classList.toggle('selected3');

    if (seat.classList.contains('selected3')) 
    {
      selectedCount3++;
    }
    else {
        selectedCount3--;
    }
    selectedSeats.innerText = `Selected Seats: ${selectedCount2+selectedCount3+selectedCount1}`;
    
    if (selectedCount3 > 0) 
    {
        bookBtn.disabled = false;
          temp3 = price3*selectedCount3;
    }
    else if(selectedCount3==0){
      bookBtn.disabled = false;
      temp3 = price3*selectedCount3;
    }
    else {
        bookBtn.disabled = false;
      }
    });
});


bookBtn.addEventListener("click",()=>{
  {
    subtotal.innerHTML=  temp1+temp2+temp3;
  }
});