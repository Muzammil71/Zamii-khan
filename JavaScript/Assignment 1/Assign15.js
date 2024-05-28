let btn = document.getElementById("EvenOddnumber");
btn.addEventListener('click',()=>{
    let num=document.getElementById("PositiveNegative").value;
    if(num>0){
        console.log("The number is positive");
        document.getElementById("result").innerHTML="The number is positive";
    }
    if(num<0) {
        console.log("negative")
        document.getElementById("result").innerHTML= "The number is negative";
    }
    if (num==0){
        console.log("zero")
        document.getElementById("result").innerHTML= "The number is zero";
    }
});