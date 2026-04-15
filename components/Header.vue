<template>
  <header>
    <div class="header-container">
      <div>
        <img src="@/public/icons/bsk.png" alt="Главная">
      </div>

      <ul class="header-nav">
        <li class="header-nav-to active">
          Объекты
        </li>
        <li class="header-nav-to">
          Квартиры
        </li>
        <div class="header-nav-separator">
        </div>
        <li class="header-nav-to">
          Ипотека от <span>4%</span>
        </li>
        <div class="header-nav-separator">
        </div>
        <li class="header-nav-to">
          Ремонт
        </li>
        <div class="header-nav-separator">
        </div>
        <li class="header-nav-to">
          Контакты
        </li>
        <button class="header-nav-button">
          <div class="header-nav-button-content"></div>
        </button>
      </ul>

      <div class="header-call">
        <img src="@/public/icons/tel.png" alt="Номер">
        <div>
          +7 (4832) 32-15-68
        </div>
      </div>

    </div>
  </header>
</template>

<style scoped>

header {
  background-color: white;
  max-width: calc(100% - 64px);
  border-radius: 16px;
  margin: 8px auto;
  height: 68px;
  position: sticky;
  top: 8px;
  box-shadow: 0 4rem 12rem #1e1a230d, 0 2rem 6rem #5912731a, 0 1rem 2rem #3e4a5905;
  z-index: 10;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: calc(100% - 128px);
  height: 100%;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 16px;
}

.header-nav-to {
  font-weight: 400;
  font-size: 16px;
  color: #423F3F;
}

.header-nav-to.active {
  padding: 6px 12px;
  color: white;
  background-color: #CA2250;
  border-radius: 12px;
}

.header-nav-separator {
  height: 24px;
  width: 2px;
  background-color: #423F3F;
  opacity: 0.1;
}

.header-nav-to span {
  background: #D52E52;
  background: linear-gradient(90deg, rgba(213, 46, 82, 1) 0%, rgba(189, 45, 98, 1) 14%, rgba(152, 44, 122, 1) 58%, rgba(111, 47, 131, 1) 86%, rgba(90, 37, 105, 1) 100%);
  border-radius: 8px;
  color: white;
  font-weight: 600;
  padding: 2px 6px;
}

.header-call {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.header-nav-button {
  position: relative;
  width: 40px;
  height: 40px;
  background-color: white;
}

.header-nav-button-content,
.header-nav-button-content::after,
.header-nav-button-content::before {
  content: "";
  position: absolute;
  height: 2px;
  width: 18px;
  border-radius: 2px;
  background: #D52E52;
  background: linear-gradient(90deg, rgba(213, 46, 82, 1) 0%, rgba(189, 45, 98, 1) 14%, rgba(152, 44, 122, 1) 58%, rgba(111, 47, 131, 1) 86%, rgba(90, 37, 105, 1) 100%);
}

.header-nav-button-content {
  width: 34px;
}

.header-nav-button-content::after {
  top: 5px;
  left: 14px;
}

.header-nav-button-content::before {
  top: -5px;
  left: 2px;
}

@media only screen and (max-width: 1024px) {
  .header-nav {
    display: none;
  }

}

@media (max-width: 800px) {
  header {
    max-width: calc(100% - 24px);
  }

  .header-container {
    max-width: calc(100% - 20px);
  }
}

</style>
<script setup lang="ts">
</script>
