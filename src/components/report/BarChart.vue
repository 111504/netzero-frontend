<template>
  <div class="chart-container">
    <div class="chart-block">
      <p>本周與本月用電量比較</p>
      <canvas ref="chartElement"></canvas>
    </div>
  </div>
   <button @click="switchData" style="margin-bottom: 20px">切換數據</button>
</template>

<script setup>
import { ref, shallowRef, computed, watch, nextTick, onMounted } from 'vue';
import axios from 'axios';
import Chart from 'chart.js/auto';

// 設置圖表數據
const chartData1 = ref([800, 880, 869, 875, 768, 210, 150]);

// 取得要放圖表的 canvas 元素
const chartElement = ref(null);

// 儲存生成的圖表
const dataChart1 = shallowRef(null);

const initChart = (ws) => {
  return new Chart(chartElement.value.getContext('2d'), {
    type: 'bar',
    data: {
      labels:['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
      datasets: [{
        label: '本周用電量',
        data: ws.value,
        backgroundColor: '#42b983',
        borderColor: '#42b983',
        borderWidth: 1,
        fill: true,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
};
function getRandomInt() {
  return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
}
const switchData = () => {
  console.log('獲取數據')
  // chartData1.value = chartData1.value.map(() => Math.floor(Math.random() * 1000));
  fetchData();
};

// 模擬動態數據更新
// setInterval(() => {
//  switchData()
// }, 2000)



onMounted(() => {
  nextTick(() => {
   dataChart1.value = initChart(chartData1);
  });
});



// 從 API 獲取數據的函數
//真實情況 後端會回傳 message code data 
//code 網路狀態碼
//message
const fetchData = async () => {
  try {
    const response = await axios.get('https://run.mocky.io/v3/3e65090a-729c-46b0-aec9-7cab2879e465',{
      timeout:5000//逾時時間為5秒
    });
     if(response.data.code===200){
      chartData1.value = response.data.data; // 假設 API 返回一個數組
      console.log('回應=',chartData1.value)
     }
     else{
      // 處理後端返回的業務錯誤
      console.error('API Error',response.data.message)
     }
  } catch (error) {
    //技術錯誤
     if (error.code === 'ECONNABORTED') {
      console.error('Request timed out');
    } else {
      console.error('Failed to fetch data:', error.message);
    }
  }
};






watch(chartData1, (newData) => {
  //newData 是 chartData1更新後的新值
  const nd = [...newData];
  if (dataChart1.value) {
    dataChart1.value.data.datasets[0].data = nd;
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
 
  align-items: center;
  width: 100%;
  height: 600px;
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

.chart-block canvas {
  flex: 1;
  margin: 0 auto;
  height: 100%; /* 確保 canvas 填滿父容器高度 */
}
</style>
