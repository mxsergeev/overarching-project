<script>
  import { useQuestionState } from "$lib/states/questionState.svelte";
  import QuestionItem from "./QuestionItem.svelte";

  const { courseId } = $props();

  const questionState = useQuestionState(courseId);

  console.log("questionState.questions", questionState.questions);
</script>

<ul>
  {#each questionState.questions as question}
    <li>
      <QuestionItem {courseId} {question} />
    </li>
  {/each}
</ul>
