
var button=document.getElementsByClassName("button");

var display=document.getElementById("display");

var operand1=0;
var operand2=null;
var operator=null;
for(var i=0; i<button.length; i++){
    button[i].addEventListener('click' , function(){
        var value = this.getAttribute('data-value');

        if(value == '+'){
            operator='+';
           operand1=parseFloat(display.textContent);
        }  
        else if( value == '='){
           operand2=parseFloat(display.textContent);
           result=eval(operand1 +" "+ operator + " "+ operand2)
           display.innerText=result;
        }
        else{
            display.innerText += value;
        }

    });
}


