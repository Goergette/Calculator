//return a calculation
function getOperation(){
    return document.getElementById("operation").innerHTML;
}
// print a calculation
function printOperation(num){
    document.getElementById("operation"). innerHTML=num ;
}
//return the result
function getResult(){
    return document.getElementById("resultat").innerHTML;
}


//print the result
function printResult(num){
    if(num == "")
    {
        document.getElementById("resultat").innerHTML=num;
    }
    else
    {
        document.getElementById("resultat").innerHTML=getFormatNumber(num);
    }
    
}
//transform a number to english format
function getFormatNumber(num){
    if (num=="-"){
        return "";
    }
    var n = Number(num);
    var value= n.toLocaleString("en")
    return value;
}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''))
}
var operator = document.getElementsByClassName("operator");
for (var i=0 ; i<operator.length; i++){
    operator[i].addEventListener('click',function(){

        //clear all numbers
        if(this.id == "clear"){
            printResult("");
            printOperation("");
        }
        // clear the last number
        else if( this.id == "backspace"){
            var result = reverseNumberFormat(getResult());
            if (result!= NaN){
                result= result.toString();
                result = result.substring(0, result.length-1) ;
                printResult(result);
            }
        }
        else
        {
            var result = getResult();
            var operat = getOperation();
            if (result!="")
            {
                result= reverseNumberFormat(result);
                operat = operat+result;
                

                if(this.id=="=")
                {
                    var result = eval(operat);
                    printResult(result);
                    printOperation("");
                     
                }
                else
                {
                    operat = operat+this.id;
                    printOperation(operat);
                    printResult("");
                }
            }
           
        }
    })
} 

//return all the number we are
var number = document.getElementsByClassName("number");
for (var i=0 ; i<number.length; i++)
{
    number[i].addEventListener('click',function(){
        var result = reverseNumberFormat(getResult());
        if (result!= NaN){
            result = result+this.id;
            printResult(result);
        }
    })
}