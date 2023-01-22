function plusMinusRatioChecker(arr) {
    let p = 0, n = 0, z = 0;
    const len = arr.length || 0;
    if (len > 0) {
         arr.map((el) => {
              if (el > 0) {
                   p++;
              } else if (el < 0) {
                   n++; 
              } else {
                   z++;
              }
              return el; 
         }); 
    }
    console.log((p / len) || 0);
    console.log((n / len) || 0);
    console.log((z / len) || 0);      
}

plusMinusRatioChecker([1,2,0,-1])
plusMinusRatioChecker([-1,2,0,-1])