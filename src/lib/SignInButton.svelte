<script lang="ts">
  export let provider: any;
</script>

test
<form action={provider.Url} method="POST">
  {#if provider.callbackUrl}
    <input type="hidden" name="callbackUrl" value={provider.callbackUrl} />
  {/if}
  <button type="submit" class="button">
    <slot>Sign in with {provider.name} to {provider.callbackUrl}</slot>
  </button>
</form>
