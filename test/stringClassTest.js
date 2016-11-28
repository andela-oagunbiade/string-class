const expect = require('chai').expect;
require('../src/stringClass');

describe('StringManipulation Class', () => {
  describe('hasVowels', () => {
    it('should return "true" if word has vowels', () => {
      expect('andela'.hasVowels()).to.be.true;
    });
    it('should also return "true" regardless of the vowel case', () => {
      expect('clAss'.hasVowels()).to.be.true;
    });
    it('should return "false" if word has only consonants', () => {
      expect('hymn'.hasVowels()).to.be.false;
    });
  });

  describe('toUpper', () => {
    it('should return the string in uppercase', () => {
      expect('amity'.toUpper()).to.equal('AMITY');
      expect('AnDelA'.toUpper()).to.equal('ANDELA');
    });
    it('should return an unchanged string if its already in uppercase', () => {
      expect('ANDELA'.toUpper()).to.equal('ANDELA')
    })
  });

  describe('toLower', () => {
    it('should return the string in lower case', () => {
      expect('ANDELA'.toLower()).to.equal('andela');
      expect('AnDeLA'.toLower()).to.equal('andela');
    });
    it('should return an unchanged string if its already in lowercase', () => {
      expect('andela'.toLower()).to.equal('andela')
    })
  });

  describe('ucFirst', () => {
    it('should return the string with the first letter in upper case', () => {
      expect('omoleye'.ucFirst()).to.equal('Omoleye');
    });
    it('should return an unchanged string if first letter is uppercase', () => {
      expect('First'.ucFirst()).to.equal('First');
    })
  });

  describe('isQuestion', () => {
    it('should return "true" if the entire string is a question', () => {
      expect('How are you?'.isQuestion()).to.be.true;
    });
    it('should return "false" if the entire string is not a question', () => {
      expect('How? are you'.isQuestion()).to.be.false;
    });
    it('should return "false" if the string does not contain at least one \
    alphanumeric character', () => {
      expect('?'.isQuestion()).to.be.false;
      expect('???'.isQuestion()).to.be.false;
      expect(' ?'.isQuestion()).to.be.false;
    });
  });

  describe('words', () => {
    it('should return a list of words', () => {
      expect('Andela is fun'.words()).to.deep.equal(['Andela', 'is', 'fun']);
    });
    it('should return a list of words without special characters', () => {
      expect("%$$33 ^^^ *** Andela i*s awesome?".words())
        .to.deep.equal(['33', 'Andela', 'is', 'awesome']);
    });
  });

  describe('wordCount', () => {
    it('should return the correct number of words', () => {
      expect('Andela is fun'.wordCount()).to.equal(3);
      expect("%$$33 ^^^ *** Andela i*s awesome?".wordCount()).to.equal(4);
    });
  });

  describe('reverseWord', () => {
    it('should return the reverse of a word', () => {
      expect('maps'.reverseWord()).to.equal('spam');
    });
    it('should return same string for a word palindrome', () => {
      expect('kayak'.reverseWord()).to.equal('kayak');
    });
  });

  describe('toCurrency', () => {
    it('should return a currency representation of a number', () => {
      expect('10000.00'.toCurrency()).to.equal('10,000.00');
    });
    it('should return a currency representation with decimals', () => {
      expect('5000'.toCurrency()).to.equal('5,000.00');
    });
    it('should return a currency representation with two decimals', () => {
      expect('123456.78945'.toCurrency()).to.equal('123,456.79');
    });
  });

  describe('fromCurrency', () => {
    it('should return a number representation of the currency', () => {
      expect('123,456,789.98'.fromCurrency()).to.equal('123456789.98');
    });
    it('should return a number representation of the currency without \
    insignificant zeroes', () => {
      expect('123,456,789.00'.fromCurrency()).to.equal('123456789');
    });
  });

  describe('inverseCase', () => {
    it('should return each letter of a string in its inverse case', () => {
      expect('Mr. Ben'.inverseCase()).to.equal('mR. bEN');
    });
  });

  describe('Method alternatingCase', () => {
    it(`should return an alternating case for each letter in a string
    starting with lower case`, () => {
      expect('Checkpoint'.alternatingCase()).to.equal('cHeCkPoInT');
    });
  });

  describe('getMiddle', () => {
    it('should return the character in the middle of a string', () => {
      expect('world'.getMiddle()).to.equal('r');
    });
    it('should return two characters for a string with an even length', () => {
      expect('worlds'.getMiddle()).to.equal('rl');
    });
  });

  describe('numberWords', () => {
    it('should return words for numbers', () => {
      expect('805'.numberWords()).to.equal('eight zero five');
    });
  });

  describe('isDigit', () => {
    it('should return "true" if string is a digit', () => {
      expect('7'.isDigit()).to.be.true;
    });
    it('should return "false" if string is not a single digit', () => {
      expect('77'.isDigit()).to.be.false;
    });
    it('should be able to handle negative and positive operators', () => {
      expect('-7'.isDigit()).to.be.true;
      expect('+7'.isDigit()).to.be.true;
    });
  });

  describe('doubleCheck', () => {
    it('should return "true" if string contains double characters', () => {
      expect('zz'.doubleCheck()).to.be.true;
      expect('&&'.doubleCheck()).to.be.true;
      expect('  '.doubleCheck()).to.be.true;
    });
  });
});
