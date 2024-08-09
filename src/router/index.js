import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../components/MainPage.vue'
import HomeComponent from '../components/HomeComponent.vue';
import ReportComponent from '../components/ReportComponent.vue';
import ReportPdfComponent from '../components/ReportPdfComponent.vue';
import CustomComponent from '../components/CustomCompoent.vue'
const routes = [
  {
    path: '/',
    component: MainPage,
    children: [
      { path: '', component: HomeComponent },
      { path: 'report', component: ReportComponent },
      { path:'pdf',component: ReportPdfComponent},
      { path:'custom',component:CustomComponent}
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
