import { browser } from "$app/environment";
import { addCourse, loadCourses } from "$lib/apis/courses-api";

let initState = [];

if (browser) {
  try {
    initState = await loadCourses();
  } catch (err) {
    console.error(err);
  }
}

let state = $state(initState);

const useCourseState = () => {
  return {
    get courses() {
      return state;
    },

    /**
     * @param {object} course
     * @param {string} course.name
     */
    add: async (course) => {
      const newCourse = await addCourse(course);

      state.push(newCourse);
    },
  };
};

export { useCourseState };
