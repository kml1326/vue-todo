<template>
  <div class="todo-container">
    <input type="text" class="todo-box" v-model="todo" />
    <button @click="handleAddTodo" class="add-btn">{{ $t("addTodo") }}</button>
    <div v-if="todoList.length">
      <ul>
        <li v-for="(todoText, idx) in todoList" :key="idx" class="todo">
          <span class="todo-text">
            <input
              type="checkbox"
              class="toggle"
              ref="toggle"
              @click="onToggle(idx)"
              v-model="todoText.done"
            />
            {{ todoText.text }}
          </span>
          <span @click="handleDelete(idx)" class="delete">{{
            $t("delete")
          }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { store } from "../store";

export default {
  name: "Dashboard",
  data() {
    return {
      todo: ""
    };
  },
  store,
  computed: {
    todoList() {
      return this.$store.state.todoList;
    }
  },
  methods: {
    handleAddTodo() {
      const { todo, $store } = this;

      if (todo.length) {
        $store.dispatch("setTodo", { text: todo, done: false });
        this.todo = "";
      }
    },
    onToggle(id) {
      this.$store.dispatch("toggleTodo", id);
    },
    handleDelete(id) {
      this.$store.dispatch("deleteTodo", id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.todo-container {
  max-width: 500px;
  width: 100%;
  margin-right: 20px;
  margin-top: 50px;
}
.todo-box {
  padding: 5px 10px;
  outline: none;
  font-size: 16px;
}
.todo {
  list-style: none;
  padding: 10px;
  margin: 5px;
  border: 1px solid green;
  font-size: 18px;
  letter-spacing: 1.1px;
  word-break: break-all;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .todo-text {
    display: inline-block;
    width: calc(100% - 55px);
  }
}
.add-btn {
  padding: 9px 15px;
  border: none;
  margin-left: 5px;
  outline: none;
  cursor: pointer;
  background: green;
  color: #fff;
  font-weight: 700;
}
.delete {
  color: red;
  font-size: 12px;
  cursor: pointer;
  text-decoration: underline;
  display: inline-block;
  width: 45px;
}
</style>
