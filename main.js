// Back to top button 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Subscribe Email 
// Local storage
function inform_storage(){
    alert('Thank you for subscribing!');
    localStorage.setItem('subscribeEmail',document.getElementById('inputEmail').value)
    console.log(`SubscribeEmail: ${document.getElementById('inputEmail').value}`)
    
}

//localStorage.setItem('subscribeEmail','example@gmail.com')
document.getElementById('inputEmail').value = localStorage.getItem('subscribeEmail')

// Open Tab 
function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}
  
// Get the element with id="defaultOpen" and click on it
function click(){
  document.getElementById("defaultOpen").click();
}

// Open Application Form
function changeTab(){
  document.getElementById("formTab").click();
}

// Console the submit info and show alert
var contactinfo = ["fname", "lname","email","phonenum","message"]
var volunteerinfo=["fname", "lname","email","phonenum","country","reason","other","message",]
var adoptinfo = ["fname", "lname","email","phonenum","address","city","country","zip","typeanimal","age","size","reason","message"]
var donateinfo = ["fname", "lname","email","cardnum","exp","cvc","donateamount","other","purchasemethod"]
var i
function showAlert(){
  document.getElementById('successAlert').style.display = "block";
}

function submitContact(){
  console.log(`Contact Information`)
  for (let i = 0; i < contactinfo.length; i++) {
     console.log(`${contactinfo[i]} : ${this.document.getElementById(contactinfo[i]).value}`)
     document.getElementById(contactinfo[i]).value = ''
  }
}

function submitVolunteer(){
  console.log(`Volunteer Application`)
  for (let i = 0; i < volunteerinfo.length; i++) {
    console.log(`${volunteerinfo[i]} : ${this.document.getElementById(volunteerinfo[i]).value}`)
    document.getElementById(volunteerinfo[i]).value = ''
  }
}

function submitAdopt(){
  console.log(`Adopt Application`)
  for (let i = 0; i < adoptinfo.length; i++) {
    console.log(`${adoptinfo[i]} : ${this.document.getElementById(adoptinfo[i]).value}`)
    document.getElementById(adoptinfo[i]).value = ''
  }
}
function donate(){
  alert("Thank you for your generous donation!")
  // console.log(`Firstname: ${this.document.getElementById('fname').value}`)
  // console.log(`Lastname: ${this.document.getElementById('lname').value}`)
  // console.log(`Email: ${this.document.getElementById('email').value}`)
  // console.log(`Card Number: ${this.document.getElementById('cardnum').value}`)
  // console.log(`Exp: ${this.document.getElementById('exp').value}`)
  // console.log(`CVC: ${this.document.getElementById('cvc').value}`)
  // console.log(`Donate Amount: ${this.document.getElementById('donateamount').value}`)
  // console.log(`Donate Amount(other): ${this.document.getElementById('other').value}`)
  console.log(`Donate Infomation`)
  for (let i = 0; i < donateinfo.length; i++) {
    console.log(`${donateinfo[i]} : ${this.document.getElementById(donateinfo[i]).value}`)
    document.getElementById(donateinfo[i]).value = ''
  }
}

// detect radio result
function checkResult(browser) {
  document.getElementById("typeanimal").value = browser;
}
function checkResult2(browser) {
  document.getElementById("donateamount").value = browser;
}
// detect checkbox result
function checkboxResult(browser) {
  document.getElementById("reason").value += (browser+" ");
}

function focusother(){
  document.getElementById('other').focus()
}

// Drag and Drop
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  document.getElementById("purchasemethod").value = document.getElementById(data).id;
}

