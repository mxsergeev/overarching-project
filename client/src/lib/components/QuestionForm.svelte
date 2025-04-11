<script>
  import { useQuestionState } from "$lib/states/questionState.svelte";

  const { courseId } = $props();

  let questionState = useQuestionState(courseId);

  async function addQuestion(e) {
    e.preventDefault();

    const q = Object.fromEntries(new FormData(e.target));

    await questionState.add(q);

    e.target.reset();
  }
</script>

<form onsubmit={addQuestion}>
  <div>
    <label for="title">Title</label>
    <input id="title" name="title" type="text" />
  </div>

  <div>
    <label for="question">Question</label>
    <textarea id="question" name="text"></textarea>
  </div>

  <button type="submit">Submit</button>
</form>
