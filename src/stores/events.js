import { defineStore } from "pinia";

export const useEventsStore = defineStore({
  id: "events",
  state: () => ({
    dates: [],
    tasks: [],
    statuses: [],
    events: [],
  }),
  actions: {
    addItem(arr, item) {
      if (this[arr]) {
        this[arr].push(item);
      }
    },
    removeItem(arr, itemId) {
      if (this[arr]) {
        const itemIndex = this[arr].findIndex((el) => el.id === itemId);
        if (itemIndex !== -1) {
          this[arr].splice(itemIndex, 1);
        }
      }
    },
    getEvent(dateId, taskId) {
      return this.events.find(
        (event) => event.dateId === dateId && event.taskId === taskId
      );
    },
    getValueById(arr, id, key) {
      const item = this[arr].find((el) => el.id === id);
      return item ? item[key] : "";
    },
    generateId() {
      return (
        String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now()
      );
    },
    updateItemByKey(arr, itemId, key, value) {
      const item = this[arr].find((el) => el.id === itemId);
      item[key] = value;
    },
  },
});
