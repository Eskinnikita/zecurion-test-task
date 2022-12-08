<template>
  <v-navigation-drawer
    class="events-list"
    width="350"
    location="right"
    permanent
  >
    <v-list color="transparent">
      <v-list-item><h2>Events</h2></v-list-item>
      <v-list-item v-for="(event, index) in eventsStore.events" :key="index">
        <span class="events-list__item-id">id: {{ event.id }}</span>
        <v-btn variant="text" icon @click="removeEvent(event.id)"
          ><v-icon>mdi-close-circle-outline</v-icon></v-btn
        >
        <ul class="mb-1">
          <li v-if="getValue('tasks', event.taskId, 'title')">
            <strong>Task: </strong>
            {{ getValue("tasks", event.taskId, "title") }}
          </li>
          <li v-if="getValue('dates', event.dateId, 'date')">
            <strong>Date: </strong>{{ getValue("dates", event.dateId, "date") }}
          </li>
          <li v-if="getValue('statuses', event.statusId, 'status')">
            <strong>Status:</strong>
            {{ getValue("statuses", event.statusId, "status") }}
          </li>
        </ul>
        <v-divider v-if="index < eventsStore.events.length - 1" :key="index" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup>
import { useEventsStore } from "@/stores/events";

const eventsStore = useEventsStore();

function getValue(type, id, valueKey) {
  return eventsStore.getValueById(type, id, valueKey);
}

function removeEvent(eventId) {
  eventsStore.removeItem("events", eventId);
}
</script>

<style scoped lang="scss">
.events-list {
  &__item-id {
    padding: 3px 5px;
    background: #c8e1f9;
    border-radius: 4px;
  }
}
</style>
