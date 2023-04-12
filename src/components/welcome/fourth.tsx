import { defineComponent, ref } from "vue";
import s from "./first.module.scss";
import pig from '../../assets/fufeijilu.png'
import { RouterLink } from "vue-router";
export const Fourth = defineComponent({
  setup() {
    return () => (
      <>
      <div class={s.wrapper}>
        <img src={pig} alt="icon"/>
        <h2>轻松记账</h2>
        <h3>简单记账，轻松省钱</h3>
        
      </div>
      <div class={s.action}>
          <RouterLink to='/'>进入</RouterLink>
        </div>
    </>);
  },
});
