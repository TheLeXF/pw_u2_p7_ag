const frases = [
    { frase: 'El que madruga dios le ayuda', autor: 'Pepito Perez' },
    { frase: 'En casa de Herrero Cuchillo de palo', autor: 'Juan Palomino' },
    { frase: 'Guerra Avisada no mata gente', autor: 'Alexis Guanoluisa' },
    { frase: 'Mas vale pajaro en mano que ciento volando', autor: 'Ramiro Guevara' },
    { frase: 'No escupas al aire por que te puede volver', autor: 'Santiago Guanoluisa' },
    { frase: 'A caballo regalado no se le mira los dientes', autor: 'Silvia Espin' },
    { frase: 'El que mucho abarca poco aprieta', autor: 'Diego Guanoluisa' },

]

const app = Vue.createApp({

    methods: {
        agregarFrase() {
            console.log(this.frase);
            console.log(this.autor);
            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor
            }

            this.listafrases.unshift(nuevaFrase);
        },

        agregarFraseFinal() {
            console.log(this.frase);
            console.log(this.autor);
            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor
            }

            this.listafrases.push(nuevaFrase);
        },
        eventoKeypress({ charCode, cancelable, key, keyCode, target }) {
            /* if (event.keyCode === 13) {
                 console.log('Evento');
                 console.log(event);
             }*/
            if (keyCode === 13) {
                console.log('Evento');
                console.log(charCode);
                console.log(cancelable);
                console.log(key);
                console.log(keyCode);
                console.log(target.baseURI);
                this.agregarFraseFinal();
            }

        },

        eventoKeyPressModificador() {
                console.log('Evento');
                this.agregarFraseFinal();
        }
 

    },
    data() {
        return {
            listafrases: frases,
            frase: null,
            //autor:'sin autor'
            autor: null
        }
    }
})

app.mount('#myApp')