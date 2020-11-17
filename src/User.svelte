<script>
  import { users } from "./data-users.js";
  export let key;
  export let user;
  export let undo = false;
  export let counter = 5;
  export let disabled = false;

  const deleteUser = () => {
    undo = true;
    disabled = true;
    let timer = setInterval(() => {
      counter--;
    }, 1000);
    setTimeout(() => {
      if (undo) {
        clearInterval(timer);
        delete $users[key];
        $users = $users;
        undo = false;
        disabled = false;
      }
    }, 5000);
  };

  const undoDeleteUser = () => {
    undo = false;
  };
</script>

<style>
  #user {
    display: grid;
    grid-template-columns: 2fr 10fr 5fr;
    grid-gap: 10px;
  }
  input {
    width: 100%;
    border: 1px solid gray;
    outline: none;
    padding-left: 5px;
  }
  button {
    outline: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
    min-height: 30px;
  }
  button:hover {
    background: darkorange;
  }
</style>

<div id="user">
  <div>{key}</div>
  <input type="text" bind:value={user.name} autofocus />
  {#if !undo}
    <button on:click={deleteUser}>🗑️</button>
  {:else}
    <button on:click={undoDeleteUser}>undo ({counter})</button>
  {/if}
</div>
