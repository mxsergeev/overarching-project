import { PUBLIC_API_URL } from "$env/static/public";

const BASE_URL = `${PUBLIC_API_URL}/courses/1/questions`;

export async function loadQuestions() {
  const response = await fetch(BASE_URL);
  return await response.json();
}

export async function addQuestion(question) {
  const response = await fetch(BASE_URL, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(question),
  });

  return await response.json();
}

export async function upvoteQuestion(id) {
  const response = await fetch(`${BASE_URL}/${id}/upvote`, {
    method: "POST",
  });

  return await response.json();
}

export async function removeQuestion(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  return await response.json();
}
