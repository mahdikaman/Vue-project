<template>
  <nav>
    <h1>{{ "One simpel project" }}</h1>
    <ul class="nav-ul">
      <li>
        <RouterLink class="routerlink" to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink class="routerlink" to="/about">About</RouterLink>
      </li>
    </ul>
  </nav>
  <main>
    <RouterView />
  </main>
  <footer>Copyright © Mahdi Kamankesh</footer>
</template>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  text-align: start;

  background-color: #000000;
}

nav {
  color: #fdf2e9;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 20vh;
  margin-inline: auto;
  width: 40vw;
  margin: auto;
  margin-bottom: 100px;
}

main {
  color: white;
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin: 0px auto;

  min-height: 73vh;
}

h2 {
  color: white;
  text-align: center;
}

ul {
  color: white;
  list-style-type: circle;
}

.routerlink {
  color: #ffffff;
}

.routerlink:hover {
  color: blue;
}

.nav-ul {
  color: #fdf2e9;
  justify-content: flex-end;
  padding: 10px;
  margin: 0px;
  align-items: center;
  display: grid;
  list-style-type: none;
  text-align: left;
}

footer {
  color: fdf2e9;
  display: flex;
  justify-content: center;
  margin: auto;
  border: none;
  width: 70vw;
}
</style>
