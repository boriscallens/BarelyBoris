<script lang="ts">
  import { page } from "$app/stores";

  const user = $page.data.user;
</script>

<span>Woopie, editing a list of names! as <strong>{user.name}</strong></span>