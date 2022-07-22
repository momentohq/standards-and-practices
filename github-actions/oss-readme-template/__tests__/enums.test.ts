import {enumFromValue} from '../src/enums';

describe('enumFromValue', () => {
  enum TestEnum {
    VALUE1 = 'value1',
    VALUE2 = 'foo',
  }

  it('should return the enum value if it exists', () => {
    expect(enumFromValue(TestEnum, 'value1')).toEqual(TestEnum.VALUE1);
    expect(enumFromValue(TestEnum, 'foo')).toEqual(TestEnum.VALUE2);

    const value1 = enumFromValue(TestEnum, 'value1') as unknown as TestEnum;
    const value1Value: string = value1.valueOf();
    expect(value1Value).toEqual(TestEnum.VALUE1.valueOf());
  });

  it('should throw if the enum does not contain the value', () => {
    expect(() => enumFromValue(TestEnum, 'nope')).toThrowError(
      'No enum value \'nope\' found in enum; values: ["value1","foo"]'
    );
  });
});
