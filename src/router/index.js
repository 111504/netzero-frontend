import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import MainPage from '../components/MainPage.vue'
import HomeComponent from '../components/HomeComponent.vue';
import ElectricityComponent from '../components/ElectricityComponent.vue';
import ReportComponent from '../components/ReportComponent.vue';


const routes = [
  {
    path: '/',
    component: MainPage,
    children: [
      { path: '', component: HomeComponent },
      { path: 'electricity', component: ElectricityComponent },
      { path: 'report', component: ReportComponent }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
