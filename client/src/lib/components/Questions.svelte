<script>
  import QuestionForm from "./QuestionForm.svelte";
  import QuestionList from "./QuestionList.svelte";

  const { courseId } = $props();
</script>

<QuestionForm {courseId} />

<QuestionList {courseId} />
