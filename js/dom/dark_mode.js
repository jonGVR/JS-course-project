const d = document,
      ls = localStorage;

export default function darkMode(btn, classDark) {
    const $modeBtn = d.querySelector(btn),
          $selectors = d.querySelectorAll("[data-dark]");

    let moon = "🌙",
        light = "💡";

    const modoClaro = () => {
        $selectors.forEach(el => el.classList.remove(classDark));
        $modeBtn.textContent = moon;
        ls.setItem("mode", "light");
    }
    const modoOscuro = () => {
        $selectors.forEach(el => el.classList.add(classDark));
        $modeBtn.textContent = light;
        ls.setItem("mode", "dark");
    }

    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            if ($modeBtn.textContent === moon) {
                modoOscuro();
            } else {
                modoClaro();
            }
        }
    })

    d.addEventListener("DOMContentLoaded", (e) => {
        if (ls.getItem("mode") === null) ls.setItem("mode", "light");

        if (ls.getItem("mode") === "light") modoClaro();

        if (ls.getItem("mode") === "dark") modoOscuro();
    })
}