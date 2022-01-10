import express, { Application,Response as ExResponse, Request as ExRequest,NextFunction } from "express";
import bodyParser from "body-parser";
import { RegisterRoutes } from "../build/routes";
import cors from 'cors';
import helmet from 'helmet';
import config from './utils/src/config';
import swaggerUi from "swagger-ui-express";
import { ValidateError } from "tsoa";

// Boot express
const app:Application = express();

const port = config.PORT;

app.use(cors());
app.use(helmet());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);



app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(
    swaggerUi.generateHTML(await import("../build/swagger.json"))
  );
});


app.use(bodyParser.json());

RegisterRoutes(app);

app.use(function notFoundHandler(_req, res: ExResponse) {
  res.status(404).send({
    message: "Not Found",
  });
});

app.use(function errorHandler(
  err: unknown,
  req: ExRequest,
  res: ExResponse,
  next: NextFunction
): ExResponse | void {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    return res.status(422).json({
      message: "Validation Failed",
      data: err?.fields,
    });
  }
  if (err instanceof Error) {
    return res.status(500).json({
      message: "Internal Server Error",
      data:null
    });
  }

  next();
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}`));

export default app;
