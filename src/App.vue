<template>
  <div id="app" :class="colourScheme">
    <Competition msg="DCB Mini CTF" sub="Digital Images"/>
    <Points score="0"></Points>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Competition from './components/Competition'
import Points from './components/Points'

export default {
  name: 'App',
  components: {
    Competition,
    Points
  },
  computed: mapState(["colourScheme"])
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

h1, h2, h3 {
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
}

a {
  color: #2364AA;
}

[type="text"],
select {
  border-radius: 5px;
  border: 1px solid #ddd;
  padding: 10px;
  background: #fff;
  font-family: 'Courier New', Courier, monospace;
}

button {
  border-radius: 5px;
  border: 1px solid #ddd;
  padding: 10px;
}

button:hover {
  background: #ddd;
  cursor: pointer;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #291720;
  padding-top: 60px;
  padding-bottom: 120px;
  background: #efefef;
}

#app:before {
  content: "";
  height: 15px;
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(-90deg, #ec911a, #E9190F, #820263, #2364AA, #065143);
}
</style>
