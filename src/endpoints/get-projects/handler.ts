import {
  ErrorResponse,
  ResponseHandler,
  StatusCodes,
} from "@/lib/response-handler";
import { NextApiResponse } from "next";
import { GetProjectsApi } from "./interfaces";
import { Project } from "@/models/server/Project";
/*
  qui c'è il controller e la buisness logic
 */

export default async function handler(
  req: GetProjectsApi.Request,
  //la request contiene tutti i parametri che arrivano dal browser
  res: NextApiResponse<GetProjectsApi.EndpointResponse>,
  // quella che dobbiamo popolare noi con i parametri da restituire al client
) {
  try {
    const { validationResult } = req;

    if (!validationResult.isValid) {
      return ResponseHandler.json<ErrorResponse>(
        res,
        { message: validationResult.message! }, //payload della Request
        StatusCodes.BadRequest,
      );
    }

    const projects = await Project.getList({}, { limit: 1000 });

    return ResponseHandler.json<GetProjectsApi.SuccessResponse>(res, {
      projects: projects.map((p) => p.toClientVersion()),
    });
  } catch (e) {
    console.error(e);
    return ResponseHandler.json<ErrorResponse>(
      res,
      { message: "Internal error" },
      StatusCodes.InternalServerError,
    );
  }
}
