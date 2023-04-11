import { RouteRecordRaw } from "vue-router";
import { Bar } from "../views/Bar";
import { Foo } from "../views/Foo";
import { Welcome } from "../views/welcome";
import { First } from "../components/welcome/first";
import { Second } from "../components/welcome/second";
import { Third } from "../components/welcome/third";
import { Fourth } from "../components/welcome/fourth";

export const routes:RouteRecordRaw[]= [
    { path: '/', component: Foo },
    { path: '/about', component: Bar },
    {path:'/welcome',component:Welcome, children:[
        {path:'1',component:First},
        {path:'2',component:Second},
        {path:'3',component:Third},
        {path:'4',component:Fourth},
    ]}
  ]