# ffmpeg Image Extractor

This service helps to extract an image from a video file by utilizing the ffmpeg library.

## Running on docker

To run the application, execute the command below:

```bash
bin/service-start
```

## building docker image

To build the docker image of the application, execute the command below:

```bash
bin/build
```

## Test

Integration and unit test were both added to ensure the application is reliable and produce efficient result.
To run the test, execute the command below

```bash
npm run test
```

## Documentation and usage

The documentation was created using Swagger UI.
The API extracts an image at the given timestamp without downloading the video to disk or any directory within the container. The image is returned as a base64 encoded string and returned in the response body.

To access the documentation, visit the link below:

<a href="http://localhost:8070/docs">http://localhost:8070/docs</a>
