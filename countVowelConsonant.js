function getVowels(letter){
    var m = letter.match(/[aeiou]/gi);
    return m === null ? 0 : m; 
  }
  
  function getConsonant(letter){
    var m = letter.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    // return m === null ? 0 : m.length; // to count the number of vowel letter length
    return m === null ? 0 : m; 
  }
  
  function vowelsAndConsonants(s) {
      var vowels = getVowels(s);
      var consonant = getConsonant(s);
      console.log(vowels.concat(consonant).join('\n'));
  }