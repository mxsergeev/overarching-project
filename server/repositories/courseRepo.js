import postgres from "postgres";

const sql = postgres();

export async function readAll() {
  const result = await sql`
    SELECT * FROM courses
  `;

  if (result.length > 0) {
    return result;
  }

  // Fallback

  const defaultCourses = [];

  for (const course of [
    { name: "Web Software Development" },
    { name: "Device-Agnostic Design" },
  ]) {
    const res = await create(course);

    defaultCourses.push(res);
  }

  return defaultCourses;
}

export async function readOne(id) {
  const result = await sql`
    SELECT * FROM courses
    WHERE id = ${id}
  `;

  return result[0];
}

export async function create(course) {
  const result = await sql`
    INSERT INTO courses (name)
    VALUES (${course.name})
    RETURNING *
  `;

  return result[0];
}

export async function remove(id) {
  const result = await sql`
    DELETE FROM courses
    WHERE id = ${id}
  `;

  return result[0];
}
