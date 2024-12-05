const frases =[
    {frase:'El que madruga dios le ayuda', autor:'Pepito Perez'},
    {frase:'En casa de Herrero Cuchillo de palo', autor:'Juan Palomino'},
    {frase:'Guerra Avisada no mata gente', autor:'Alexis Guanoluisa'},
    {frase:'Mas vale pajaro en mano que ciento volando', autor:'Ramiro Guevara'},
    {frase:'No escupas al aire por que te puede volver', autor:'Santiago Guanoluisa'},
    {frase:'A caballo regalado no se le mira los dientes', autor:'Silvia Espin'},
    {frase:'El que mucho abarca poco aprieta', autor:'Diego Guanoluisa'},
    
]

const app = Vue.createApp({
    
    methods: {
        
    },
    data() {
        return {
            listafrases:frases
        }
    }
})

app.mount('#myApp')