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
  let ans =[];
  
  function solve (currentIndex, calculatedString){
      if(input_digit.length <= currentIndex){
          ans.push(calculatedString);
          return;
      }
      let currentchar = input_digit[currentIndex];
      for(let i =0; i < table[currentchar].length ; i++){
          solve( currentaIndex+1 , calculatedString + table[currentchar])
      }
  }
  solve(0,"")
  return ans;
}

module.exports = letterCombinations;
