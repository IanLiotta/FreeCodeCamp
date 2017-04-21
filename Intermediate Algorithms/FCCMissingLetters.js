
function fearNotLetter(str) {
    let alphabet = str.charCodeAt(0);
    let i = 0;

    for (let letter in str){
        console.log(str.charAt(letter));
        console.log(String.fromCharCode(alphabet + i));
        if(str.charAt(letter) === String.fromCharCode(alphabet + i)) 
            {console.log('true');}
        else {
            console.log('false');
            return String.fromCharCode(alphabet + i);            
            }
        i++;
    }

    return undefined;
}

console.log(fearNotLetter("bcd"));