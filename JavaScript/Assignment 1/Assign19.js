let arr = [1, "what", 4, true, "cannot", false, "be", 3, true];
let reversearr ="";
for(let i=arr.length-1;i>=0;i--) {
    reversearr +=arr[i] + "   ";
    document.getElementById("result1").innerHTML = `The reverse array is [ ${reversearr} ] `;
}