import express from "express";
import Livrocontroller from "../controllers/livrosController.js";

const router = express.Router();

router
    .get ('/livros', Livrocontroller.listarLivros)
    .get('/livros/busca', Livrocontroller.listaLivroPorEditora)
    .get ('livros/:id', Livrocontroller.listarLivroPorId)
    .post ('/livros', Livrocontroller.cadastrarLivro)
    .put('livros/:id', Livrocontroller.atualizarLivro)
    .delete('/livros/:id', Livrocontroller.excluirLivro)

    export default router;