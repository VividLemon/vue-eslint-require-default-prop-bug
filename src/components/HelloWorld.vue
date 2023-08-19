<script setup lang="ts">
import type { Foo } from '../types';

// type Foo = boolean

const props = withDefaults(defineProps<{
  msg?: Foo | 'foo'
}>(), {
  msg: false,
})
</script>

<template>
  <div class="greetings">
  </div>
</template>
