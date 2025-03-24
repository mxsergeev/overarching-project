import { browser } from "$app/environment";

const LOCATION_STATE_KEY = "questionState";

let initState = [];
if (browser && localStorage.hasOwnProperty(LOCATION_STATE_KEY)) {
  initState = JSON.parse(localStorage.getItem(LOCATION_STATE_KEY));
}

let state = $state(initState);

const saveToLocalStorage = () => {
  localStorage.setItem(LOCATION_STATE_KEY, JSON.stringify(state));
};

const useQuestionState = () => {
  return {
    get questions() {
      return state;
    },

    /**
     * @param {object} question
     * @param {string} question.title
     * @param {string} question.question
     */
    add: (question) => {
      const q = { ...question };

      q.id = crypto.randomUUID();
      q.upvotes = 0;

      state.push(q);

      saveToLocalStorage();
    },

    remove: (question) => {
      state = state.filter((q) => q.id !== question.id);

      saveToLocalStorage();
    },

    upvote: (question) => {
      state = state.map((q) => {
        if (q.id !== question.id) {
          return q;
        }

        return { ...q, upvotes: q.upvotes + 1 };
      });

      saveToLocalStorage();
    },
  };
};

export { useQuestionState };
