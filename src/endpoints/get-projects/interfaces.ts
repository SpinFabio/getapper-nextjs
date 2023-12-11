import { ErrorResponse, RequestI } from "@/lib/response-handler";
import { IProjectFe } from "@/models/client/ProjectFe";

export namespace GetProjectsApi {
  /*
    sono  parametri che arrivano dalla route (quelli con il '?')
   */
  export type QueryStringParameters = {};

  export type SuccessResponse = {
    message?: string;
    projects: IProjectFe[];
  };

  export type EndpointResponse = SuccessResponse | ErrorResponse;
  /*
    è quello all' interno del fl handler
   */
  export interface Request extends RequestI<QueryStringParameters, null> {}
}
