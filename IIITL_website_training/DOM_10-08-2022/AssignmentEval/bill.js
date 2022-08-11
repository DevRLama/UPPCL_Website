


function initialize()
{
    const numNodewatt=document.querySelectorAll(".wattField");
    const numNodeUsage=document.querySelectorAll(".usageField");
    const numUsage1=document.querySelectorAll(".usageField1");
    const numWatt1=document.querySelectorAll(".wattField1");
    numUsage1[0].value=0;
    numWatt1[0].value=0;

    for(let i=0;i<numNodeUsage.length;i++)
    {
        numNodeUsage[i].value=0;
        numNodewatt[i].value=0;

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
    totwatt=totwatt+(parseInt(numWatt1[0].value))*3;
    consumption=consumption+(( numUsage1[0].value*numWatt1[0].value)*3)   // consumption added for 3 washroom. total consumption per day.
    let annualConsumption=consumption*365; // annual consumption.
    consumption=consumption*30;  // consumption of 30 days;
   
    // numNodewatt.forEach(element => {
        
    //     totwatt=totwatt + parseInt(element.value);
    //     consumption=consumption+ parseInt(element)


        
    // });
    
    document.querySelector(".billLoad").innerHTML= totwatt+" W";
    document.querySelector(".billConsumption").innerHTML= (consumption)/1000+" KWH";
    document.querySelector(".billAmount").innerHTML="Rs."+ ((consumption/1000)*5);
    document.querySelector('.annualConsump').innerHTML=(annualConsumption/1000)+" KWH";

    // const val=document.querySelectorAll('.appliance');
    // const val1=document.querySelectorAll('#fan1')
    // console.log(val1);
    // val.forEach(element => {
    //     console.log(element.childNodes.textContent)
        
    // });


}

function myfunction(element)
{
    element.remove();
}