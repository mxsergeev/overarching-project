import { Hono } from "@hono/hono";
import { zValidator } from "zValidator";

import * as courseRepo from "../repositories/courseRepo.js";
import { courseValidator } from "../validators/courseValidators.js";

const app = new Hono();

app.get("/", async (c) => {
  const courses = await courseRepo.readAll();

  return c.json(courses);
});

app.get("/:id", async (c) => {
  const course = await courseRepo.readOne(c.req.param("id"));

  return c.json(course);
});

app.post("/", zValidator("json", courseValidator), async (c) => {
  const data = await c.req.json();

  const course = await courseRepo.create(data);

  return c.json(course);
});

app.delete("/:id", async (c) => {
  const course = await courseRepo.remove(c.req.param("id"));

  return c.json(course);
});

export default app;
