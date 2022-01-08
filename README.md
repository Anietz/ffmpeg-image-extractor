# ffmpeg Image Extractor

This service helps to extract an image from a video file by using ffmpeg library.

## Running on docker

To run the application, execute the command below:

```bash
bin/service-start
```

## build docker image

```bash
bin/build
```

## Test

Integration and unit test were both added to ensure the application is reliable and produce efficient result.
To run the test. execute the command below

```bash
npm run test
```

## Usage

The API extracts an image at the given timestamp without downloading the video to disk or any directory within the container. The image is returned as a base64 encoded string and returned in the response body.

Request type: `GET`
Request enpoint: `/ffmpeg/image`
Request query params: `url` and `timestamp`

Sample request:
`http://localhost:8070/ffmpeg/image?timestamp=1&url=https://public-anios-dev.s3.ap-southeast-1.amazonaws.com/jungle_3s.mp4`

Response:

```javascript
{
  "code": 200,
  "status": "success",
  "message": "success",
  "data": "iVBORw0KGgoAAAANSUhEUgAABQAAAALQCAIAAABAH0oBAAAACXBIWXMAAAABAAAAAQBPJcTWAAAQAElEQVR4nOzdZ3fbRtuo7efrfu7Etqwuir333nsvonq1bKu4dye24yT33u9/f6+ZCxgOUUhQImXJxlrnwhqCkNwSWYdnMPif2IppohLL64olV4xqpdfM2susmrNrFo3lDFa+/LoNYi/hAvhsqWUjlFg0xOZXow9XoND9xcDv8xD8tL2/zbl/J3nuPYSjU8z+n/twdN17CLnvz7vnFliuB/MseOl5uOh5uExb884b8Oh7SJszQoF5MxZcsEgi5xdtUHDBFlq0Y+ElR2TZGTO4sMiqA4JBwuAmGT2smMkTN3tT5kDaEoSytnDOHoHyjigtDBWcEVbJGS27YjVvsu5LtQLJdjDVDcSxjj8m5A13fRGo549CG4EYazOU2AhGoE1/DNrykXaCg/YCsf1gfD8YpYWhg3CIFIochqPDxY+jSdZRJHEQFTqMJR+lsqfp3ONMnpaVlk1LOstmWBd5LHdZyOOR77yYvygVoMtyUdKzSulFmfSyUn5dq0Jv6jWhWuN1tY4n8V04suDl20Yde9dsQO+b7Q+tzod261O3w/e511Xsj40e9Gd/A/qy2dfY161N7Nv2lrzvuzuK/bO78+/e7uz67/7ene7/7pH+u7v7A/t3Z2fQ5pbG/ulvXqG/N/pq57HvvY0r91e396XR+rPe1NgftcaXKunPSl1jf5RrM+1zqQp9LJRZ8BLOf63UoW/Vxojwmkl/kvgj8j8oO6N4EsYf8qUPucr7bPltrvwuX4Ej60229DpTfJUtvswUnmex0mW6cJHBSufpInaWLEFPkpXTeOlRrMg6jpOOEsWDWF6prKT9aAbbi6T59sNYVnt7ocxBkLQfS"
}
```
