export interface ImageExtractorRequestInterface {
  timeStamp: number;
  url: string;
}

export enum messageResponse{
  success = "success",
  error = "error",
}
export interface ImageExtractorResponseInterface {
  message: messageResponse;
  data: any;
}

export interface ImageExtractorServiceInterface {
  // eslint-disable-next-line no-unused-vars
  extractImage(requestQuery: ImageExtractorRequestInterface): Promise<string>;
}
