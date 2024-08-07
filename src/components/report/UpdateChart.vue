<script setup>
import { ref, shallowRef, computed, watch, nextTick, onMounted } from 'vue';
import Chart from 'chart.js/auto';

// 要跑圖表折線的資料陣列
const dataArray = ref([800, 880, 869, 875, 768, 210, 150]);

// 取得要放圖表的 canvas 元素
const chartElement = ref(null);

// 儲存 new Chart 生成的圖表
const dataChart = shallowRef(null);

const init = (ws) => {
  dataChart.value = new Chart(chartElement.value.getContext('2d'), {
    type: 'line',
    data: {
      labels: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
      datasets: [
        {
          label: '出勤次數',
          data: ws.value,
          backgroundColor: '#B7EDA1',
          borderColor: '#1BAD4F',
          borderWidth: 1,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
};
function getRandomInt() {
  return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
}
const switchData = () => {
  dataArray.value = [
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt()
  ];
};

// 模擬動態數據更新
setInterval(() => {

  dataArray.value = [
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
  ];
}, 2000)




watch(dataArray,(newDataArray) => {
    const nd = [...newDataArray];
    dataChart.value.data.datasets[0].data = nd;
    dataChart.value.update();
  },
  { deep: true }
);
onMounted(() => {
  nextTick(() => {
    init(dataArray);
  });
});
</script>

<template>
  <main>
    <button @click="switchData" style="margin-bottom: 20px">切換數據</button>
    <div class="canvas-box">
      <!-- 生成圖表的 canvas -->
      <canvas ref="chartElement"></canvas>
    </div>
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'montserrat', sans-serif;
}



main {
  padding: 1.5rem;
}

h1 {
  font-size: 2em;
  text-align: center;
  margin-bottom: 2rem;
}

h2 {
  margin-bottom: 1rem;
  color: #888;
  font-weight: 400;
}

.current span {
  display: block;
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.current small {
  color: #888;
  font-style: italic;
}

.canvas-box {
  width: 100%;
  max-width: 1020px;
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.weight-history ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.weight-history ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
}

.weight-history ul li:nth-child(even) {
  background-color: #dfdfdf;
}

.weight-history ul li:hover {
  background-color: #f8f8f8;
}

.weight-history ul li:last-of-type {
  border-bottom: none;
}

.weight-history ul li span {
  display: block;
  font-size: 1.25rem;
  font-weight: 700;
  margin-right: 1rem;
}

.weight-history ul li small {
  color: #888;
  font-style: italic;
}
</style>
