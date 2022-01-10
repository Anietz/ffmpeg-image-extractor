import ImageExtractorService from '../services/ImageExtractorService';
import {
  ImageExtractorRequestInterface,
  ImageExtractorResponseInterface,
  messageResponse,
} from '../interfaces/imageExtractorInterface';
import { Controller, Get, Query, Route } from 'tsoa';

@Route('ffmpeg')
export class ImageExtractorController extends Controller {
  @Get('image')
  public async extractImage(
    @Query() timestamp: number,
    @Query() url: string
  ): Promise<ImageExtractorResponseInterface> {
    try {
      const requestQuery: ImageExtractorRequestInterface = {
        timeStamp: timestamp,
        url,
      };
      const imageExtractorService = new ImageExtractorService();
      const result = await imageExtractorService.extractImage(requestQuery);
      this.setStatus(201);
      return {
        message: messageResponse.success,
        data: result,
      };
    } catch (error) {
      this.setStatus(500);
      return {
        message: messageResponse.error,
        data: error,
      };
    }
  }
}
