<template>
  <div class="chart-container">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'

// 註冊 Chart.js 的組件
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: '用電比較',
      backgroundColor: '#f87979',
      borderColor: '#f87979',
      data: [40, 20, 12, 39, 10, 40, 39],
      fill: false
    },
    {
      label: '用電比較2',
      backgroundColor: '#36a2eb',
      borderColor: '#36a2eb',
      data2: [40, 20, 12, 39, 10, 40, 39],
      fill: false
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
}
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 40vh;
  width: 80vw;
}
</style>
