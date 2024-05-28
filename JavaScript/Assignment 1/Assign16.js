let ageOfGender=document.getElementById("EnterAge");
ageOfGender.addEventListener("click",()=>{
    let age=parseInt(document.getElementById("Age").value);
    if(age<12){
        document.getElementById("result").innerHTML="the ticket price is 5";
    }else if(age>11 && age<18){
        document.getElementById("result").innerHTML="the ticket price is 10";
    }
    else if (age>17 && age<60){
        document.getElementById("result").innerHTML="the ticket price is 20";
    }else if (age>59){
        document.getElementById("result").innerHTML="the ticket price is 15";
    }else{
        document.getElementById("result").innerHTML="Please Enter a valid age";
    }
});