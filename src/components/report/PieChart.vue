<template>
  <div class="chart-container">
    <div class="chart-block">
      <p>能源消耗比例</p>
      <canvas   class="cover-fit" width="100%" height="100%" ref="chartElement"></canvas>
    </div>
  </div>
  <button @click="switchData" style="margin-bottom: 20px">切換數據</button>
</template>

<script setup>
import { ref, shallowRef, nextTick, onMounted, watch } from 'vue';
import axios from 'axios';
import Chart from 'chart.js/auto';

// 設置圖表數據
const chartData1 = ref([12, 19, 3, 5, 2, 3]);

// 取得要放圖表的 canvas 元素
const chartElement = ref(null);

// 儲存生成的圖表
const dataChart1 = shallowRef(null);

const initChart = (ws) => {
  return new Chart(chartElement.value.getContext('2d'), {
    type: 'pie',
    data: {
      labels: ['火力', '水力', '風力', '核能', '太陽能', '煤氣'],
      datasets: [{
        label: '能源消耗',
        data: ws.value,
        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0', '#9966ff', '#ff9f40'],
        borderColor: '#fff',
        borderWidth: 1,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
};

const switchData = () => {
  console.log('獲取數據');
  fetchData(); // 切換數據時，從 API 獲取數據
};

onMounted(() => {
  nextTick(() => {
    dataChart1.value = initChart(chartData1);
  });
});

// 從 API 獲取數據的函數
const fetchData = async () => {
  try {
    const response = await axios.get('https://run.mocky.io/v3/3e65090a-729c-46b0-aec9-7cab2879e465', {
      timeout: 5000 //逾時時間為5秒
    });
    if (response.data.code === 200) {
      chartData1.value = response.data.data; // 假設 API 返回一個數組
      console.log('回應=', chartData1.value);
    } else {
      // 處理後端返回的業務錯誤
      console.error('API Error', response.data.message);
    }
  } catch (error) {
    // 技術錯誤
    if (error.code === 'ECONNABORTED') {
      console.error('Request timed out');
    } else {
      console.error('Failed to fetch data:', error.message);
    }
  }
};

watch(chartData1, (newData) => {
  if (dataChart1.value) {
    dataChart1.value.data.datasets[0].data = newData;
    dataChart1.value.update();
  }
}, { deep: true });

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'montserrat', sans-serif;
}
.chart-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  width: 100%;
  height: 800px;
  border: 2px black solid;
}

.chart-block {
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid #ccc; /* 只是為了可視化邊框 */
  padding: 10px;
  height: 600px; 
  width: 100%;
  margin-bottom: 20px;
}

.chart-block p {
  text-align: center;
  font-weight: bold;
  margin-bottom: 15px; /* 與圖表之間的間距 */
  color: #000;
}

/* .chart-block canvas {
  background-color: bisque;
  margin: 0 auto;
   
}*/
.cover-fit{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
