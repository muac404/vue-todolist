"use strict"

const { createApp } = Vue;

  createApp({
    data() {
      return {
        newToDo: "",
        toDoList: [
            "Fare la spesa",
            "Lavare i piatti",
            "Pulire il bagno"
        ],


        
      }
    },
    methods:{
        addToDo(){
            this.toDoList.push(this.newToDo)
        }
    }
  }).mount('#app')