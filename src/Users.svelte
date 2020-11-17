<script>
  import User from "./User.svelte";
  import { users } from "./data-users.js";

  const addUser = () => {
    const id = Math.floor(Math.random() * 1000);
    let name = "";
    $users["ID" + id] = { id, name };
  };
</script>

<style>
  #users {
    display: grid;
    grid-gap: 10px;
    margin: 10px 0;
    padding: 1em 2em;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.24);
  }
  button {
    height: 45px;
    margin-bottom: 1em;
    font-weight: bold;
    outline: none;
    background: white;
    border: 4px solid darkorange;
    transition: 100ms;
  }
  button:hover {
    background: darkorange;
  }
  aside {
    background: white;
    margin-top: 1em;
    padding: 1em 2em;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.24);
  }
  h3 {
    text-align: center;
    margin-bottom: 1em;
  }
</style>

<div id="users">
  <h3>Form (Frontend)</h3>
  {#each Object.keys($users) as key}
    <User {key} bind:user={$users[key]} />
  {/each}

  <button on:click={addUser}>Add User</button>
</div>

<aside>
  <h3>DataStore (Backend)</h3>
  <pre>{JSON.stringify($users, null, 2)}</pre>
</aside>
