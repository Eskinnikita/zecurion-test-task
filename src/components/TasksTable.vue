<template>
  <v-table class="tasks-table">
    <thead>
      <tr>
        <th>Tasks / Dates</th>
        <th
          class="text-center"
          v-for="(date, index) in eventsStore.dates"
          :key="index"
        >
          {{ date.date }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(task, index) in eventsStore.tasks" :key="index">
        <td>
          <input class="tasks-table__small-input" v-model="task.title" />
        </td>
        <td
          class="tasks-table__event-cell text-center"
          v-for="(date, index) in eventsStore.dates"
          :key="index"
        >
          <template v-if="eventsStore.statuses.length">
            <v-btn
              @click="addEvent(date.id, task.id)"
              variant="text"
              icon
              v-if="!eventsStore.getEvent(date.id, task.id)"
            >
              <v-icon>mdi-plus-circle-outline</v-icon>
            </v-btn>
            <select
              v-else
              class="tasks-table__custom-select"
              @input="
                updateEvent(eventsStore.getEvent(date.id, task.id), $event)
              "
            >
              <option
                v-for="(status, index) in eventsStore.statuses"
                :key="index"
                :value="status.id"
              >
                {{ status.status }}
              </option>
            </select>
          </template>
          <template v-else>
            <p>List is empty</p>
          </template>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
import { useEventsStore } from "@/stores/events";

const eventsStore = useEventsStore();

function addEvent(dateId, taskId) {
  const newEvent = {
    id: eventsStore.generateId(),
    dateId,
    taskId,
    statusId: eventsStore.statuses[0].id,
  };
  eventsStore.addItem("events", newEvent);
}

function updateEvent(event, e) {
  let optionValue = null;
  if (e.target.options.selectedIndex > -1) {
    optionValue = e.target.options[e.target.options.selectedIndex].value;
  }
  if (event) {
    eventsStore.updateItemByKey("events", event.id, "statusId", optionValue);
  }
}
</script>

<style scoped lang="scss">
.tasks-table {
  &__small-input {
    border: 1px solid #666;
    border-radius: 4px;
    padding: 5px;
  }

  &__custom-select {
    display: grid;
    grid-template-areas: "select";
    width: 100%;
    height: 35px;
    min-width: 100px;
    max-width: 150px;
    border: 1px solid #666;
    border-radius: 4px;
    padding: 5px;
    cursor: pointer;
    background-color: #fff;
    margin: 0 auto;
    appearance: auto !important;
  }
}
</style>
