const c1 = () => import(/* webpackChunkName: "page--src-templates-word-press-post-vue" */ "C:\\wamp64\\www\\wordpress\\src\\templates\\WordPressPost.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-blog-vue" */ "C:\\wamp64\\www\\wordpress\\src\\pages\\Blog.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\wamp64\\www\\wordpress\\node_modules\\gridsome\\app\\pages\\404.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\wamp64\\www\\wordpress\\src\\pages\\Index.vue")

export default [
  {
    path: "/blog/:slug/",
    component: c1
  },
  {
    path: "/blog/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
