import { Hono } from "@hono/hono";
import { zValidator } from "zValidator";

import * as questionRepo from "../repositories/questionRepo.js";
import { questionValidator } from "../validators/questionValidators.js";

const app = new Hono();

app.get("/", async (c) => {
  const questions = await questionRepo.readAll(c.req.param("courseId"));

  return c.json(questions);
});

app.post("/", zValidator("json", questionValidator), async (c) => {
  const data = await c.req.json();
  const courseId = c.req.param("courseId");

  const newQuestion = await questionRepo.create({
    ...data,
    course_id: courseId,
  });

  return c.json(newQuestion);
});

app.post("/:qId/upvote", async (c) => {
  const updatedQuestion = await questionRepo.upvote(c.req.param("qId"));

  return c.json(updatedQuestion);
});

app.delete("/:qId", async (c) => {
  const deletedQuestion = await questionRepo.remove(c.req.param("qId"));

  return c.json(deletedQuestion);
});

export default app;
