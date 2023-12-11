import { YupShapeByInterface } from "@/lib/response-handler";
import * as yup from "yup";
import { PostProjectsApi } from "./interfaces";

const queryStringParametersValidations =
  (): YupShapeByInterface<PostProjectsApi.QueryStringParameters> => ({});

const payloadValidations =
  (): YupShapeByInterface<PostProjectsApi.Payload> => ({
    name: yup.string().min(3).max(200).required(),
  });

export default () => ({
  queryStringParameters: yup.object().shape(queryStringParametersValidations()),
  payload: yup.object().shape(payloadValidations()),
});
