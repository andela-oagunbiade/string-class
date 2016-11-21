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
      String.fromCharCode(character.charCodeAt() - 32)
    );
  },

  /**
   * Converts a string to lowercase characters
   * @return{String} - string in lowercase
   */
  toLower() {
    return this.replace(/[A-Z]/g, character =>
      String.fromCharCode(character.charCodeAt() + 32)
    );
  },

  /**
   * Converts the first letter of a string to uppercase
   * @return{String} - string with capitalized first letter
   */
  ucFirst() {
    return this.replace(this[0], this[0].toUpper());
  },

  /**
   * Tests if a string is a question
   * @return{Boolean} - returns true or false depending on the match
   */
  isQuestion() {
    return /\?$/.test(this);
  }
};

Object.assign(String.prototype, StringManipulation);
