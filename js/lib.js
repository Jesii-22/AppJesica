const Storage = {

    cargar: key => {

        try {

            return JSON.parse(localStorage.getItem(key));

        } catch (x) {

            console.error("No se pudo leer el item" + key + ". Error: " + x);

            return null;
        }
    },

    guardar: (key, obj) => {

        localStorage.setItem(key, JSON.stringify(obj)) //stringify: te convierte un objeto en string
    },

    borrar: key => {

        localStorage.removeItem(key);
    },

    limpiar: () => {

        localStorage.clear();
    }
}

const utils = {

    validarCamposDeTexto : (campos, longMin, funcValidacion) => {

    for (const campo of campos){

        const el = document.getElementById(campo);

        const valor = el.value;

        if (valor. length < longMin || !funcValidacion(campo, valor)) {
           
                el.classList.add ("notValid");

                el.focus();

            return false;

            } else {

                el.classList.remove("notValid");
            }
        }

        return true;
    }
}