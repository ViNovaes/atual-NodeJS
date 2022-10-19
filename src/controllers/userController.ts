import {Request, Response} from 'express'

export const login = ((req:Request, res:Response) =>{

    let email:string = req.body.email as string
    let senha:string = req.body.senha as string

    res.render('pages/login',{
        email,
        senha
    })
}) 


export const idade = ((req:Request, res:Response) =>{

    let nome: string = 'Caio'
    let idade: number = 15
    let mostrarIdade: boolean = false
    
    if(idade > 18){
        mostrarIdade = true
    }else{
        mostrarIdade = false
    }

    res.render('idade',{
        nome,
        idade,
        mostrarIdade
    })
}) 


export const formulario = ((req:Request, res:Response) =>{
    let nome:string = req.query.nome as string
    let idade:number = req.query.idade as unknown as number
    let telefone:number = req.query.telefone as unknown as number
    let bairro:string = req.query.bairro as string
    
    res.render('pages/formulario',{
        nome,
        idade,
        telefone,
        bairro
    })
}) 

//rota de 'nome'. Configurando para aparecer o nome que for colocado no input
export const nome = ((req:Request, res:Response) =>{
    let nome:string = req.query.nome as string

    res.render('pages/nome',{
        nome
    })
}) 

//rota de soma. Feito para funcionar a conta de soma usando o ano de nascimento
export const soma = ((req:Request, res:Response) =>{
    res.render('pages/soma')
})

export const somaResultado = ((req:Request, res:Response) =>{
    let mostrarIdade: boolean = false
    let idade: number = 0
    
    if (req.body.anoNasci){
        let anoNasci:number = parseInt(req.body.anoNasci as string) 
        let anoAtual:number = new Date().getFullYear()
        idade = anoAtual - anoNasci
        mostrarIdade = true
}
    res.render('pages/soma',{
        mostrarIdade,
        idade
    })
}) 

//Fazendo a pagina de login funcionar sem aparecer a senha ou o email na barra de pesquisa
// router.get('/login',(req:Request, res:Response) =>{
//     res.render('pages/login')

// })

// router.post('/login-resultado',(req:Request, res:Response) =>{
//     let email:string = req.body.email as string
//     let senha:string = req.body.senha as string

//     res.render('pages/login',{
//         email,
//         senha
//     })
// })


