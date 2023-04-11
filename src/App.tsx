import { defineComponent, ref } from "vue";

export const App = defineComponent({
  setup() {
    const count = ref(0);
    const add=function(){
        count.value++
    }
    return () => (
      <>
        <div>{count.value}</div>
        <div>
            <button onClick={add}>+1</button>
        </div>
      </>
    );
  },
});
