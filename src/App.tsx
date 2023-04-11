import { defineComponent, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

export const App = defineComponent({
  setup() {
    
    return () => (
      <>
      <header>
        <ul>
          <li>
              <RouterLink to='/about'>Bar</RouterLink>
          </li>
          <li>
            haha1
          </li>
        </ul>
      </header>
        <div>hi</div>
        <RouterView/>
      </>
    );
  },
});
