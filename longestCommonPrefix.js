/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const MAX_LENGTH = strs.length,
    first_el = strs[0];

  for (let i = 0; i < first_el.length; i++) {
    const char = first_el.charAt(i);

    let idx = 1;
    console.log(i);
    while (idx < MAX_LENGTH) {
      const el = strs[idx];
      if (i === el.length || el.charAt(i) != char) {
        console.log("object");
        return first_el.substring(0, i);
      }
      idx++;
    }
  }
  return first_el;
};

longestCommonPrefix(["flower", "flow", "flight"]);
