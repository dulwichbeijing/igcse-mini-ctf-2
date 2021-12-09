<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ sub }}</h2>
    
    <h3>About the competition</h3>
    <p>
      Capture the flag is a style of computer science competition where a hidden message known as a "flag"
      is hidden within different pieces of digital data.
    </p>
    <p>
      You have this lesson to complete as many of the challenges below as possible. 
      There are links at the bottom of the webpage which will help you with certain challenges.
    </p>
    <p>
      Once you have found your flag, you should submit your answer using the following format: 
      <pre>dcbCTF{secret_flag}</pre>
    </p>
    
    <h3>Tasks</h3>
    <Task 
      v-for="(task, index) in tasks" 
      :key="index"
      :taskNo="index"
      :name="task.name"
      :points="task.points"
      :detail="task.detail"
      :monospace="task.monospace"
      :files="task.files"
      :md5="task.md5"
      :solved="task.solved"
    >
    </Task>
    
    <h3>Extra details</h3>
    <ul>
      <li><a href="https://github.com/dulwichbeijing/igcse-mini-ctf-2" target="_blank">Competition source code</a></li>
      <li><a href="https://www.asciitable.com/" target="_blank">ASCII Table</a></li>
      <li><a href="https://morsecode.ninja/reference/index.html" target="_blank">Morse Code Reference</a></li>
      <li><a href="https://logic.ly/demo/" target="_blank">Logic Circuit Builder</a></li>
      <li><a href="https://cryptii.com/" target="_blank">Text encoder and decoder</a></li>
      <li><a href="https://www.youtube.com/watch?v=wSYAZnQmffg" target="_blank">ΔMi−1 = −∂Σn=1NDi[n][Σj∈C{i}Fji[n − 1] + Fexti[[n−1]]</a></li>
      <li><a href="https://www.kite.com/python/answers/how-to-edit-a-file-in-python" target="_blank">Python working with text files</a></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Task from "./Task";

export default {
  name: 'Competition',
  components: {
    Task
  },
  props: {
    msg: String,
    sub: String
  },
  computed: mapState(['currentScore','tasks'])
}
</script>

<style scoped>
.hello {
  margin: 0 auto;
  max-width: 800px;
  padding: 0 20px;
}

h1 {
  margin-bottom: 0;
}

h2 {
  margin-top: -5px;
}

h3 {
  margin: 60px 0 0;
}

pre {
  background: #fefefe;
  padding: 15px;
  line-height: 1;
  border-radius: 5px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 0 0 20px;
}

</style>
