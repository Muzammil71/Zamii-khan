let sum=0;
for(let i=1; i<1000; i +=1){
    if(i%3==0 || i%5==0){
        sum +=i;
}
}
document.getElementById("result").innerHTML="the sum is "+sum;