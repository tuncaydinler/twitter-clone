import { Controller } from "@hotwired/stimulus";
import Swal from "sweetalert2";

// Connects to data-controller="unfollow"
export default class extends Controller {
  static values = { handle: String };
  connect() {
    Turbo.config.forms.confirm = (message, element) => {
      return new Promise((resolve, element) => {
        Swal.fire({
          title: `${this.handleValue} adlı kişinin takibi bırakılsın mı?`,
          text: "Bu kullanıcının gönderileri artık Sana Özel zaman akışında görüntülenmeyecek. Gönderileri korumalı değilse kullanıcının profilini görüntülemeye devam edebilirsin. ",
          template: "#unfollow-template",
          customClass: {
            popup: "!bg-black !rounded-lg !shadow-xl !w-80 !h-100 !pt-2",
            actions: "flex flex-col gap-1 !w-full",
            container: "!bg-gray-500/50",
            title: "!text-xl !font-bold !text-white !text-start",
            content: "!text-gray-600 !text-left text-sm",
            icon: "!hidden",
            confirmButton:
              "!bg-white !text-black w-[80%] !px-4 !py-3 !rounded-full !font-bold",
            cancelButton:
              "!bg-black !text-white !px-4 w-[80%] !py-3 !rounded-full !border-1 !border-white",
          },
          showCancelButton: true,
        }).then((result) => {
          resolve(result.isConfirmed);
        });
      });
    };
  }
}
