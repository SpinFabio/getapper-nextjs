import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IProjectFe } from "@/models/client/ProjectFe";

export interface GetProjectsParams {
  // parametri che riceve il BE
}
export interface GetProjectsResponseData {
  // parametri che riceve il FE (in questo caso un array di progetti FE)
  projects: IProjectFe[];
}
export default apiActionBuilder<
  GetProjectsParams,
  ApiSuccessAction<GetProjectsResponseData, GetProjectsParams>,
  ApiFailAction<GetProjectsParams>
>(
  "apis/projects/get",
  (params: GetProjectsParams, options?: ApiRequestPayloadBuilderOptions) => ({
    payload: apiRequestPayloadBuilder<GetProjectsParams>(
      {
        path: "/projects",
        method: HttpMethod.GET,
      },
      options,
      params,
    ),
  }),
);
