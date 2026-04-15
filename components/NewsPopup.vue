<script setup lang="ts">

import NextNews from "~/components/NextNews.vue";

const { getNews } = usePopupNews()
await getNews(window.location.pathname.slice(6))
const { title, date, tags, newSrc, newCode, newDate, newTags, newTitle } = usePopupNews()

console.log(newCode.value)

async function getNewNews(code: string): Promise<void> {
  await getNews(code)
  history.pushState({}, '',`${code}`)
}

const emit = defineEmits(['closePopup'])


</script>

<template>
 <teleport to="body">
   <section class="popup-news">
     <div class="popup-news-content">
       <button @click="$emit('closePopup')" class="popup-news-button--close">
         <img class="popup-news-button-img" src="@/public/image/close-btn.png" alt="Закрыть">
       </button>
       <div class="popup-news-content-container">
          <ul class="popup-news-content-nav">
            <NuxtLink class="popup-news-content-link" to="/news">
              ГЛАВНАЯ
            </NuxtLink>
            <div class="popup-news-content-sep"></div>
            <NuxtLink class="popup-news-content-link" to="/news">
              НОВОСТИ
            </NuxtLink>
            <div v-if="title" class="popup-news-content-sep"></div>
            <li class="popup-news-content-title">
              {{ title }}
            </li>
          </ul>
         <div class="popup-news-content-tags">
           <div class="popup-news-content-tag"  v-for="(tag, index) in tags" :key="index">
             <div v-for="(type, index) in tag.values" :key="index">
               <button :style="{ color: type.color, borderColor: type.color }" class="popup-news-content-tags-button">
                 <div v-if="type.src">
                   <img :src="type.src" alt="1" />
                 </div>
                 {{ type.name }}
               </button>
             </div>
           </div>
         </div>
         <h1 class="popup-news-content-title-description">
           {{ title }}
         </h1>
         <div class="popup-news-content-date">
           {{ date }}
         </div>
         <h3 v-if="newCode !== null" class="popup-news-content-next">
           Следующая статья
         </h3>
         <NextNews v-if="newCode !== null" @click="getNewNews(newCode)" style="cursor: pointer" :src="newSrc" :tags="newTags" :date="newDate" :title="newTitle" ></NextNews>
       </div>
     </div>
   </section>
 </teleport>
</template>

<style scoped>

.popup-news {
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.popup-news-content {
  margin-top: 170px;
  background: white;
  border-radius: 16px 16px 0 0;
  width: calc(100% - 64px);
  height: 100vh;
  overflow-y: auto;
  position: relative;
}

.popup-news-button--close {
  mask-image: url("@/public/image/mask-close.png");
  background-color: #ca2250;
  -webkit-mask-position: right;
  border-radius: 0 16px 0 16px;
  position: absolute;
  width: 128px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  top: 0;
}

.popup-news-button-img {
padding-left: 36px;
}

.popup-news-content-container {
  max-width: 1056px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin: 34px auto 128px;
}

.popup-news-content-nav {
  display: flex;
  gap: 8px;
  margin: 0 0 16px;
  align-items: center;
  padding: 0;
}

.popup-news-content-link {
  font-size: 16px;
  color: #423F3F;
  font-weight: 500;
}

.popup-news-content-sep {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #423F3F;
}

.popup-news-content-title {
  color: #423F3F;
  font-weight: 500;
  font-size: 16px;
  opacity: 0.4;
}

.popup-news-content-tags {
  display: flex;
  gap: 8px;
}

.popup-news-content-tags-button {
  background: none;
  font-size: 14px;
  font-weight: 400;
  border: 1px solid #e4e4e4;
  padding: 4px 12px;
  border-radius: 20px;
}

.popup-news-content-title-description {
  color: #423F3F;
  font-weight: 700;
  font-size: 48px;
  opacity: 0.98;
}

.popup-news-content-date {
  color: #CFCFCF;
  font-size: 16px;
  font-weight: 500;
}

.popup-news-content-next {
  padding: 16px 0;
  color: #423F3F;
  font-weight: 700;
  font-size: 40px;
  opacity: 0.98;
}

.popup-news-content-tags-button {
  display: flex;
  gap: 4px;
}

.popup-news-content-tag {
  display: flex;
  gap: 4px;
}

</style>