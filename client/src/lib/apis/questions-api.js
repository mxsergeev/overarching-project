import { PUBLIC_API_URL } from "$env/static/public";

const BASE_URL = `${PUBLIC_API_URL}/api/courses`;

export async function loadQuestions(courseId) {
  const response = await fetch(`${BASE_URL}/${courseId}/questions`);
  return await response.json();
}

export async function addQuestion(courseId, question) {
  const response = await fetch(`${BASE_URL}/${courseId}/questions`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(question),
  });

  return await response.json();
}

export async function upvoteQuestion(courseId, id) {
  const response = await fetch(
    `${BASE_URL}/${courseId}/questions/${id}/upvote`,
    {
      method: "POST",
    }
  );

  return await response.json();
}

export async function removeQuestion(courseId, id) {
  const response = await fetch(`${BASE_URL}/${courseId}/questions/${id}`, {
    method: "DELETE",
  });

  return await response.json();
}
