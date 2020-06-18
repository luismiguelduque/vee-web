import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('../layouts/Main.vue'),
    children: [
      {
        path: '/',
        redirect: '/actividades'
      },
      {
        path: '/actividades',
        name: 'actividades',
        component: () => import('../views/actividades/Actividades.vue'),
        meta: {
          rule: 'editor'
        }
      },
      {
        path: '/actividad',
        name: 'actividad',
        component: () => import('../views/actividad/Actividad.vue'),
        meta: {
          rule: 'editor'
        }
      },
      {
        path: '/reservaciones',
        name: 'reservaciones',
        component: () => import('../views/reservaciones/Reservaciones.vue'),
        meta: {
          rule: 'editor'
        }
      },
      {
        path: '/ventas',
        name: 'ventas',
        component: () => import('../views/ventas/Ventas.vue'),
        meta: {
          rule: 'editor'
        }
      },
      {
        path: '/perfil',
        name: 'perfil',
        component: () => import('../views/perfil/Perfil.vue'),
        meta: {
          rule: 'editor'
        }
      },
      {
        path: '/comentarios',
        name: 'comentarios',
        component: () => import('../views/comentarios/Comentarios.vue'),
        meta: {
          rule: 'editor'
        }
      },
    ]
  },
  {
    path: '',
    component: () => import('../layouts/Full.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/public/Login.vue'),
        meta: {
          rule: 'editor'
        }
      },
      {
        path: '/cuenta-bloqueada',
        name: 'cuenta-bloqueada',
        component: () => import('../views/public/CuentaBloqueada.vue'),
        meta: {
          rule: 'editor'
        }
      },
      {
        path: '/cuenta-bloqueada-reporte',
        name: 'cuenta-bloqueada-reporte',
        component: () => import('../views/public/CuentaBloqueadaReporte.vue'),
        meta: {
          rule: 'editor'
        }
      },
      {
        path: '/terminos',
        name: 'terminos',
        component: () => import('../views/public/Terminos.vue'),
        meta: {
          rule: 'editor'
        }
      },
      {
        path: '/registro',
        name: 'registro',
        component: () => import('../views/public/Registro.vue'),
        meta: {
          rule: 'editor'
        }
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
