import { createApp } from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { useToast } from "vue-toastification";
import VueDndZone from 'vue-dnd-zone'
import 'vue-dnd-zone/vue-dnd-zone.css'

const toast = useToast();
const options = {
    shareAppContext: false,
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true,
    position: "top-right",
    timeout: 5000,
    closeOnOutsideClick: true,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: true,
};


window.createApp = createApp;
window.Toast = Toast;
window.toast = toast;
window.ToastOptions = options;
window.VueDndZone = VueDndZone;
window.ToastInfo = function ToastInfo(text) {
    toast.info(text);
}
window.ToastSuccess = function ToastSuccess(text) {
    toast.success(text);
}
window.ToastError = function ToastError(text) {
    toast.error(text);
}