<template>
  <v-navigation-drawer class="controls-bar" width="350" permanent>
    <v-list color="transparent">
      <v-list-item>
        <h2 class="controls-bar__title mb-1">Tasks</h2>
        <v-text-field
          class="mb-2"
          v-model="taskTitle"
          placeholder="Enter task title"
        />
        <v-btn
          :disabled="addTaskButtonDisabled"
          width="100%"
          variant="outlined"
          @click="addNewItem('tasks', 'title', taskTitle)"
          >Add</v-btn
        >
      </v-list-item>
      <ControlsList
        :type="'tasks'"
        :items="eventsStore.tasks"
        :title-prop="'title'"
      />
      <v-list-item>
        <h2 class="controls-bar__title mb-1">Dates</h2>
        <v-text-field class="mb-2" v-model="date" placeholder="Enter date" />
        <v-btn
          :disabled="addDateButtonDisabled"
          width="100%"
          variant="outlined"
          @click="addNewItem('dates', 'date', date)"
          >Add</v-btn
        >
      </v-list-item>
      <ControlsList
        :type="'dates'"
        :items="eventsStore.dates"
        :title-prop="'date'"
      />
      <v-list-item>
        <h2 class="controls-bar__title mb-1">Statuses</h2>
        <v-text-field
          class="mb-2"
          v-model="status"
          placeholder="Enter task status"
        />
        <v-btn
          :disabled="addStatusButtonDisabled"
          width="100%"
          variant="outlined"
          @click="addNewItem('statuses', 'status', status)"
          >Add</v-btn
        >
      </v-list-item>
      <ControlsList
        :type="'statuses'"
        :items="eventsStore.statuses"
        :title-prop="'status'"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, computed } from "vue";
import { useEventsStore } from "@/stores/events";

//Components
import ControlsList from "./ControlsList.vue";

const eventsStore = useEventsStore();

const taskTitle = ref("");
const date = ref("");
const status = ref("");

const addTaskButtonDisabled = computed(() => taskTitle.value.trim() === "");
const addDateButtonDisabled = computed(() => date.value.trim() === "");
const addStatusButtonDisabled = computed(() => status.value.trim() === "");

function resetInputs() {
  taskTitle.value = "";
  date.value = "";
  status.value = "";
}

function addNewItem(arrToAdd, key, inputValue) {
  const newItem = {
    id: eventsStore.generateId(),
  };
  newItem[key] = inputValue;
  eventsStore.addItem(arrToAdd, newItem);
  resetInputs();
}
</script>

<style scoped lang="scss">
.controls-bar {
  &__title {
    background-color: #c8e1f9;
    padding: 3px 10px;
    border-radius: 4px;
  }
}
</style>
