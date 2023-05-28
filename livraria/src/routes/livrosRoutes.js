import express from "express";
import LivrosController from "../controllers/livrosController.js";

const router = express.Router();

router.get("/livros", LivrosController.listarLivros);
router.get("/livros/busca", LivrosController.listarLivroPorEditora);
router.get("/livros/:id", LivrosController.listarLivroPorId);
router.post("/livros", LivrosController.cadastrarLivro);
router.put("/livros/:id", LivrosController.atualizarLivro);
router.delete("/livros/:id", LivrosController.excluirLivro);

export default router;
