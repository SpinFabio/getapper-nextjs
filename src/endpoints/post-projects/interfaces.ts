import { ErrorResponse, RequestI } from "@/lib/response-handler";
import { IProjectFe } from "@/models/client/ProjectFe";

export namespace PostProjectsApi {
  export type QueryStringParameters = {};

  export type Payload = {
    name: string;
  };

  export type SuccessResponse = {
    message?: string;
    project: IProjectFe;
  };

  export type EndpointResponse = SuccessResponse | ErrorResponse;

  export interface Request extends RequestI<QueryStringParameters, Payload> {}
}
