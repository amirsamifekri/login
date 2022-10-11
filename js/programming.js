
var allData = [];
if (localStorage.getItem("Data") != null){
    allData = JSON.parse(localStorage.getItem("Data"));
}





var indexEmail = document.querySelector("#indexEmail");
var indexPassword = document.querySelector("#indexPassword");


if(document.querySelector(".myIndex") != null){
document.querySelector(".myIndex").addEventListener("click" , function(){
    if(indexEmail.value == "" || indexPassword.value == ""){
        document.querySelector(".messageNotComplete").classList.remove('d-none');
        document.querySelector(".messageIncorrect").classList.add("d-none");

    }
    else{
        testData();
        indexEmail.value = "";
        indexPassword.value = "";
        document.querySelector(".messageNotComplete").classList.add('d-none');

    }
})}










var currentName;


function testData(){


var test = false ;

  for(var i=0; i<allData.length; i++){


    if(indexEmail.value == allData[i].Email && indexPassword.value == allData[i].Password){
    currentName = allData[i].Name;
    localStorage.setItem("variable" , new String (currentName))
        
        
        window.location.href = "login.html";
        test = true;
    }
  }

  if(test == false){
    
    document.querySelector(".messageIncorrect").classList.remove("d-none");
  }


}

if(document.querySelector(".logout") != null){
document.querySelector(".myName").innerHTML= "Welcome "+localStorage.getItem("variable");
}





var takeName = document.querySelector("#takeName");
var takeEmail = document.querySelector("#takeEmail");
var takePassword = document.querySelector("#takePassword");



if(document.querySelector("#takeMainButton") != null){
document.querySelector("#takeMainButton").addEventListener("click" , function(){
    if(takeName.value == "" || takeEmail.value == "" ||  takePassword.value == ""){
        document.querySelector(".takeMessageNotComplete").classList.remove('d-none');
    }
    else{
        document.querySelector(".takeMessageCorrect").classList.remove('d-none');
        takeData()
        takeName.value = "";
        takeEmail.value = "";
        takePassword.value = "";
        document.querySelector(".takeMessageNotComplete").classList.add('d-none');
        
    }

  
})}


function takeData(){

var myData = {
    Name : takeName.value ,
    Email : takeEmail.value ,
    Password : takePassword.value 
}

allData.push(myData);
localStorage.setItem("Data" , JSON.stringify(allData))

console.log(allData);
}



if(document.querySelector(".logout") != null){
document.querySelector(".logout").addEventListener("click" , function(){
    window.location.href = "index.html";
})}



