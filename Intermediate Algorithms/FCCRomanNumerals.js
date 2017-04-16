function convertToRoman(num) {
    let numerals = [];
    while ((Math.floor(num/1000)) > 0) {
        numerals.push("M");
        num -= 1000;
    };
    while ((Math.floor(num/900)) > 0) {
        numerals.push("CM");
        num -= 900;
    };
    while ((Math.floor(num/500)) > 0) {
        numerals.push("D");
        num -= 500;
    };
    while ((Math.floor(num/400)) > 0) {
        numerals.push("CD");
        num -= 400;
    };
    while ((Math.floor(num/100)) > 0) {
        numerals.push("C");
        num -= 100;
    };
    while ((Math.floor(num/90)) > 0) {
        numerals.push("XC");
        num -= 90;
    };
    while ((Math.floor(num/50)) > 0) {
        numerals.push("L");
        num -= 50;
    };
    while ((Math.floor(num/40)) > 0) {
        numerals.push("XL");
        num -= 40;
    };
    while ((Math.floor(num/10)) > 0) {
        numerals.push("X");
        num -= 10;
    };
    while((Math.floor(num/9)) > 0) {
        numerals.push('IX');
        num -= 9;
    } 
    while((Math.floor(num/5)) > 0) {
        numerals.push('V');
        num -= 5;
    }
    while((Math.floor(num/4)) > 0) {
        numerals.push('IV');
        num -=4;
    }
    while((Math.floor(num/1)) > 0) {
        numerals.push('I');
        num -=1;
    }
    console.log (numerals.join(''));
    return numerals;
}

convertToRoman(798);