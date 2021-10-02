<template>
  <div class="bg-gray-400 h-screen">
    <label :class="$style.label" for="">value:</label>
    <span>{{ value }}</span>

    <child />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, provide } from '@vue/composition-api'
import Child from '@/child.vue'

export default defineComponent({
  name: 'Demo',

  components: { Child },

  props: {
    value: {
      type: Number,
      default: 0,
    },
  },

  setup(props) {
    const double = computed(() => props.value * 2)

    provide('double', double)

    return {}
  },
})
</script>

<style module>
.label {
  @apply p-4;
}
</style>
