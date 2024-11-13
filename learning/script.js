let first = 0
let second = 0
let result = 0
let isOperation
let operator

function getValue(self) 
{
    let value = self.value;
    let output = document.getElementById('output')

    
    if (!isNaN(parseFloat(value))) 
    {
        // Adding value to input
        output.value += value
    }
    else
    {
        // Button for Special Editing
        if (value === "AC") 
        {
            operator = ''
            first = 0
            second = 0
            output.value = '';
        }
        if (value === "⬅") 
            output.value = output.value.slice(0, -1);
        if (value === ".") 
            output.value += '.';
        
        // Operator Checker
        let patern = /[\^\√\÷\x\-\+\=]/g;
        let checker = value.match(patern);
        isOperation = checker !== null;

        // Masukan Input
        if(!isOperation)
        {
            operator = ''
            second = 0
            first = 0
        }
        else
        {
            if (first === 0 || first === NaN)
            {
                first = parseFloat(output.value)
                operator = checker
            }   
            else if(!(first === 0 || first === NaN) 
                && !(second === 0 || second === NaN)) 
            {
                first = result
                second = parseFloat(output.value)
                operator = checker
            }
            else
            {
                second = parseFloat(output.value)
            }

            console.log("A " + first)
            console.log("B " + second)
            console.log("O " + operator)
            
            if(operator == "√")
            {
                result = Math.sqrt(first);
                output.value = result
            }
            if(operator == "^")
            {
                result = first ** second;
                output.value = ''
            }
            if(operator == "÷")
            {                
                result = first / second;
                output.value = ''
            }
            if(operator == "x")
            {
                result = first * second;
                output.value = result
            }
            if(operator == "-")
            {
                result = first - second;
                output.value = ''
            }
            if(operator == "+")
            {
                result = first + second;
                output.value = ''
            }

            if(value == "=")
                output.value = result
            

            
            console.log("result : " + result)
        }
    } 
}