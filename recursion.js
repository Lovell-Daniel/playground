function exponent(base, exp, initBase=base) {
  // won't work with negative exp or (0, 0)

  // handle special cases
  if (exp === 1) {
    return base;
  } else if (exp === 0) {
    return 1;
  }

  // to do in each iteration
  var result = base * initBase;

  // check to see if recursion is complete
  if (exp <= 2) {
    return result;
  } else {
    return exponent(result, exp - 1, initBase);
  }
}
