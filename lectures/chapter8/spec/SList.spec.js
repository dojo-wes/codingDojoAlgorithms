const SList = require('../2018-03-26');

describe('SList', () => {
  let testList;
  beforeEach(() => {
    testList = new SList();
  });

  describe('reverse', () => {

    it('should reverse the list for > 2 vals', () => {
      const vals = [1, 2, 3, 4];
      testList.addMultiple(vals);
  
      expect(
        testList.reverse().toArr()
      ).toEqual([4, 3, 2, 1]);
    });
  
    it('should reverse list for 2 vals', () => {
      const vals = [1, 2];
      testList.addMultiple(vals);
  
      expect(
        testList.reverse().toArr()
      ).toEqual([2, 1]);
    });
  
    it('should return list for 1 val', () => {
      const vals = [1];
      testList.addMultiple(vals);
  
      expect(
        testList.reverse().toArr()
      ).toEqual([1]);
    });
  
    it('should return null with no values', () => {
      expect(
        testList.reverse()
      ).toBe(null);
    });
  });

  describe('isPalindrome', () => {

    it('should return true if list is an odd length palindrome', () => {
      const vals = ['l', 'e', 'v', 'e', 'l'];
      testList.addMultiple(vals);

      expect(
        testList.isPalindrome()
      ).toBe(true);
    });

    it('should return true if there\'s only one value', () => {
      testList.addBack(1);

      expect(
        testList.isPalindrome()
      ).toBe(true);
    });

    it('should return false if list is not a palindrome', () => {
      const vals = ['l', 'e', 'v'];
      testList.addMultiple(vals);

      expect(
        testList.isPalindrome()
      ).toBe(false);
    });

    it ('should return true if list is an even length palindrome', () => {
      const vals = ['l', 'e', 'v', 'v', 'e', 'l'];
      testList.addMultiple(vals);

      expect(
        testList.isPalindrome()
      ).toBe(true);
    });

    it ('should return null if list contains no nodes', () => {

      expect(
        testList.isPalindrome()
      ).toBe(null);
    })
  });
});

