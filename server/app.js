import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import { logger } from "@hono/hono/logger";
import { trimTrailingSlash } from "@hono/hono/trailing-slash";

import courseController from "./controllers/courseController.js";
import questionController from "./controllers/questionController.js";

const app = new Hono();

app.use("/*", cors());
app.use("/*", logger());
app.use(trimTrailingSlash());

app.route("/api/courses", courseController);
app.route("/api/courses/:courseId/questions", questionController);

export default app;
