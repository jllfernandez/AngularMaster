import { Father } from './Father';
import { Capability } from './Capability';

export class Role extends Father {
    
    code: string;
    descr:string;

    capabilityes:Capability[];
  }