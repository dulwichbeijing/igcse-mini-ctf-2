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
        name: "What's your vector Victor?",
        points: 200,
        detail: "Take a look at the following SVG file, can you find the secret flag in here?",
        files: ["https://raw.githubusercontent.com/dulwichbeijing/igcse-mini-ctf/main/public/task-files/task-2.svg"],
        md5: "2e809b534c70e9b89566dcf355ca2a44", // done
        solved: false
      },
      {
        name: "Who is the creator?",
        points: 200,
        detail: "Did you know within all files there is data about data? That's so meta.",
        files: ["https://raw.githubusercontent.com/dulwichbeijing/igcse-mini-ctf/main/public/task-files/task3.jpg"],
        md5: "8bd98ae3d0f2398540c6c157d819a5b1", // done
        solved: false
      },
      {
        name: "Where in the world?",
        points: 200,
        detail: "Please tell me the name of this sculpture, give your answer in the format:",
        monospace: "dcbCTF{sculpture_name}",
        files: ["https://raw.githubusercontent.com/dulwichbeijing/igcse-mini-ctf/main/public/task-files/task4.jpg"],
        md5: "b9c9ed8a17e4ee05b9bf90f19a835729", // done
        solved: false
      },
      {
        name: "Open this file",
        points: 200,
        detail: "I think something went wrong when I copied this PNG file, a few 'bits' have gone missing - 64 of them to be precise.",
        files: ["https://raw.githubusercontent.com/dulwichbeijing/igcse-mini-ctf/main/public/task-files/task5"],
        md5: "f80d28a05444bbebfc1306dd945bd40a", // done
        solved: false
      },
      {
        name: "Scan this QR code",
        points: 200,
        detail: "It really is as simple as it sounds...",
        files: ["https://raw.githubusercontent.com/dulwichbeijing/igcse-mini-ctf/main/public/task-files/task6.png"],
        md5: "659d1a73e65e9b77a069b4b7515119a8", // done
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