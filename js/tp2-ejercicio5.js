do{
    let dni = parseInt(prompt('Ingrese DNI:'));

    if (!isNaN(dni) && dni >=0 && dni <= 99999999 ){
        resto = dni % 23
        
        switch(resto){
            case 0: alert('T');
            break;
            case 1: alert('R');
            break;
            case 2: alert('W');
            break;
            case 3: alert('A');
            break;
            case 4: alert('G');
            break;
            case 5: alert('M');
            break;
            case 6: alert('Y');
            break;
            case 7: alert('F');
            break;
            case 8: alert('P');
            break;
            case 9: alert('D');
            break;
            case 10: alert('X');
            break;
            case 11: alert('B');
            break;
            case 12: alert('N');
            break;
            case 13: alert('J');
            break;
            case 14: alert('Z');
            break;
            case 15: alert('S');
            break;
            case 16: alert('Q');
            break;
            case 17: alert('V');
            break;
            case 18: alert('H');
            break;
            case 19: alert('L');
            break;
            case 20: alert('C');
            break;
            case 21: alert('K');
            break;
            case 22: alert('E');
            break;
            default: alert('Error');
        }
    }else {
        alert("Entrada no válida. Por favor, ingresa otro número.");
    }
}while(confirm('Desea ingresar otro numero?'));