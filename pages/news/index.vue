<script setup lang="ts">



</script>

<template>
  <section class="news">
    <div class="news-container">
      <h1 class="news-title">
        Основные новости
      </h1>
      <p class="news-text">
        Держим в курсе новостей о жизни Брянской Строительной Компании: ход строительства, акции, мероприятия и полезные советы для нынешних и будущих квартир.
      </p>

    </div>
  </section>
</template>

<style scoped>

.news {
  background-color: white;
  min-height: 100vh;
  max-width: calc(100% - 64px);
  border-radius: 16px;
  margin: 0 auto;
}

.news-container {
  margin: 0 auto;
  max-width: calc(100% - 128px);
}

.news-title {
  font-weight: 700;
  font-size: 48px;
  padding-top: 32px;
  color: #423F3F;
}

.news-text {
  font-weight: 400;
  font-size: 16px;
  max-width: 600px;
  margin-top: 32px;
  color: #717070;
}

</style>