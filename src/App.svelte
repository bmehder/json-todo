<script>
  import Users from "./Users.svelte";
</script>

<style>
  h1,
  h2 {
    text-align: center;
    color: white;
  }
  h1 {
    margin: 1em 0 0;
  }
  h2 {
    margin: 0 0 1em;
  }
</style>

<h1>Reactive ToDo List</h1>
<h2>(w/ JS Object Store)</h2>
<Users />
