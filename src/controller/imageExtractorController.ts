import { Request, Response } from 'express';
import { validationResult, query } from 'express-validator';
import { DEFAULTS, catchError, succesRes } from '../utils';
import ImageExtractorService from '../services/ImageExtractorService';
import { ImageExtractorRequestInterface } from '../interfaces/imageExtractorInterface';

/**
 * Extract an image
 * @param req
 * @param res
 * @returns
 */
export const extractImage = async (req: Request, res: Response) => {
  try {
    await query('timestamp').isNumeric().notEmpty().run(req);
    await query('url').isString().notEmpty().run(req);

    const validation_result = validationResult(req);
    if (!validation_result.isEmpty()) {
      catchError(validation_result.array(), res);
      return;
    }

    const imageExtractorService = new ImageExtractorService();
    const requestQuery: ImageExtractorRequestInterface = {
      timeStamp: parseInt(req.query.timestamp as string),
      url: req.query.url as string,
    };
    const result = await imageExtractorService.extractImage(requestQuery);
    succesRes(DEFAULTS.SUCCESS, res, result as any);
    //res.send('<img src="data:image/png;base64,' + result + '" />');
  } catch (error: any) {
    //console.log(error);
    catchError(error.message, res);
    return;
  }
};
