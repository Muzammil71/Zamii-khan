let Enterprice= document.getElementById("Priceitem");
Enterprice.addEventListener('click',()=>{
    let price= parseInt(document.getElementById("EnterPrice").value);
    if(price>=50 && price<100){
        document.getElementById("result").innerHTML="The discount on  " + price + " amount is 10%";
    }
    else if (price >=100)
    {
        document.getElementById("result").innerHTML="The discount on " + price + " amount is 20%";
    }
    else{
        document.getElementById("result").innerHTML="The discount on " + price + " amount is 0%";
    }
});