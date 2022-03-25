import Vue from 'vue'
import VueRouter from 'vue-router'
import StudentHomeworks from '../views/student/StudentHomeworks';
import StudentChat from '../views/student/StudentChat';
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
    path: '/studentHomeworks',
    name: 'StudentHomeworks',
    component: StudentHomeworks,
    meta: { requiresStudent: true }
  },
  {
    path: '/studentChat',
    name: 'StudentChat',
    component: StudentChat,
    meta: { requiresStudent: true }
  },
  {
    path: '/TeacherHomeworks',
    name: 'TeacherHomeworks',
    component: TeacherHomeworks,
    meta: { requiresTeacher: true }
  },
  {
    path: '/TeacherChat',
    name: 'TeacherChat',
    component: TeacherChat,
    meta: { requiresTeacher: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresTeacher) {
    if (localStorage.getItem('userRole')) {
      if (localStorage.getItem('userRole') === 'TEACHER') {
        next()
      } else {
        next({ path: '/studentHomeworks' })
      }
    } else {
      next({ path: '/login' })
    }
  }
  if (to.meta.requiresStudent) {
    if (localStorage.getItem('userRole')) {
      if (localStorage.getItem('userRole') === 'STUDENT') {
        next()
      } else {
        next({ path: '/teacherHomeworks' })
      }
    } else {
      next({ path: '/login' })
    }
  }
  next()
})

export default router
