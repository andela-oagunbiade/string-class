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
  },

  /**
   *Creates a list of words from the string
   @return{Array} - a list of the words
   */
  words() {
    return this.replace(/[^\w\s]/g, '').split(/[\s]/);
  },

  /**
   * Checks for the number of words in a string
   * @return{Number} - returns the total number of words in the string
   */
  wordCount() {
    return this.words().length;
  }
};

Object.assign(String.prototype, StringManipulation);
