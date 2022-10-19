type Product = {
    titulo: string,
    preco: number
}


const data = [
//Aqui se colocaria os produtos
]


//pegando tudo do banco de dados 'data' (não coloquei nada é só um teste)
export const Product = {
    getAll: () =>{
        return data
    }
}