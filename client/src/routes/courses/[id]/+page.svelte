<script>
  import { loadCourse } from "$lib/apis/courses-api.js";
  import Questions from "$lib/components/Questions.svelte";

  const { data } = $props();

  let course = $state({});

  $effect(async () => {
    course = await loadCourse(data.courseId);
  });
</script>

<h1>{course.name} [{data.courseId}]</h1>

<Questions courseId={data.courseId} />
