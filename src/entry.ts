import { App } from "vue";
import MyButton from "./button/Button";

export { MyButton };

export default {
  install(app: App) {
    app.component(MyButton.name, MyButton);
  },
};
