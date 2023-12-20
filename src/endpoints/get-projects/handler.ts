import {
  ErrorResponse,
  ResponseHandler,
  StatusCodes,
} from "@/lib/response-handler";
import { NextApiResponse } from "next";
import { GetProjectsApi } from "./interfaces";
import { Project } from "@/models/server/Project";

export default async function handler(
  req: GetProjectsApi.Request,
  res: NextApiResponse<GetProjectsApi.EndpointResponse>,
) {
  try {
    const { validationResult } = req;

    if (!validationResult.isValid) {
      return ResponseHandler.json<ErrorResponse>(
        res,
        { message: validationResult.message! },
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
