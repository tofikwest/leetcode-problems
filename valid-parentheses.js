/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack = [];

  if (s.length === 1) return false;

  for (let i = 0; i < s.length; i++) {
    const parenthes = s[i];

    if (parenthes in brackets) {
      stack.push(parenthes);
    } else {
      if (stack.length && brackets[stack[stack.length - 1]] === parenthes) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
