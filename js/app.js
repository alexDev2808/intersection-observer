const imagen1 = document.querySelector('#imagen1');
const imagen2 = document.querySelector('#imagen2');

// entradas son los elementos que se estan vigilando
const cargarImagen = (entradas, observador) => {
    // Se ejecuta la primera vez, cuando la imagen se carga y tambien cuando sale
    // console.log('Imagen Cargada!');

    entradas.forEach((entrada) => {
        if(entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        }else {
            entrada.target.classList.remove('visible');
        }
    })
    
}

const observador = new IntersectionObserver(cargarImagen, {
    root: null, // La mayoria de veces es null
    rootMargin: '0px 0px 0px 0px', // es para agregar margenes al viewport
    threshold: 0.5 // es el indicador donde debe cargar la funcion
});

observador.observe(imagen1); // Comenzamos a vigilar las imagenes
observador.observe(imagen2);