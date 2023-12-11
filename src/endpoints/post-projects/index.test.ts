import { PostProjectsApi } from "@/endpoints/post-projects/interfaces";
import { StatusCodes, TestHandler } from "@/lib/response-handler";

const postProjectsPath = "post-projects";

beforeAll(async () => {
  // await cleanDb();
});

describe("postProjects API", () => {
  test("It should ...", async () => {
    // const { statusCode, payload } = await TestHandler.invokeLambda<PostProjectsApi.SuccessResponse>(postProjectsPath);
    // expect(statusCode).toBe(StatusCodes.OK);
  });
});

afterAll(async () => {
  // await closeDbConnection();
});
