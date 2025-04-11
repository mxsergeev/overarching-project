import { PUBLIC_API_URL } from "$env/static/public";

const BASE_URL = `${PUBLIC_API_URL}/api/courses`;

export async function loadCourses() {
  const response = await fetch(BASE_URL);
  return await response.json();
}

export async function loadCourse(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  return await response.json();
}

export async function addCourse(question) {
  const response = await fetch(BASE_URL, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(question),
  });

  return await response.json();
}
