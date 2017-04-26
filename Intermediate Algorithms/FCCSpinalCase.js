function spinalCase(str) {
  let regPattern = /\s|_|[a-z][A-Z]/g;
  let tempResult = []
  while ((tempResult = regPattern.exec(str)) !== null){
    if(tempResult[0] === '_' || tempResult[0] === ' ') {
      str = str.replace(str[tempResult['index']], '-');
    }
    else {
      let suffix = str.slice(tempResult['index']+1);
      let affix = str.slice(0, tempResult['index']+1);
      str = affix + '-' + suffix;
    }
  }
  str = str.toLowerCase();
  return str;
}

spinalCase('This Is_SpinalTap');