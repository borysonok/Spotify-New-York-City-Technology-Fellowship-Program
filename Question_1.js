function sortByStrings(str, templateStr) {

    let sortedString = '';
  
    for (let i = 0; i < templateStr.length; i++) {
      for (let j = 0; j < str.length; j++) {
        if (templateStr[i] === str[j]) {
          sortedString += str[j];
        }
      }
    }
  
    return sortedString;
  }
  
  
  let s = "weather"
  let t = "therapyw"
  
  console.log(sortByStrings(s, t))// theeraw
  
  let x = "good";
  let y = "odg";
  
  console.log(sortByStrings(x, y)) // oodg