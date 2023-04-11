import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";

export const Fourth = defineComponent({
  setup() {
    return () => (<div>
        这是我的第四个欢迎页
    </div>);
  },
});
