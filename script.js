function letterCombinations(input_digit) {
  let table = {
      "2": "abc",
      "3": "def",
      "4": "ghi",
      "5": "jkl",
      "6": "mno",
      "7": "pqrs",
      "8": "tvu",
      "9": "wxyz"
  }
  let solutions = [];
  
  function solve (currentIndex, calculatedString){
      if(input_digit.length <= currentIndex){
          solutions.push(calculatedString);
          return;
      }
      let currentchar = input_digit[currentIndex];
      for(let i =0; i < table[currentchar].length ; i++){
          solve( currentIndex + 1 , calculatedString + table[currentchar][i])
      }
  }
  solve(0,"")
  return ans;
}

module.exports = letterCombinations;
