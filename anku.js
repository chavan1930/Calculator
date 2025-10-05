let string = "";
const displayInput = document.querySelector('.display input');
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click' ,(e) => {
        let buttonText=e.target.innerHTML;
    
    if(buttonText == '='){
        try { 
            string =eval(string);
            displayInput.value = string;
            
            
        } catch (error) {
            displayInput.value = "ERROR"
            string="";
        }
    }
    else if( buttonText == 'AC' || buttonText == 'Clear'){
        string ="";
        displayInput.value = string;
    }
    else{
        string += buttonText;
        displayInput.value = string;
    }

    })
})
