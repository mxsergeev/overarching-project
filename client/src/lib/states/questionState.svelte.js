import { browser } from "$app/environment";
import {
  addQuestion,
  loadQuestions,
  removeQuestion,
  upvoteQuestion,
} from "$lib/apis/questions-api";

const LOCATION_STATE_KEY = "questionState";

let initState = [];

if (browser) {
  initState = await loadQuestions();
}

let state = $state(initState);

const useQuestionState = () => {
  return {
    get questions() {
      return state;
    },

    /**
     * @param {object} question
     * @param {string} question.title
     * @param {string} question.text
     */
    add: async (question) => {
      const newQuestion = await addQuestion(question);

      state.push(newQuestion);
    },

    remove: async (question) => {
      const removedQuestion = await removeQuestion(question.id);

      state = state.filter((q) => q.id !== removedQuestion.id);
    },

    upvote: async (question) => {
      const upvotedQuestion = await upvoteQuestion(question.id);

      state = state.map((q) => {
        if (q.id !== upvotedQuestion.id) {
          return q;
        }

        return upvotedQuestion;
      });
    },
  };
};

export { useQuestionState };
