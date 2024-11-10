
import {
    obtenerSuperheroePorid,
    obtenerTodoslosSuperheroes,
    buscarSuperheroesPorAtributo,
    obtenerSuperheroesMayoresDe30
} from '../services/superheroesService.mjs';

import {
    renderizarSuperheroe,
    renderizarListaSuperheroes
} from '../views/responseView.mjs';

export async function obtenerSuperheroePoridController(req, res) {
    const { id } = req.params;
    try {
        const superheroe = await obtenerSuperheroePorid(id);
        if (superheroe) {
            res.send(renderizarSuperheroe(superheroe));
        } else {
            res.status(404).send({ mensaje: "Superhéroe no encontrado" });
        }
    } catch (error) {
        res.status(400).send({ mensaje: "Error al buscar el superhéroe" });
    }
}

export async function obtenerTodoslosSuperheroesController(req, res) {
    try {
        const superheroes = await obtenerTodoslosSuperheroes();
        res.send(renderizarListaSuperheroes(superheroes));
    } catch (error) {
        res.status(400).send({ mensaje: "Error al obtener los superhéroes" });
    }
}

export async function buscarSuperheroesPorAtributoController(req, res) {
    const { atributo, valor } = req.params;
    try {
        const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);
        if (superheroes.length > 0) {
            res.send(renderizarListaSuperheroes(superheroes));
        } else {
            res.status(404).send({ mensaje: "No se encontraron superhéroes con ese atributo" });
        }
    } catch (error) {
        res.status(400).send({ mensaje: "Error al buscar los superhéroes" });
    }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
    try {
        const superheroes = await obtenerSuperheroesMayoresDe30();
        res.send(renderizarListaSuperheroes(superheroes));
    } catch (error) {
        res.status(400).send({ mensaje: "Error al obtener los superhéroes mayores de 30" });
    }
}
