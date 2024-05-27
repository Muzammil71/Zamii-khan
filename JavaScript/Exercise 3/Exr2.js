   //let startYear ="2020";
    //let endYear = "2050";
    let WorldCupyears = " ";
    for (let i = 2022; i<=2050; i+=4){
        WorldCupyears += `<li>${i}</li>`;
    }
document.getElementById("listofWorldCup").innerHTML=`World cup years will be ${WorldCupyears}`;