import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import imageConverterRoute from './routes/imageExtractorRoute';
import config from './utils/src/config';

// Boot express
const app: Application = express();
const port = config.PORT;

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/ffmpeg', imageConverterRoute);

// Application routing
app.use('/', (req: Request, res: Response) => {
  res.status(200).send({ data: 'API is up and running' });
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}`));

export default app; // exporting for integration testing
