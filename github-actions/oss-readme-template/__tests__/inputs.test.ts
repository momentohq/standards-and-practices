import {ProjectStatus, validateProjectStatus} from '../src/inputs';

describe('validateProjectStatus ', () => {
  it('should return the enum value if it exists', () => {
    expect(validateProjectStatus('official')).toEqual(ProjectStatus.OFFICIAL);
  });

  it('should throw if the enum does not contain the value', () => {
    expect(() => validateProjectStatus('taco')).toThrowError(
      'No enum value \'taco\' found in enum; values: ["official","incubating"]'
    );
  });
});
