import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import { logger } from "@hono/hono/logger";

const app = new Hono();

/**
 * @typedef {object} Question
 * @property {number} id
 * @property {string} title
 * @property {string} text
 * @property {number} upvotes
 */

/**
 * @type {Question[]}
 */
let questions = [];

app.use("/*", cors());
app.use("/*", logger());

app.get("/", (c) => c.json({ message: "Hello world!" }));

app.get("/courses", (c) => {
  const courses = {
    courses: [
      { id: 1, name: "Web Software Development" },
      {
        id: 2,
        name: "Device-Agnostic Design",
      },
    ],
  };

  return c.json(courses);
});

app.get("/courses/:id", (c) => {
  const courses = {
    course: { id: Number(c.req.param("id")), name: "Course Name" },
  };

  return c.json(courses);
});

app.post("/courses", async (c) => {
  const data = await c.req.json();

  const course = {
    id: 3,
    name: data.name,
  };

  return c.json({ course });
});

app.get("/courses/:id/questions", (c) => {
  return c.json(questions);
});

app.post("/courses/:id/questions", async (c) => {
  const data = await c.req.json();

  const maxId = Math.max(...questions.map((q) => q.id));

  let id = maxId + 1;

  if (!isFinite(id)) {
    id = 1;
  }

  const newQuestion = {
    id,
    title: data.title,
    text: data.text,
    upvotes: 0,
  };

  questions.push(newQuestion);

  return c.json(newQuestion);
});

app.post("/courses/:id/questions/:qId/upvote", (c) => {
  const question = questions.find((q) => q.id === Number(c.req.param("qId")));

  question.upvotes++;

  return c.json(question);
});

app.delete("/courses/:id/questions/:qId", (c) => {
  const question = questions.find((q) => q.id === Number(c.req.param("qId")));

  questions = questions.filter((q) => q.id !== question.id);

  return c.json(question);
});

export default app;
