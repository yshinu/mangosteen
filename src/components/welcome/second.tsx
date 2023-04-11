import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";

export const Second = defineComponent({
  setup() {
    return () => (<div>
        这是我的第二个欢迎页
    </div>);
  },
});
