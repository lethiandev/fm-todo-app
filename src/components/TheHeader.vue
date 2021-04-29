<template>
  <header :class="$style.header">
    <div :class="$style.containerHeader">
      <h1 :class="$style.headerTitle">Todo</h1>
    </div>
  </header>
</template>

<style lang="scss" module>
.container-header {
  composes: container from '@/scss/layout.module.scss';

  display: flex;
  align-content: center;
  justify-content: space-between;
}

.header {
  padding: 48px 0 24px 0;
}

.header-title {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1rem;
  line-height: 1;
  font-weight: 700;
  font-size: 2.6rem;
}
</style>
