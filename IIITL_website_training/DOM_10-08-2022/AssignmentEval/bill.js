var count=21;
function initialize(){
    const numNodewatt=document.querySelectorAll(".wattField");
    const numNodeUsage=document.querySelectorAll(".usageField");
    const numUsage1=document.querySelectorAll(".usageField1");
    const numWatt1=document.querySelectorAll(".wattField1");

    //initialize washroom bulbs
    for(let i=0;i<numWatt1.length;i++){
        numUsage1[i].value=10;
        numWatt1[i].value=12;
    }

    for(let i=0;i<numNodeUsage.length;i++)
    {
        if(numNodewatt[i].classList.contains("fan")){
            numNodewatt[i].value=60;
            numNodeUsage[i].value=20;
        }
        else if(numNodewatt[i].classList.contains("AC")){
            numNodewatt[i].value=1500;
            numNodeUsage[i].value=8;
        }
        else if(numNodewatt[i].classList.contains("tubelight")){
            numNodewatt[i].value=40;
            numNodeUsage[i].value=8;
        }
        else if(numNodewatt[i].classList.contains("bulb")){
            numNodewatt[i].value=20;
            numNodeUsage[i].value=12;
        }

    }

}

function calculatebill(){
    const numNodewatt=document.querySelectorAll(".wattField");
    const numNodeUsage=document.querySelectorAll(".usageField");
    const numUsage1=document.querySelectorAll(".usageField1");
    const numWatt1=document.querySelectorAll(".wattField1");
    let totwatt=0;
    let usage_val=0;
    let consumption=0;
   
    // console.log(numNode);
    for(let i=0;i<numNodeUsage.length;i++)
    {
        totwatt=totwatt + parseInt(numNodewatt[i].value);
        consumption=consumption+ (parseInt(numNodeUsage[i].value)*parseInt(numNodewatt[i].value));

    }
    for(let i=0;i<numUsage1.length;i++){
        totwatt=totwatt+(parseInt(numWatt1[i].value));
        consumption=consumption+(( numUsage1[i].value*numWatt1[i].value));   // consumption added for 3 washroom. total consumption per day.
    }
    //consumption=consumption+(( numUsage1[0].value*numWatt1[0].value)*3);
    // totwatt=totwatt+((numWatt1[0].value)*3);
    let annualConsumption=consumption*365; // annual consumption.
    consumption=consumption*30;  // consumption of 30 days;
    
    
    document.querySelector(".billLoad").innerHTML="Your total Load is : "+totwatt+" W";
    document.querySelector(".billConsumption").innerHTML= "Your Monthly Consumption is : "+(consumption)/1000+" KWH";
    document.querySelector(".billAmount").innerHTML="Your Bill Amount is : "+"Rs."+ ((consumption/1000)*5);
    document.querySelector('.annualConsump').innerHTML="Your Annual Consumption is: "+(annualConsumption/1000)+" KWH";
    if(count==0)
    {

    }

}

function deleteAppliance(element){
    
    element.parentNode.parentNode.remove();
    count=count-1;
    if(count==0)
    {
    document.querySelector(".billLoad").innerHTML="Your total Load is : 0 W";
    document.querySelector(".billConsumption").innerHTML= "Your Monthly Consumption is : 0 KWH";
    document.querySelector(".billAmount").innerHTML="Your Bill Amount is : "+"Rs.0";
    document.querySelector('.annualConsump').innerHTML="Your Annual Consumption is: 0 KWH";
    }else
    {
        calculatebill();
    }
}

// function addAppliance(element){
//     element.
// }