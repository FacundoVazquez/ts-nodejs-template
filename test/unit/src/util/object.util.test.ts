import { getValidObject } from '../../../../src/util/object.util';

describe('Object Util', () => {
  describe('Function getValidObject()', () => {
    it('Should return an object with keys: ["id", "name"]', () => {
      const data = {
        id: 1,
        name: 'facu',
        age: 28,
      };

      const obj = getValidObject(data, ['id', 'name']);

      expect(obj).toEqual({
        id: 1,
        name: 'facu',
      });
    });
  });
});
