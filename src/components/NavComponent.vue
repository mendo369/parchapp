<script setup></script>

<template>
  <div class="nav-items">
    <div class="left common">
      <div class="logo">
        <h1>Parchapp</h1>
      </div>
    </div>

    <div class="search">
      <input type="text" name="search" id="search" placeholder="Buscar parche" />
      <img src="@/assets/icons/search.svg" alt="seacrh" />
    </div>

    <div class="right common">
      <div class="filter">
        <img src="@/assets/icons/filter.svg" alt="filter" />
      </div>
      <div class="create">
        <img src="@/assets/icons/create.svg" alt="create" />
      </div>
      <div class="user">
        <img src="@/assets/icons/signUp.svg" alt="user" />
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.nav-items {
  width: 70%;
  margin: 0 auto;
  list-style: none;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-around;
  grid-template-columns: 20% 1fr max-content;
  gap: 20px;
  align-items: center;
}

.common {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
}

.logo {
  width: max-content;
  height: 40px;
  padding: 5px;
}

.center {
  margin: 0 auto;
  max-width: 40%;
  border: 1px solid black;
  border-radius: 20px;
}

.search {
  margin: 0 auto;
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 20px;
}

.search img {
  margin-right: 10px;
}

#search {
  border: transparent;
  font-weight: bold;
  font-size: 1.5rem;
}

#search:focus {
  outline: none;
}

.right div {
  margin: 0 10px;
}

.user img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid black;
  box-shadow: 3px 2px 5px black;
}
</style>
