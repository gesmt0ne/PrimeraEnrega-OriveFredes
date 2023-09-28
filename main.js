function calcularCostoTotal() {
    
    let costoTotal = 0;

    const cantidadDeProductos = parseInt(prompt("¿Cuantos productos deseas calcular?"));

    if (isNaN(cantidadDeProductos) || cantidadDeProductos <= 0) {
        alert("Por favor ingrese una cantidad valida de productos.");
        return;
    }

    for (let i = 1; i <= cantidadDeProductos; i++) {
        const precioProducto = parseFloat(prompt(`Ingrese el precio del produto ${i}`));

        if (isNaN(precioProducto) || precioProducto <= 0) {
            alert(`El precio ingresado para el producto ${i} no es valido. Intentelo de nuevo.`);
            return;
        }

        costoTotal += precioProducto;
    }

    alert(`El costo total de los productos es: ${costoTotal.toFixed(2)}`);

}

calcularCostoTotal();

