import express from 'express';
import {
    obtenerSuperheroePoridController,
    obtenerTodoslosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller
} from '../controllers/superheroesController.mjs';

const router = express.Router();

router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.get('/heroes', obtenerTodoslosSuperheroesController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/:id', obtenerSuperheroePoridController);

export default router;