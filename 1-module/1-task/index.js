/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let result = 1;
  for (let i = 1; i < n; n--){
    result = n * result;
  };
  return result;
}
