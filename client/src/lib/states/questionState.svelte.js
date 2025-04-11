import { browser } from "$app/environment";
import {
  addQuestion,
  loadQuestions,
  removeQuestion,
  upvoteQuestion,
} from "$lib/apis/questions-api";

let questionsByCourse = $state({});
let loadStateByCourse = $state({});

const useQuestionState = (courseId) => {
  $effect(async () => {
    if (!loadStateByCourse[courseId]) {
      loadStateByCourse[courseId] = {};
    }

    let loadState = loadStateByCourse[courseId];

    if (loadState.loading || loadState.loaded) {
      return;
    }

    loadState.loading = true;
    loadState.loaded = false;

    const questions = await loadQuestions(courseId);

    questionsByCourse[courseId] = questions;

    loadState.loading = false;
    loadState.loaded = true;
  });

  return {
    get questions() {
      return questionsByCourse[courseId] || [];
    },

    /**
     * @param {object} question
     * @param {string} question.courseId
     * @param {string} question.title
     * @param {string} question.text
     */
    add: async (question) => {
      const newQuestion = await addQuestion(courseId, question);

      questionsByCourse[courseId].push(newQuestion);
    },

    remove: async (question) => {
      const removedQuestion = await removeQuestion(courseId, question.id);

      questionsByCourse[courseId] = questionsByCourse[courseId].filter(
        (q) => q.id !== removedQuestion.id
      );
    },

    upvote: async (question) => {
      const upvotedQuestion = await upvoteQuestion(courseId, question.id);

      questionsByCourse[courseId] = questionsByCourse[courseId].map((q) => {
        if (q.id !== upvotedQuestion.id) {
          return q;
        }

        return upvotedQuestion;
      });
    },
  };
};

export { useQuestionState };
