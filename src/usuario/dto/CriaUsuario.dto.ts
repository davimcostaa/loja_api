import { IsString, IsEmail, MinLength, IsNotEmpty } from "class-validator";
import { EmailEhUnico } from "../validacao/email_unico.validator";

export class CriaUsuarioDTO {

    @IsNotEmpty({ message: 'O nome não pode ser vazio' })
    nome: string;

    @EmailEhUnico({message: 'Já existe um usuário com o e-mail informado'})
    @IsEmail(undefined, {message: 'O email informado é inválido'})
    email: string;

    @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
    senha: string;

}