<script>
  import { useCourseState } from "$lib/states/courseState.svelte";

  let courseState = useCourseState();

  async function addCourse(e) {
    e.preventDefault();

    const c = Object.fromEntries(new FormData(e.target));

    await courseState.add(c);

    e.target.reset();
  }
</script>

<form onsubmit={addCourse}>
  <div>
    <label for="name">Course name</label>
    <input id="name" name="name" type="text" />
  </div>

  <button type="submit">Submit</button>
</form>
