const StringManipulation = {
  /**
   * Tests if a string contains vowels
   * @return{Boolean} - returns true or false depending on the match
   */
  hasVowels() {
    return /[aeiou]/i.test(this);
  },
};

Object.assign(String.prototype, StringManipulation);
