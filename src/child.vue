<template>
  <div>
    child:

    <label for="">double:</label>
    <span>{{ double }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from '@vue/composition-api'

export default defineComponent({
  name: 'Child',

  setup() {
    const double = inject('double')

    return { double }
  },
})
</script>
