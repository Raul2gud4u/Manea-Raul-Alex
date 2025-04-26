function inverseAlphabet(str) {
    const aCharCode = 'a'.charCodeAt(0);
    const zCharCode = 'z'.charCodeAt(0);

    let result = '';

    for (let char of str.toLowerCase()) {
        if (char >= 'a' && char <= 'z') {
        
            const invertedChar = String.fromCharCode(zCharCode - (char.charCodeAt(0) - aCharCode));
            result += invertedChar;
        } else {
            
            result += char;
        }
    }
    function procesareText() {
        
        const inputText = document.getElementById("inputText").value;
    
       
        const reversedText = inputText.split("").reverse().join("");
    
        
        document.getElementById("outputText").textContent = reversedText;
        {const input = prompt("Introdu un string:");
            const output = inverseAlphabet(input);
            console.log(output);
            alert("Rezultatul inversarii: " + output);
            }
    }

    return result;
}
