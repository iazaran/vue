<template>
  <h1 class="text-5xl mt-6">17</h1>
  <div class="max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <h2 class="text-2xl mb-5">Named Slots</h2>

    <div class="container">
      <header class="text-xl mb-3">
        <slot name="header"></slot>
      </header>
      <main>
        <slot name="default"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<style>
  footer {
    border-top: 1px solid #ccc;
    color: #666;
    font-size: 0.8em;
    margin-top: 0.8em;
  }
</style>