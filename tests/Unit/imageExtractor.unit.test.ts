'use strict';

import { expect, assert } from 'chai';
import { describe, it } from 'mocha';
import { checkIfFileCanBeReadFromUrl, isValidVideoUrl } from '../../src/utils';

describe('Check for valid video link', () => {
  // The assertion for a promise must be returned.
  it(`Should return false`, () => {
    const link = 'https://www.google.com';
    const result = isValidVideoUrl(link);
    expect(result).to.be.a('boolean');
    assert.equal(result, false);
  });


   it(`Should return true`, () => {
    const link = 'https://public-anios-dev.s3.ap-southeast-1.amazonaws.com/jungle_3s.mp4';
    const result = isValidVideoUrl(link);
    expect(result).to.be.a('boolean');
    assert.equal(result, true);
  });

});



describe('Check if a remote file can be read or not', () => {
  // The assertion for a promise must be returned.
  it(`Should not be able to read the file`, async () => {
      const filePath = 'https://public-anios-dev.s3.ap-southeast-1.amazonaws.com/jungbdbdbbdle_3s.mp4';
      const result = await checkIfFileCanBeReadFromUrl(filePath);
      expect(result).to.be.a('boolean');
      assert.equal(result, false);
  });

  it(`Should be able to read the file`, async () => {
      const filePath = 'https://public-anios-dev.s3.ap-southeast-1.amazonaws.com/jungle_3s.mp4';
      const result = await checkIfFileCanBeReadFromUrl(filePath);
      expect(result).to.be.a('boolean');
      assert.equal(result, true);
  });

});