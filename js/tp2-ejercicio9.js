// ejercicio 9

for(let i=1; i <= 500; i++){
    document.write(`${i}`);
    if (i % 4 === 0){
        document.write(' (Multiplo de 4)');
    }
    if (i % 9 === 0){
        document.write(' (Multiplo de 9)');
    }if (i % 5 === 0){
        document.write(`<p>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </p>`);
    }
    document.write(`</br>`);
}