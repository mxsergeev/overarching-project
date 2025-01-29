import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import { logger } from "@hono/hono/logger";

const app = new Hono();

app.use("/*", cors());
app.use("/*", logger());

app.get("/", (c) => c.json({ message: "Hello world!" }));

app.get("/courses", (c) => {
  const courses = {
    "courses": [{ "id": 1, "name": "Web Software Development" }, {
      "id": 2,
      "name": "Device-Agnostic Design",
    }],
  };

  return c.json(courses);
});

app.get("/courses/:id", (c) => {
  const courses = {
    "course": { "id": Number(c.req.param("id")), "name": "Course Name" },
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

app.get("/courses/:id/topics", (c) => {
  const topics = {
    "topics": [{ "id": 1, "name": "Topic 1" }, { "id": 2, "name": "Topic 2" }],
  };

  return c.json(topics);
});

app.get("/courses/:cId/topics/:tId/posts", (c) => {
  const posts = {
    "posts": [{ "id": 1, "title": "Post 1" }, { "id": 2, "title": "Post 2" }],
  };

  return c.json(posts);
});

app.get("/courses/:cId/topics/:tId/posts/:pId", (c) => {
  const post = {
    "post": { "id": Number(c.req.param("pId")), "title": "Post Title" },
    "answers": [{ "id": 1, "content": "Answer 1" }, {
      "id": 2,
      "content": "Answer 2",
    }],
  };

  return c.json(post);
});

export default app;
