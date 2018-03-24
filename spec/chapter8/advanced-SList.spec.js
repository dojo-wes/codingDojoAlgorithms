var SList = require('../../lectures/legacy/03-24-18-advanced');

describe('SList', () => {
  describe('reverse', () => {
    let testList;
    beforeEach(() => {
      testList = new SList();
    });
  
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
});

