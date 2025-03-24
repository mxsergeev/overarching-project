<script>
  import { useQuestionState } from "$lib/states/questionState.svelte";

  let questionState = useQuestionState();

  function addQuestion(e) {
    e.preventDefault();

    const q = Object.fromEntries(new FormData(e.target));

    questionState.add(q);

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
    <textarea id="question" name="question"></textarea>
  </div>

  <button type="submit">Submit</button>
</form>
