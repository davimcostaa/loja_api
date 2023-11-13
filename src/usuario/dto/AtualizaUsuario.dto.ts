import { IsString, IsEmail, MinLength, IsNotEmpty, IsOptional } from "class-validator";
import { EmailEhUnico } from "../validacao/email_unico.validator";

export class AtualizaUsuarioDTO {

    @IsNotEmpty({ message: 'O nome não pode ser vazio' })
    @IsOptional()
    nome: string;

    @EmailEhUnico({message: 'Já existe um usuário com o e-mail informado'})
    @IsEmail(undefined, {message: 'O email informado é inválido'})
    @IsOptional()
    email: string;

    @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
    @IsOptional()
    senha: string;

}