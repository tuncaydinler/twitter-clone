import { Controller } from "@hotwired/stimulus";
import MicroModal from "micromodal";

// Connects to data-controller="comment"
export default class extends Controller {
  connect() {
    MicroModal.init({
      // onShow: (modal) => console.info(`${modal.id} is shown`), // [1]
      // onClose: (modal) => console.info(`${modal.id} is hidden`), // [2]
      openClass: "!flex", // [5]
      disableScroll: true, // [6]
      disableFocus: true, // [7]
      awaitOpenAnimation: false, // [8]
      awaitCloseAnimation: false, // [9]
      debugMode: false, // [10]
    });
    this.element.addEventListener("turbo:frame-load", (event) => {
      if (event.target.id === "modal-frame") {
        MicroModal.show("modal-1");
        event.target.classList.remove("hidden");
      }
    });
  }

  escapeClose() {
    const modal = document.getElementById("modal-1");
    const frame = document.getElementById("modal-frame");

    if (modal && frame) {
      MicroModal.close("modal-1");
      modal.remove();
      frame.src = "";
    }
  }

  closeModal(event) {
    if (event.target !== event.currentTarget) return;

    const modal = document.getElementById("modal-1");
    const frame = document.getElementById("modal-frame");

    if (modal && frame) {
      MicroModal.close("modal-1");
      modal.remove();
      frame.src = "";
    }
  }
}
