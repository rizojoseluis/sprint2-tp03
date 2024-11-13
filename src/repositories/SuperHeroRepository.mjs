import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository {
    async obtenerPorid (id) {
        return await SuperHero.findById (id);
    }

    async obtenerTodos(){
        return await SuperHero.find ({});
    }

    async buscarPorAtributo (atributo, valor ) {
        const query = { [atributo ]: new RegExp (valor, 'i' ) };
        return await SuperHero.find (query);
    }

    async obtenerMayoresDe30() { 
        return await SuperHero.find({ edad: { $gt: 30 }, 
            planetaOrigen: 'Tierra', 
            $and: [             
                { poderes: { $exists: true, $type: "array" } }, // Verifica que "poderes" sea un arreglo
                                   { $expr: { $gte: [{ $size: "$poderes" }, 2] } } // Condición de tamaño mínimo
               ]
            /* poderes: { $size: 2 } */
         })} 
}

export default new SuperHeroRepository();