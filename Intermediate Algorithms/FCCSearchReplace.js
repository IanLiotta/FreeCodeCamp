function myReplace(str, before, after) {
    let wordIdx = 0;
    let strArr = str.split(' ');

    for (let word in strArr){
        console.log(strArr[word], before);
        if (strArr[word] == before) {break}
        wordIdx++;
    }
    console.log(wordIdx);
    strArr.splice(wordIdx, 1, testCase(strArr[wordIdx],after));
    str = strArr.join(' ');
    return str;
}

function testCase(before, after){
    for (let letter in before){
        if(/[A-Z]/.test(before[letter])) {
            after = after.replace(after[letter], after[letter].toUpperCase());

        }
    }
    console.log(after);
    return(after);
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));
testCase('Dog', 'cat');