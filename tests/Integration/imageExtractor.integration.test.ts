'use strict';

import chai, { expect, assert } from 'chai';
import { describe, it } from 'mocha';
import appServer from '../../src/index';
import  chaiHttp from 'chai-http'

chai.use(chaiHttp);

describe('Extract an image from video for url', () => {
  // The assertion for a promise must be returned.
  ///
  it(`Should return a response with base64 string`, (done) => {

    const url = '/ffmpeg/image?timestamp=1&url=https://public-anios-dev.s3.ap-southeast-1.amazonaws.com/jungle_3s.mp4';
      chai.request(appServer)
      .get(url)
      .then((response:any) => {
        const result = response.body;
        assert.equal(result.message,"success");
        expect(result.data).to.be.a('string');
        done();
      }).catch(done);
  });
});
