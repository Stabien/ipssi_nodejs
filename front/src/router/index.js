import Vue from 'vue'
import VueRouter from 'vue-router'
import StudentDashboard from '../views/student/StudentDashboard';
import StudentHomeworks from '../views/student/StudentHomeworks';
import StudentChat from '../views/student/StudentChat';
import TeacherDashboard from '../views/teacher/TeacherDashboard';
import TeacherHomeworks from '../views/teacher/TeacherHomeworks';
import TeacherChat from '../views/teacher/TeacherChat';
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/studentDashboard',
    name: 'StudentDashboard',
    component: StudentDashboard,
    //meta: { requiresStudent: true }
  },
  {
    path: '/studentHomeworks',
    name: 'StudentHomeworks',
    component: StudentHomeworks,
    //meta: { requiresStudent: true }
  },
  {
    path: '/studentChat',
    name: 'StudentChat',
    component: StudentChat,
    //meta: { requiresStudent: true }
  },
  {
    path: '/TeacherDashboard',
    name: 'TeacherDashboard',
    component: TeacherDashboard,
    //meta: { requiresTeacher: true }
  },
  {
    path: '/TeacherHomeworks',
    name: 'TeacherHomeworks',
    component: TeacherHomeworks,
    //meta: { requiresTeacher: true }
  },
  {
    path: '/TeacherChat',
    name: 'TeacherChat',
    component: TeacherChat,
    //meta: { requiresTeacher: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
