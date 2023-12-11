import { ErrorResponse, RequestI } from "@/lib/response-handler";

export namespace GetProjectsApi {
  /*
    sono  parametri che arrivano dalla route (quelli con il '?')
   */
  export type QueryStringParameters = {};

  export type SuccessResponse = {
    message?: string;
  };

  export type EndpointResponse = SuccessResponse | ErrorResponse;
  /*
    è quello all' interno del fl handler
   */
  export interface Request extends RequestI<QueryStringParameters, null> {}
}
