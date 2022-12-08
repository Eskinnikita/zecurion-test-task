<template>
  <div class="home">
    <ControlsBar />
    <TasksTable />
    <EventsList />
  </div>
</template>

<script setup>
import ControlsBar from "@/components/ControlsBar.vue";
import TasksTable from "@/components/TasksTable.vue";
import EventsList from "@/components/EventsList.vue";
</script>
