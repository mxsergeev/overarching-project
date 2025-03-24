<script>
  import { useQuestionState } from "$lib/states/questionState.svelte";
  import QuestionItem from "./QuestionItem.svelte";

  const questionState = useQuestionState();
</script>

<ul>
  {#each questionState.questions as question}
    <li>
      <QuestionItem {question} />
    </li>
  {/each}
</ul>
