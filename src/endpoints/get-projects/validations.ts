import { YupShapeByInterface } from "@/lib/response-handler";
import * as yup from "yup";
import { GetProjectsApi } from "./interfaces";

const queryStringParametersValidations =
  (): YupShapeByInterface<GetProjectsApi.QueryStringParameters> => ({});

export default () => ({
  queryStringParameters: yup.object().shape(queryStringParametersValidations()),
});
/*
  usiamo yup per validare tutte le le cose che arrivano dall'utente
  (anche avendo tutti i controli messi dentro la GUI non possiamo comunque fidarci dato che l'utente può
  conttatare l'API senza usare la GUI usando il Postman o Kernell terminal Command)
 */
