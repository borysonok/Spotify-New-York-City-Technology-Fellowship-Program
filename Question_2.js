function decodeString(str) {
    // console.log("start string:", str); 
    let i = 0;
    let decoded = '';
    var numberOfRepeats = '';
    while (str[i] !== '[' && str[i] !== ']') {
      if (parseInt(str[i])) {
        numberOfRepeats += str[i];
        // console.log("n ******* ", numberOfRepeats);
      } else {
        decoded += str[i];
        // console.log("s +++++++ ", decoded);
      }
      i++;
    }
  
    let num = 1;
    if (numberOfRepeats) {
      num = parseInt(numberOfRepeats, 10);
      // console.log("num ******* ", num);
    }
  
    if (i < str.length - 1) {
      let newStr = str.slice(i + 1);
      // console.log("new string ------- ", newStr);
      return decoded + decodeString(newStr).repeat(num);
    } else {
      // console.log("decoded ======= ", decoded);
      return decoded.repeat(num);
    }
  }
  
  
  
  let s1 = "4[ab]"
  console.log(decodeString(s1)); // decodeString(s) = "abababab" 
  
  let s2 = "2[b3[a]]"  
  console.log(decodeString(s2)); // decodeString(s) = "baaabaaa"