/**
 * Tests if the user submitted value for steps are valid
 *
 * @param {string} input
 * @returns {boolean} true | false
 */
const checkStepsInputFormat = (input: string) => {
  const isValid = new RegExp(
    /^[n,s,w,e]*([,]?[nswe])$/,
  ).test(input);

  return isValid;
};

export default checkStepsInputFormat;
