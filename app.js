const buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');

for(let button of buttons){
    button.addEventListener('click' , function(e) {
        const buttontext = e.target.innerText;
        
        if(buttontext === 'C'){
            screen.value = ' ';
        }
        else if(buttontext === '=') {
            try {
            screen.value = eval(screen.value);     
            } catch (error) {
                screen.value = "Invalid operations";
            }
           
        }
        else if(buttontext === 'X'){
            screen.value += '*';
        }
        else{
            screen.value += buttontext;
        }
        
    } )
}