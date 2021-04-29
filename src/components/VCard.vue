<template>
  <div :class="$style.card">
    <slot></slot>
  </div>
</template>

<style lang="scss" module>
.card {
  margin: 0 0 24px 0;
  padding: 20px 24px;
  background: var(--card-background);
  border-radius: 6px;
}
</style>
