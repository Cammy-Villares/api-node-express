import express from "express";
import Autorcontroller from "../controllers/autoresController.js";

const router = express.Router();

router
    .get ('/autores', Autorcontroller.listarAutores)
    .get ('autores/:id', Autorcontroller.listarAutorPorId)
    .post ('/autores', Autorcontroller.cadastrarAutor)
    .put('autores/:id', Autorcontroller.atualizarAutor)
    .delete('/autores/:id', Autorcontroller.excluirAutor)

    export default router;