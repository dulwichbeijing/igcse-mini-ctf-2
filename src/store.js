import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.localStorage,
  })],
  state: {
    colourScheme: "dhsz",
    currentScore: 0,
    tasks: [
      {
        name: "The first one is free",
        points: 100,
        detail: "Quickly test that the website is working for you, the answer is:",
        monospace: "dcbCTF{dulwich}",
        files: [],
        md5: "faa85bfd7c5d216076e78b611229b137", // done
        solved: false
      },
      {
        name: "",
        points: 200,
        detail: "",
        files: [""],
        md5: "", // done
        solved: false
      },
      {
        name: "Let's get logical",
        points: 200,
        detail: "Only one combination of inputs will have a positive output, format your flag by giving the letter then the binary value. E.g.:",
        monospace: "dcbCTF{a0b0c0d0e0} // if all inputs are 0",
        files: ["https://raw.githubusercontent.com/dulwichbeijing/igcse-mini-ctf-2/main/public/task-files/task3.jpg"],
        md5: "", // done
        solved: false
      },
      {
        name: "TODO",
        points: 200,
        detail: "",
        monospace: "",
        files: [""],
        md5: "", // done
        solved: false
      },
      {
        name: "TODO",
        points: 200,
        detail: "",
        files: [""],
        md5: "",
        solved: false
      },
      {
        name: "TODO",
        points: 200,
        detail: "",
        files: [""],
        md5: "",
        solved: false
      }
    ]
  },
  mutations: {
    pushPoints(state, task) {
      state.currentScore = state.currentScore + task.points
      state.tasks[task.number].solved = true
    },
    updateColour(state, newColour) {
      state.colourScheme = newColour
    }
  }
});