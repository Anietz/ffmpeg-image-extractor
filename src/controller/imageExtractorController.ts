import ImageExtractorService from '../services/ImageExtractorService';
import { ImageExtractorRequestInterface,ImageExtractorResponseInterface, messageResponse } from '../interfaces/imageExtractorInterface';
import {
  Controller,
  Get,
  Query,
  Route,
} from "tsoa";

@Route("ffmpeg")
export class ImageExtractorController extends Controller {
  @Get("image")
  public async extractImage(
     @Query() timestamp: number,
     @Query() url: string
  ): Promise<ImageExtractorResponseInterface> {

  try {
    const requestQuery: ImageExtractorRequestInterface = {
      timeStamp:parseInt(timestamp),
      url,
    }
      const imageExtractorService = new ImageExtractorService();
      const result = await imageExtractorService.extractImage(requestQuery);
      this.setStatus(201);
      return {
        message: messageResponse.success,
        data: result,
      }
    } catch (error) {
      this.setStatus(500);
      return {
        message: messageResponse.error,
        data: error,
      }
    }

  }
}

/**
 * Extract an image
 * @param req
 * @param res
 * @returns
 */
// export const extractImage = async (req: Request, res: Response) => {
//   try {
//     await query('timestamp').isNumeric().notEmpty().run(req);
//     await query('url').isString().notEmpty().run(req);

//     const validation_result = validationResult(req);
//     if (!validation_result.isEmpty()) {
//       catchError(validation_result.array(), res);
//       return;
//     }

//     const imageExtractorService = new ImageExtractorService();
//     const requestQuery: ImageExtractorRequestInterface = {
//       timeStamp: parseInt(req.query.timestamp as string),
//       url: req.query.url as string,
//     };
//     const result = await imageExtractorService.extractImage(requestQuery);
//     succesRes(DEFAULTS.SUCCESS, res, result as any);
//     //res.send('<img src="data:image/png;base64,' + result + '" />');
//   } catch (error: any) {
//     //console.log(error);
//     catchError(error.message, res);
//     return;
//   }
// };
