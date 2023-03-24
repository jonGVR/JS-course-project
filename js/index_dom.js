import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import countdown from "./dom/cuenta-atras.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkMode from "./dom/dark_mode.js";
// import responsiveMedia from "./dom/responsive.js";
import responsiveTester from "./dom/responsive_test.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilter from "./dom/filtro_busqueda.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/slider.js";
import scrollSpy from "./dom/scroll_spy.js";
import smartVideo from "./dom/smart_video.js";
import contactFormValidations from "./dom/validaciones_form.js";
import speechReader from "./dom/narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("../assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "September 10, 2023 17:00:00", "Comienza la bikoSchool");
    scrollTopButton(".scroll-top-btn");
    // responsiveMedia("youtube", "(min-width: 1024px)", "Contenido movil", "Contenido escritorio");
    // responsiveMedia("gmaps", "(min-width: 1024px)", "Contenido movil", "Contenido escritorio");
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilter(".card-filter", ".card");
    draw("#winner-btn", ".player");
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidations();
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})

darkMode(".dark-mode-btn", "dark-mode");
networkStatus();
speechReader();