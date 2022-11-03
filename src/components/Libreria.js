import {randProduct} from "@ngneat/falso"



	let listaProductos = []

	for (let i = 0; i < 12; i++) {
		listaProductos.push(randProduct())
	}

	let cargaProductos = (motivo, tiempo = 1500) => {
		return 	new Promise ((res, rej) => {
			setTimeout(() => {
				res(motivo)
			}, tiempo)
		})
	}
	


export const obtenerProductos = () => cargaProductos(listaProductos)
	
export const productoPorCategoria = (id) => cargaProductos(listaProductos.filter(item=>item.category == id))

export const productoPorId = (id) => cargaProductos(listaProductos.filter(item=>item.id === id))


export default {
	obtenerProductos, 
	productoPorCategoria,
	productoPorId 
}