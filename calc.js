const buttons = document.querySelectorAll("button")
// console.log(buttons);

//recording the clicked button in global variable 


//using forEach loop to get each elemetn in items and click event gets the inner text which is to be added in the global variable "textToDisplay" above. 
let textToDisplay = "";

let lastTotal=0;


buttons.forEach((btn)=>{
    btn.addEventListener("click", e => {
       const val=  (btn.innerText);

    //on button click
        if (val ==="="){
       randomVal();
        return onTotal();
        }


        //reset display condition
        if (val=== "AC"){
            return resetDisplay();
        }


        // condition for C
        if (val ==="C"){
            textToDisplay = textToDisplay.slice(0,-1);
            return display(textToDisplay);
        }

        //turn off

        if(val==="OFF"){
            textToDisplay="";
            display(textToDisplay);
            document.getElementById("result").style.background="black";
            btn.innerText="ON"
            return;
        }

        //turn ON
        if(val==="ON"){
            textToDisplay="";
            display(textToDisplay);
            document.getElementById("result").style.background="white";
            btn.innerText="OFF"
            return;
        }
       //display all clicked buttons

       textToDisplay = textToDisplay + val;
        

       display(textToDisplay);
    })
});

//displayign text in the screen

const display = (toDisplay) => {
    if (toDisplay?.length <1){
        toDisplay = "0.00";
    }
    document.getElementById("result").innerText = toDisplay;
};

//do total calculation

const onTotal = () =>{
    const total = eval(textToDisplay)+ randomVal();
    textToDisplay = "";


    textToDisplay = total;

    

    display(total);

    displayLastTotal(total);
};

//reset display function
const resetDisplay = () =>{

    document.getElementById("result").innerText = "0.00";
    textToDisplay=lastTotal;

};

const displayLastTotal = val => {
    const histElm = document.getElementById("lastValue");
    histElm.innerHTML = val || lastTotal;
};

//random value generator

const randomVal = () => {
    const random= Math.floor(Math.random()*10);
    return random <3 ? random : 0;
}