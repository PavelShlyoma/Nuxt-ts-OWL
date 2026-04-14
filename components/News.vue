<script setup lang="ts">

const props = defineProps(["data"]);
console.log("props", props.data.data.result);

const { src, title, date, tags } = useNews();

src.value = props.data.data.result.meta.elementOgImage.src;
title.value = props.data.data.result.meta.elementPageTitle;
date.value = props.data.data.result.date;

tags.value = props.data.data.result.tags;

</script>

<template>
  <section class="news-section">
    <div class="news-card-arrow">
      <img src="@/public/image/arrow.png" alt="Открыть">
    </div>
    <div class="news-card-date">
      {{ date }}
    </div>
    <div class="news-card">
      <div class="news-card-poster">
        <img class="news-card-image" :src="src" alt="Картинка">
      </div>
      <div class="news-card-content">
        <div class="news-card-content-title">
          {{ title }}
        </div>
        <div class="news-card-content-links">
          <div v-for="tag in tags">
            <div v-for="type in tag.values">
              <button :style="{ color: type.color, borderColor: type.color }" class="news-card-content-button">
                <div v-if="type.src">
                  <img :src="type.src" alt="1" />
                </div>
                {{ type.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.news-section {
  position: relative;
  margin: 0 auto;
  cursor: pointer;
  max-width: 1056px;
}

.news-card {
  mask-image: url('@/public/image/mask-news.png');
  transition: box-shadow 0.2s;
  border-radius: 24px;
  background-color: white;
  display: flex;
  gap: 24px;
}

.news-card-date {
  position: absolute;
  color: white;
  padding: 8px 16px;
  background-color: rgba(91, 68, 129, 0.8);;
  z-index: 1;
  border-radius: 16px;
  left: 16px;
  top: 16px;
}

.news-card-arrow {
  box-shadow: 0 4rem 12rem #1e1a230d, 0 2rem 6rem #5912731a, 0 1rem 2rem #3e4a5905;
  position: absolute;
  background-color: white;
  border-radius: 24px;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  top: 0;
  transition: 0.2s ease-in-out;
}

.news-card-poster {
  width: 320px;
  height: 220px;
  border-radius: 24px;
  overflow: hidden;
}

.news-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-card-content {
  display: flex;
  flex-direction: column;
}

.news-card-content-title {
  color: #423F3F;
  font-weight: bold;
  padding-top: 16px;
  font-size: 24px;
  max-width: 580px;
}

.news-card-content-links {
  display: flex;
  align-items: center;
  margin-top: auto;
  gap: 8px;
  padding-bottom: 20px;
}

.news-card-content-button {
  background: none;
  font-size: 14px;
  font-weight: 400;
  border: 1px solid #e4e4e4;
  padding: 4px 12px;
  border-radius: 20px;
}


</style>