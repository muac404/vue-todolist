"use strict"

const { createApp } = Vue;

  createApp({
    data() {
      return {
        newToDo: "",
        doneThings: "",
        toDoList: [
            "Fare la spesa",
            "Lavare i piatti",
            "Pulire il bagno"
        ],


        
      }
    },
    methods:{
        addToDo(){
             
                this.toDoList.push(this.newToDo);
                this.newToDo = "";
            
            
        },
        removeToDo(i){
                this.toDoList.splice(i, 1)
        },
        done(){
                this.doneThings.splice(this.newToDo)
        }
    }
  }).mount('#app')