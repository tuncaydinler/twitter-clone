import { Controller } from "@hotwired/stimulus";
import MicroModal from "micromodal";

// Connects to data-controller="comment"
export default class extends Controller {
  connect() {
    console.log("Modal");
    MicroModal.init({
      // onShow: (modal) => console.info(`${modal.id} is shown`), // [1]
      // onClose: (modal) => console.info(`${modal.id} is hidden`), // [2]
      // openTrigger: "data-custom-open", // [3]
      // closeTrigger: "data-custom-close", // [4]
      openClass: "!flex", // [5]
      disableScroll: true, // [6]
      disableFocus: true, // [7]
      awaitOpenAnimation: false, // [8]
      awaitCloseAnimation: false, // [9]
      debugMode: true, // [10]
    });
  }
}
