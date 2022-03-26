import { TipoDocumento } from "src/app/core/models/TipoDocumento";
import { User } from "../../users/models/user";
export interface Internado {
    IdInternado:number;
    TipoDocumento: TipoDocumento;
    NumeroDocumento: string;
    Nombre: string;
    Apellido: string;
    UsuarioAlta:User    
}
