function translatePigLatin(str) {
  let vowelReg = /[aeiouy]/;
  let vowelOffset = str.search(vowelReg);
  if (vowelOffset == 0)
    {return str + 'way'}
  let suffix = str.substring(0, vowelOffset) + 'ay';
  let newWord = str.substring(vowelOffset) + suffix;
  console.log(newWord);

  return newWord;
}

translatePigLatin("california");