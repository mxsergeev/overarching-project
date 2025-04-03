<script>
  import { useQuestionState } from "$lib/states/questionState.svelte";

  let questionState = useQuestionState();

  let { question } = $props();
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
