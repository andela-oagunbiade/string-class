const expect = require('chai').expect;
require('../src/stringClass');

// Take a closer look at the "it" statements
describe('String Class', () => {
  describe('Method hasVowels', () => {
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

  describe('Method toUpper', () => {
    it('should return the string in uppercase', () => {
      expect('amity'.toUpper()).to.equal('AMITY');
    });
  });

  describe('Method toLower', () => {
    it('should return the string in lower case', () => {
      expect('AnDeLA'.toLower()).to.equal('andela');
    });
  });

  describe('Method ucFirst', () => {
    it('should return the string with the first letter in upper case', () => {
      expect('omoleye'.ucFirst()).to.equal('Omoleye');
    });
  });

  describe('Method isQuestion', () => {
    it('should return if the string is a question', () => {
      expect('How are you?'.isQuestion()).to.be.true;
    });
  });

  describe('Method words', () => {
    it('should rerurn a list of words', () => {
      expect('Andela is fun'.words()).to.equal(['andela', 'is', 'fun']);
    });
  });
  // Ensure ths method uses words method above
  describe('Method wordCount', () => {
    it('should return the correct number of words', () => {
      expect('Andela is fun'.wordCount()).to.equal(3);
    });
  });

  describe('Method toCurrency', () => {
    it('should return a currency representation of a number', () => {
      expect('10000.00'.toCurrency()).to.equal('10,000.00');
    });
  });

  describe('Method fromCurrency', () => {
    it('should return a number representation of the curency', () => {
      expect('10,000.00'.fromCurrency()).to.equal('10000.00');
    });
  });

  describe('method inverseCase', () => {
    it('should return each letter of a string in its inverse case', () => {
      expect('Mr. Ben'.inverseCase()).to.equal('mR. bEN');
    });
  });

  describe('Method alternatingCase', () => {
    it('should return an alternating case for each letter in a string starting with lower case', () => {
      expect('Checkpoint'.alternatingCase()).to.equal('cHeCkPoInT');
    });
  });

  describe('Method getMiddle', () => {
    it('should return characters in the middle of a string', () => {
      expect('world'.getMiddle()).to.equal('r');
      expect('worlds'.getMiddle()).to.equal('rl');
    });
  });

  describe('Method numberWords', () => {
    it('should return words for numbers', () => {
      expect('805'.numberWords()).to.equal('eight zero five');
    });
  });

  describe('Method isDigit', () => {
    it('should return "true" if string is a digit', () => {
      expect('7'.isDigit()).to.be.true;
      expect('77'.isDigit()).to.be.false;
    });
  });

  describe('Method doubleCheck', () => {
    it('should return "true" if string contains double characters', () => {
      expect('zz'.doubleCheck()).to.be.true;
      expect('&&'.doubleCheck()).to.be.true;
      expect('  '.doubleCheck()).to.be.true;
    });
  });
});
