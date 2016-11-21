const StringManipulation = {
  /**
   * Tests if a string contains vowels
   * @return{Boolean} - returns true or false depending on the match
   */
  hasVowels() {
    return /[aeiou]/i.test(this);
  },
  /**
   * Converts a string to uppercase characters
   * @return{String} - string in uppercase
   */
  toUpper() {
    return this.replace(/[a-z]/g, character =>
      String.fromCharCode(character.charCodeAt(0) - 32)
    );
  },

  /**
   * Converts a string to uppercase characters
   * @return{String} - string in uppercase
   */
  toLower() {
    return this.replace(/[A-Z]/g, character =>
      String.fromCharCode(character.charCodeAt(0) + 32)
    );
  }
};

Object.assign(String.prototype, StringManipulation);
