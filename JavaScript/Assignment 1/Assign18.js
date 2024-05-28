let array_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let array_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
let sum1=0;
let sum2=0;
let totalsum =0;
for(let i=0;i<array_1.length;i++) {
    sum1 +=array_1[i];
    document.getElementById("result1").innerHTML ="The sum of array_1 is : " + sum1;
}
for(let j=0;j<arr_2.length;j++) {
    sum2 +=arr_2[j];
    document.getElementById("result2").innerHTML ="The sum of array_2 is :  " + sum2;
}
totalsum=sum1+sum2;
document.getElementById("result3").innerHTML = "The sum of array_1 and array_2 :  " + totalsum;