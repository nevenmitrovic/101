import { view } from "./modules/view.js";
import { model } from "./modules/model.js";
import { controllers } from "./modules/controllers.js";

controllers(view,model).setListeners();