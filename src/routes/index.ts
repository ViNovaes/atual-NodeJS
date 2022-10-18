import { Router, Request, Response } from "express"

const router = Router()

router.get('/',(req:Request,res:Response) =>{

   let user:string = 'Viviane'

    res.render('home',{
       user,
       produtos:[
        {titulo:'Livro Crepusculo',preco:39},
        {titulo:'Arroz São João', preco: 15},
        {titulo:'Bombril', preco:5},
        {titulo:'Salgadinho Fofura',preco:3}
       ],frases:[
        'A guerra contra as drogas é inutil pois acaba morrendo os dois lados',
        'A Vingança é plena mata alma e envenena',
        'Prefiro morrer do que perder a vida',
        'A vida passa mais rápido do que uma Ferrari na estrada'
       ]

    })
})

// router.get('/login',(req:Request,res:Response) =>{
//     res.render('login',{
//         name:'Fulano',
//         lastName:'Fulaninho',
//         showWelcome:false
//     })
// })

router.get('/idade',(req:Request,res:Response) =>{
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


//ROTA ESTÁTICA
router.get('/contato',(req:Request,res:Response) =>{
    res.send("PAGINA DE CONTATO")
})
//ROTA DINÂMICA
router.get('/noticia/:noticia',(req:Request,res:Response) =>{
    let noticia: string = req.params.noticia
    res.send(`Noticias: ${noticia}`)
})

router.get('/viagens/:origem-:destino',(req:Request,res:Response) =>{
    let origem:string = req.params.origem
    let destino:string = req.params.destino

    res.send(`Procurando trajetos de ${origem} até ${destino}`)
})


//rota de 'nome'. Configurando para aparecer o nome que for colocado no input
router.get('/nome',(req:Request, res:Response) =>{
    let nome:string = req.query.nome as string

    res.render('pages/nome',{
        nome
    })
})



router.get('/formulario',(req:Request, res:Response) =>{
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

//rota de soma. Feito para funcionar a conta de soma usando o ano de nascimento
router.get('/soma',(req:Request, res:Response) =>{
    res.render('pages/soma')

})

router.post('/soma-resultado',(req:Request, res:Response) =>{
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
router.get('/login',(req:Request, res:Response) =>{
    res.render('pages/login')

})

router.post('/login-resultado',(req:Request, res:Response) =>{
    let email:string = req.body.email as string
    let senha:string = req.body.senha as string

    res.render('pages/login',{
        email,
        senha
    })
})

export default router