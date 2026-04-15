<script setup lang="ts">

const props = defineProps(["src", "title", "date", "tags"]);


</script>

<template>
  <section class="news-section">
    <button class="news-card-arrow">
      <img src="@/public/image/arrow.png" alt="Открыть">
    </button>
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
          <div class="news-card-content-tag" v-for="(tag, index) in tags" :key="index">
            <div class="news-card-content-type" v-for="(type, index) in tag.values" :key="index">
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
}

.news-card {
  mask-image: url("@/public/image/mask-popup-news.png");
  width: 100%;
  mask-position: right;
  mask-size: 100% 100%;
  background-color: rgba(148, 175, 176, 0.2);;
  border-radius: 24px;
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
  -webkit-box-shadow: 1px 2px 12px -2px rgba(34, 60, 80, 0.26);
  -moz-box-shadow: 1px 2px 12px -2px rgba(34, 60, 80, 0.26);
  box-shadow: 1px 2px 12px -2px rgba(34, 60, 80, 0.26);
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
  display: flex;
  gap: 4px;
}

.news-card-content-type {
  display: flex;
  gap: 4px;
}

.news-card-content-tag {
  display: flex;
  gap: 4px;
}


</style>