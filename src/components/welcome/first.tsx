import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";

export const First = defineComponent({
  setup() {
    return () => (<div>
        这是我的第一个欢迎页
    </div>);
  },
});
