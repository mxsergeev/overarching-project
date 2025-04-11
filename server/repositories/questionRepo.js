import postgres from "postgres";

const sql = postgres();

export async function readAll(courseId) {
  return await sql`
    SELECT * FROM questions
    WHERE course_id = ${courseId}
  `;
}

export async function create(question) {
  const result = await sql`
    INSERT INTO questions (course_id, title, text)
    VALUES (${question.course_id}, ${question.title}, ${question.text})
    RETURNING *
  `;

  return result[0];
}

export async function upvote(id) {
  const result = await sql`UPDATE questions
    SET upvotes = upvotes + 1
    WHERE id = ${id}
    RETURNING *`;

  return result[0];
}

export async function remove(id) {
  const result = await sql`
    DELETE FROM questions
    WHERE id = ${id}
    RETURNING *;
  `;

  return result[0];
}
