export const errorFormatter = (v: any) => {
  // Build your resulting errors however you want! String, object, whatever - it works!
  const { msg, param } = v;
  return `${param} ${msg}`;
};
import axios from 'axios';

export const validateURL = (str: string): boolean => {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator

  return !!pattern.test(str);
};

//Check if a url is a valid video url
export const isValidVideoUrl = (url: string): boolean => {
  if ((url.indexOf('.mp4') > -1 || url.indexOf('.webm') > -1) && validateURL(url)) {
    return true;
  }
  return false;
};

//check if a file exist from a url
export const checkIfFileCanBeReadFromUrl = async (url: string): Promise<boolean> => {
  try {
    const response = await axios.head(url);
    return response.status === 200;
  } catch (error) {
    return false;
  }
};

export const convertStreamToBase64String = (stream: any): Promise<string> => {
  const chunks: Array<any> = [];
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk: any) => chunks.push(Buffer.from(chunk)));
    stream.on('error', (err: any) => reject(err));
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('base64')));
  });
};
