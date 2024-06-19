<template>
 <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/celebrity">celebrity</router-link>|
    <router-link to="/LongMen">travel</router-link>|
	<router-link to="/test">test</router-link>|
    <router-link to="/test2">test2</router-link>
	
  </nav> <!--  -->
  <router-view/>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
