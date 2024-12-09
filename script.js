

function backHome() {
    window.location.href = './index.html'
    clearConfirmation()
    }


function book() {
    window.location.href = './payment.html'
}


function total() {
    const tcktNumEl = document.getElementById("tcktnum") //user input
    const totalEl = document.getElementById("total")
    const costPerTicket = 4 //cost per ticket

    if (tcktNumEl && totalEl) { //get number of tickets from user
    const numTickets = parseInt(tcktNumEl.value,10) //ensures a number is used

    //calulate total cost
    if(!isNaN(numTickets) && numTickets > 0) {
    const totalCost = numTickets * costPerTicket //calculate cost

    localStorage.setItem("totalCost", totalCost)
    //display total 
    totalEl.textContent = `£ ${totalCost}`


    } else {
        totalEl.textContent = "£0"
        }
    }
}

function payOnTheDay() {

const onTheDayRadioBtn = document.getElementById("ontheday")
if (!onTheDayRadioBtn || !onTheDayRadioBtn.checked) {
    alert("Please selct 'Pay on the Day' to proceed.")
    return
}

    const groupSizeInput = document.getElementById("grpSize")
    const firstName = document.getElementById("fname").value
    const lastName = document.getElementById("lname").value

    if (!groupSizeInput || !firstName || !lastName) {
        alert("Please fill out all required fields.")
        return
    }

    const groupSIze = groupSizeInput.value
    localStorage.setItem("grpSize", groupSize)
    localStorage.setItem("firstName", firstName)
    localStorage.setItem("lastName", lastName)

    let randomNum = Math.floor(Math.random() * 1000) + 1
    localStorage.setItem("randomNum", randomNum)

    localStorage.setItem("totalCost", "0")

    window.location.href = "./confirm.html"
}

function displayTotalPaid() { //displays the total pais of the confirm page
   const totalPaidEl = document.getElementById("totalPaid")

   if (totalPaidEl) {
    const totalCost = localStorage.getItem("totalCost")

    if (totalCost) {
        totalPaidEl.textContent = `Total Paid: £${totalCost}`
    } else {
        totalPaidEl.textContent = `Total Paid: £0`
    }
   }
}

function saveGroupSize(){
    const groupSizeInput = document.getElementById("grpSize"); 
    if (groupSizeInput) {
        const groupSize = groupSizeInput.value;
        localStorage.setItem('grpSize', groupSize);
    }
}

function submitPayment(){
    const submitcc = document.getElementById("submitcc")
    if (submitcc) {
        submitcc.addEventListener("click", (event) => {
            event.preventDefault()
    
        if (window.confirm("Are you sure you want to submit?")) {

            //Get name values
            const firstName = document.getElementById("fname").value
            const lastName = document.getElementById("lname").value
            
        
            // Store name in local storage to use later in key:value pairs
            localStorage.setItem('firstName',firstName)
            localStorage.setItem('lastName', lastName)
            
            saveGroupSize()

            // Redirect to confirm page
            window.location.href = './confirm.html'

            
            
            }
        })
    }
}

    //Print the greeting
function displayGreeting(){
    const greeting = document.getElementById("greeting")
    if(greeting) {
        const firstName = localStorage.getItem('firstName')
        const lastName = localStorage.getItem('lastName')

        if (firstName) {
        greeting.textContent += ` ${firstName}!`
        }
    }
}



function confirmNumber() {
    const confirmEl = document.getElementById("confirmNum")
    
    if (confirmEl) {
        let randomNum = localStorage.getItem('randomNum')
        
        if (!randomNum) {
            randomNum = Math.floor(Math.random()* 1000)+1
            localStorage.setItem('randomNum', randomNum)
        }
        confirmEl.textContent = `Confirmation Number: ${randomNum}`
        
        }
    }

function groupSize() {
    const  grpSizeEl = document.getElementById("grpsize")//where the group size will display
    if (grpSizeEl) {
        const groupSize = localStorage.getItem('grpSize') //get item ffom local storage

        if (groupSize) {
            grpSizeEl.textContent = `Group Size: ${groupSize}` //display number
        }
    }   
}

function clearConfirmation() {
    localStorage.removeItem('randomeNum')
}


document.addEventListener("DOMContentLoaded", () => {
    const payOnTheDayButton = document.getElementById("submitInPerson");
    if (payOnTheDayButton) {
        payOnTheDayButton.addEventListener("click", payOnTheDay);
    }
    if (document.getElementById("submitcc")){
    submitPayment()
    }
    if (document.getElementById("greeting")) {
    displayGreeting() 
    }
    if (document.getElementById("confirmNum")) {
    confirmNumber()
    }
    if (document.getElementById("grpsize")) {
        groupSize()
    }
    if (document.getElementById("tcktnum")) {
    document.getElementById("tcktnum").addEventListener("input", total)
    }
    if (document.getElementById("totalPaid")) {
        displayTotalPaid()
    }
})