
function generateFibonacci(limit) {
    const fib = [0, 1];
    while (true) {
        const next = fib[fib.length - 1] + fib[fib.length - 2];
        if (next > limit) break;
        fib.push(next);
    }
    return fib;
}


function displayFibonacciInRange(n1, n2) {
    if (n1 > n2) {
        console.log("Interval invalid: n1 trebuie să fie mai mic sau egal cu n2.");
        return;
    }

    const fibNumbers = generateFibonacci(n2);
    const filteredFib = fibNumbers.filter(num => num >= n1 && num <= n2);

    console.log(`Numerele Fibonacci din intervalul [${n1}, ${n2}] sunt:`);
    console.log(filteredFib.join(", "));
}


const n1 = parseInt(prompt("Introduceți primul număr (n1):"), 10);
const n2 = parseInt(prompt("Introduceți al doilea număr (n2):"), 10);


displayFibonacciInRange(n1, n2);