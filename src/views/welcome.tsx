import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";
import s from './welcome.module.scss'
import logo from '../assets/logo.png'
export const Welcome = defineComponent({
  setup() {
    return () => (
        <div class={s.warpper}>
      <header>
        <img src={logo} alt="logo"/>
        <h1>芒果记账</h1>
      </header>
        <main><RouterView /></main>
      </div>
    );
  },
});
