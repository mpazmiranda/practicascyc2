var frutas = ["Kiwi", "Pera", "Durazno","Banana"];

function Longitud(frutas) {
    if (frutas.length % 2 == 0) {
        console.log("La longitud es par");
    } else {
        console.log("La longitud es impar");
    }
}

Longitud(frutas); 

/*No me queda claro si la longitud en este caso es 3 o 4. No se si corresponde usar o no el -1 despues de length*/