/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s, sum = 0) {
  const symbols_convert = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  if (s.length === 1) {
    sum = symbols_convert[s];
    return sum;
  }

  let l = 0,
    r = 1;
  while (l < s.length) {
    let left_rom = symbols_convert[s[l]],
      right_rom = symbols_convert[s[r]];

    if (left_rom >= right_rom || right_rom === undefined) {
      sum += left_rom;
    } else {
      sum -= left_rom;
    }

    l++, r++;
  }
  return sum;
};

/*
  1 <= s.length <= 15
  "MCMXCIV"
  sum = 1994
  1000 - 100 + 1000 - 10 + 100 - 1 + 5
  l = M | r = C + 
  l = C | r = M -
  l = M | r = X +
  l = X | r = C -
  l = C | r = I +
  l = I | r = V -
  l = V +
*/
console.log(romanToInt("MCMXCIV"));
