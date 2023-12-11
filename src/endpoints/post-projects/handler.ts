import {
  ErrorResponse,
  ResponseHandler,
  StatusCodes,
} from "@/lib/response-handler";
import { NextApiResponse } from "next";
import { PostProjectsApi } from "./interfaces";
import { Project } from "@/models/server/Project";

export default async function handler(
  req: PostProjectsApi.Request,
  res: NextApiResponse<PostProjectsApi.EndpointResponse>,
) {
  try {
    const { validationResult, payload } = req;

    if (!validationResult.isValid) {
      return ResponseHandler.json<ErrorResponse>(
        res,
        { message: validationResult.message! },
        StatusCodes.BadRequest,
      );
    }

    const { name } = payload;
    const project = await Project.create(name);

    return ResponseHandler.json<PostProjectsApi.SuccessResponse>(res, {
      project: project.toClientVersion(),
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
