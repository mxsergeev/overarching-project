<script>
  import { useCourseState } from "$lib/states/courseState.svelte";

  const courseState = useCourseState();
</script>

<ul>
  {#each courseState.courses as course}
    <li>
      <a href="/courses/{course.id}">{course.name}</a>
    </li>
  {/each}
</ul>
