import { Father } from './Father';
import { Role } from './Role';

export class Usuario extends Father {
    
    login: string;
    pass:string;

    role:Role;
  }