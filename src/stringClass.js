const StringManipulation = {
  /**
   * Tests if a string contains vowels
   * @return {Boolean} True or false depending on the match
   */
  hasVowels() {
    return /[aeiou]/i.test(this);
  },

  /**
   * Converts a string to uppercase characters
   * @return {String} Word in uppercase
   */
  toUpper() {
    return this.replace(/[a-z]/g, character =>
      String.fromCharCode(character.charCodeAt() - 32)
    );
  },

  /**
   * Converts a string to lowercase characters
   * @return {String} Word in lowercase
   */
  toLower() {
    return this.replace(/[A-Z]/g, character =>
      String.fromCharCode(character.charCodeAt() + 32)
    );
  },

  /**
   * Converts the first letter of a string to uppercase
   * @return {String} Word with capitalized first letter
   */
  ucFirst() {
    return this.replace(this[0], this[0].toUpper());
  },

  /**
   * Tests if a string is a question
   * @return {Boolean} True or false depending on the match
   */
  isQuestion() {
    return /^[A-Za-z0-9\s]+\?$/.test(this.trim());
  },

  /**
   *Creates a list of words from the string
   @return {Array} A list of the words
   */
  words() {
    return this.replace(/[^\w\s]/g, '').split(/\s+/);
  },

  /**
   * Checks for the number of words in a string
   * @return {Number} The total number of words in the string
   */
  wordCount() {
    return this.words().length;
  },

  /**
   * Perfoms a reverse on a string
   * @return {String} The reverse of a string
   */
  reverseWord() {
    return this.replace(/./g, (letter, index) =>
      this[this.length - (index + 1)]);
  },

  /**
   * Performs a currency representation of a string
   * @return {String} Represented as a currency
   */
  toCurrency() {
    const currencyParts = this.split(/\./);
    currencyParts[1] = currencyParts[1] || '00';
    currencyParts[0] = currencyParts[0].reverseWord()
      .replace(/.{3}/g, number => `${number},`)
      .replace(/,$/, '')
      .reverseWord();
    return `${currencyParts[0]}.${currencyParts[1].substr(0, 2)}`;
  },

  /**
   * Performs a number representation of a currency
   * @return {String} Represented as a number
   */
  fromCurrency() {
    return this.replace(/,/g, '');
  },

  /**
   * Inverts the case of a string
   * @return {String} Inverted case string
   */
  inverseCase() {
    return this.replace(/\w/g, (letter) => {
      return /[a-z]/.test(letter) ? letter.toUpper() : letter.toLower();
    });
  },

  /**
   * Alternates the case of a string
   * @return {String} Alternated case string
   */
  alternatingCase() {
    return this.replace(/\w/g, (letter, index) => {
      return (index + 1) % 2 === 0 ? letter.toUpper() : letter.toLower();
    });
  },

  /**
   * Identifies the middle character(s)
   * @return {string} The character located in the middle of the string
   */
  getMiddle() {
    const middlePosition = this.length / 2;
    return (middlePosition === parseInt(middlePosition, 10)) ?
      this.substr(middlePosition - 1, 2) : this.charAt(middlePosition);
  },

  /**
   * Converts numbers into words
   * @return {String} Representation of numbers in words
   */
  numberWords() {
    const mapNumberWords = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine'
    };

    return this.replace(/\d/g, number => `${mapNumberWords[number]} `).trim();
  },

  /**
   * Tests if string is single digit
   * @return {Boolean} True or False depending on the match
   */
  isDigit() {
    return /^\d{1}$/.test(this);
  },

  /**
   * Tests if a string contains double characters
   * @return {Boolean} True or False depending on the match
   */
  doubleCheck() {
    return /(.)\1{1}/.test(this);
  }

};

Object.assign(String.prototype, StringManipulation);
