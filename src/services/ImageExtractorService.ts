import { ImageExtractorRequestInterface, ImageExtractorServiceInterface } from '../interfaces/imageExtractorInterface';
import { logger, isValidVideoUrl, convertStreamToBase64String, checkIfFileCanBeReadFromUrl } from '../utils';
import child_process from 'child_process';

export default class ImageExtractorService implements ImageExtractorServiceInterface {
  public async extractImage(requestQuery: ImageExtractorRequestInterface): Promise<string> {
    try {
      const url = isValidVideoUrl(requestQuery.url);
      if (!url) {
        const errorMessage = `Invalid video URL: ${requestQuery.url}`;
        logger.error(errorMessage);
        throw new Error(errorMessage);
      }

      const fileChecker = await checkIfFileCanBeReadFromUrl(requestQuery.url);
      if (!fileChecker) {
        const errorMessage = `Invalid video URL: ${requestQuery.url}`;
        logger.error(errorMessage);
        throw new Error(errorMessage);
      }

      const ffmpegArguments = `-ss ${requestQuery.timeStamp} -i ${requestQuery.url} -vframes 1 -vcodec png -f image2 pipe:1`;
      const ffmpeg = child_process.spawn('ffmpeg', ffmpegArguments.split(' '), { shell: true });

      const response = await convertStreamToBase64String(ffmpeg.stdout);

      ffmpeg.on('error', (error: any) => {
        logger.error('ffmpeg error: ' + error);
        throw new Error(error);
      });

      return response;
    } catch (error: any) {
      logger.error(error);
      throw new Error(error.message);
    }
  }
}
