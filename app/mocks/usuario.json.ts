import { Usuario } from '../../core/models/Usuario';

export const USER: Usuario[] = [
  {
    id: 1,
    login: 'Perfil1',
    apellidos: 'Castillo',
    nombre: 'Andres',
    dni: '3253',
    categoria: { id: 1, nombre: 'Categoria1', descr: 'Descr1' },
    empresa: { id: 1, nombre: 'Empresa3' }
  }
];
