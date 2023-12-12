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
          // body è un parametro che cosntiene un oggetto con ciò che il server vuole
          // deve essere simile al payload dell'interfaccia post-project dell' endpoint
          name: params.name,
        },
      },
      options,
      params,
    ),
  }),
);
