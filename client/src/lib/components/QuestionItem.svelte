<script>
  import { useQuestionState } from "$lib/states/questionState.svelte";

  const { courseId, question } = $props();

  let questionState = useQuestionState(courseId);
</script>

<div>
  <h2>{question.title}</h2>
  <button onclick={async () => await questionState.remove(question)}
    >Delete</button
  >
  <button onclick={async () => await questionState.upvote(question)}
    >Upvote</button
  >
  <div>Upvotes: {question.upvotes}</div>
</div>
