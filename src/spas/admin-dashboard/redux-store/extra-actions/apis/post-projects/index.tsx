import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IProjectFe } from "@/models/client/ProjectFe";

export interface PostProjectsParams {
  name: string;
}
export interface PostProjectsResponseData {
  project: IProjectFe;
}
export default apiActionBuilder<
  PostProjectsParams,
  ApiSuccessAction<PostProjectsResponseData, PostProjectsParams>,
  ApiFailAction<PostProjectsParams>
>(
  "apis/projects/post",
  (params: PostProjectsParams, options?: ApiRequestPayloadBuilderOptions) => ({
    payload: apiRequestPayloadBuilder<PostProjectsParams>(
      {
        path: "/projects",
        method: HttpMethod.POST,
        body: {
          // abbiamo aggiunto questo campo perchè è quello che il nostros erver si aspetta
          name: params.name,
        },
      },
      options,
      params,
    ),
  }),
);
