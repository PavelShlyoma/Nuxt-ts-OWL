<script setup lang="ts">

const props = defineProps(["data"]);

const { src, title, date, tags } = useNews();

src.value = props.data.data.result.meta.elementOgImage.src;
title.value = props.data.data.result.meta.elementPageTitle;
date.value = props.data.data.result.date;
tags.value = props.data.data.result.tags;
</script>

<template>
  <section class="news-section">
    <div class="news-card-arrow">
      <img class="news-card-arrow-desktop" src="@/public/image/arrow.png" alt="Открыть">
      <img class="news-section-arrow-mobile" src="@/public/image/mobile-arrow.png" alt="Открыть">
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
          <div class="news-card-content-tag" v-for="(tag, index) in tags" :key="index">
            <div class="news-card-content-type" v-for="(type, typeIndex) in tag.values" :key="typeIndex">
              <div class="news-card-content-block" :style="{ color: type.color, borderColor: type.color }" >
                <div v-if="type.src">
                  <img :src="type.src" alt="1" />
                </div>
                {{ type.name }}
              </div>
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
  border-radius: 24px;
  background-color: rgba(148, 175, 176, 0.1);;
  display: flex;
  gap: 24px;
  mask-image: url("@/public/image/mask-news.png");
  mask-position: right;
  mask-size: 100% 100%;
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

.news-card-content-block {
  background: none;
  font-size: 14px;
  font-weight: 400;
  border: 1px solid #e4e4e4;
  padding: 4px 12px;
  border-radius: 20px;
}

.news-card-content-type {
  display: flex;
  gap: 4px;
}

.news-card-content-tag {
  display: flex;
  gap: 4px;
}

.news-section-arrow-mobile {
  display: none;
}

@media (max-width: 1200px) {
  .news-card-content-title {
    font-size: 18px;
    max-width: 380px;
  }

  .news-card-arrow {
    width: 60px;
    height: 60px;
  }

}

@media (max-width: 1000px) {
  .news-card {
    flex-direction: column;
    gap: 16px;
    mask-image: none;
    margin-bottom: 20px;
    background-color: white;
  }

  .news-card-content {
    gap: 16px;
  }

  .news-card-content-title {
    font-size: 14px ;
  }

   .news-card-poster {
     width: 100%;
     height: 100%;
   }

  .news-card-arrow {
    top: 90%;
    -webkit-box-shadow: 1px 2px 12px -2px rgba(34, 60, 80, 0.26);
    -moz-box-shadow: 1px 2px 12px -2px rgba(34, 60, 80, 0.26);
    box-shadow: 1px 2px 12px -2px rgba(34, 60, 80, 0.26);
  }

}

@media (max-width: 800px) {

  .news-card-arrow-desktop {
    display: none;
  }

  .news-section-arrow-mobile {
    display: block;
  }
}

</style>
