
function pairElement(str) {
    let result = [];
    let i = 0;

    function findPair(a){
        switch (a) {
            case 'A':
                return 'T';
            case 'T':
                return 'A';
            case 'G':
                return 'C';
            case 'C':
                return 'G';
            default:
                return 'X';
        }
    }

    for (let val in str) {
        result[i] = [];
        result[i].push(str.charAt(val));
        result[i].push(findPair(str.charAt(val)));
        console.log(result);
        i++;
    }

    /*
    result[0] = [];
    result[0].push('A');
    result[0].push('T');
    console.log(result);*/

  return result;
}

pairElement("GCG");
