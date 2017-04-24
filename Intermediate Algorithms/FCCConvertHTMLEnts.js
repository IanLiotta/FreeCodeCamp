function convertHTML(str) {
    let regPattern = /&\s|['<>"]/;

    console.log(regPattern.exec(str));
    while(regPattern.exec(str) !== null){
        str = str.replace(regPattern, function toEnt(match){
            console.log(match);
            switch(match){
                case '& ':
                    return '&amp; ';
                case '<':
                    return '&lt;';
                case '>':
                    return '&gt;';
                case '"':
                    return '&quot;';
                case '\'':
                    return '&apos;';
                default:
                    return 'error';
            }
        });
    }
        
    console.log(str);
    return str;
}

convertHTML("Dolce's");
