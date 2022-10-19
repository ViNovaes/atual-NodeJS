import { Router, Request, Response } from "express"
import * as homeController from '../controllers/homeController'
import * as userController from '../controllers/userController'

const router = Router()

router.get('/',homeController.home)

router.get('/login',userController.login)

router.get('/idade',userController.idade)

router.get('/formulario',userController.formulario)

router.get('/nome',userController.nome)

router.get('/soma',userController.soma)

router.post('/soma-resultado',userController.somaResultado)

export default router