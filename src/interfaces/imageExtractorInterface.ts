export interface ImageExtractorRequestInterface{
    timeStamp: number;
    url: string;
}


export interface ImageExtractorServiceInterface{
    // eslint-disable-next-line no-unused-vars
  extractImage(requestQuery: ImageExtractorRequestInterface): Promise<string>;
}