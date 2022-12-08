<template>
  <div class="controls-list" v-if="items.length">
    <v-list-item v-for="(item, index) in items" :key="index">
      <div class="d-flex justify-space-between align-center mb-2">
        <div>{{ item[titleProp] }}</div>
        <v-btn variant="text" icon @click="removeItem(item.id)"
          ><v-icon>mdi-close-circle-outline</v-icon></v-btn
        >
      </div>
      <v-divider v-if="index < items.length - 1" :key="index" />
    </v-list-item>
  </div>
  <div class="text-center mt-2 mb-2" v-else>List is empty</div>
</template>

<script setup>
import { defineProps } from "vue";
import { useEventsStore } from "@/stores/events";

const props = defineProps({
  type: String,
  items: Array,
  titleProp: String,
});

const eventsStore = useEventsStore();

function removeItem(itemId) {
  eventsStore.removeItem(props.type, itemId);
}
</script>
