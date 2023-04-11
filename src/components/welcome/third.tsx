import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";

export const Third = defineComponent({
  setup() {
    return () => (<div>
        这是我的第三个欢迎页
    </div>);
  },
});
