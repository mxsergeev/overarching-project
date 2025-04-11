<script>
  import Courses from "$lib/components/Courses/Courses.svelte";
  import { useCourseState } from "$lib/states/courseState.svelte";

  const courseState = useCourseState();
</script>

<h1>Courses</h1>

<Courses />
