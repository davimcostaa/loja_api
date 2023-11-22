import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { v4 as uuid} from 'uuid'
import { ListaUsuarioDTO } from "./dto/ListaUsuario.dto";
import { AtualizaUsuarioDTO } from "./dto/AtualizaUsuario.dto";
import { UsuarioService } from "./usuario.service";

@Controller('/usuarios')
export class UsuarioController {

    constructor(
        private usuarioRepository: UsuarioRepository,
        private usuarioService: UsuarioService
    ) {}

    @Post()
    async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
        const usuarioEntity = new UsuarioEntity()
        usuarioEntity.email = dadosDoUsuario.email
        usuarioEntity.senha = dadosDoUsuario.senha
        usuarioEntity.nome = dadosDoUsuario.nome
        usuarioEntity.id = uuid()

        this.usuarioService.criaUsuario(usuarioEntity)
        return { usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome), messagem: 'Usuário criado com sucesso' }
    }

    @Get()
    async listaUsuarios() {
        const usuariosSalvos = await this.usuarioService.listaUsuarios()
        return usuariosSalvos
    }

    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AtualizaUsuarioDTO) {
        const usuarioAtualizado = await this.usuarioService.atualizaUsuario(id, novosDados)

        return {
            usuario: usuarioAtualizado,
            messagem: 'Usuário atualizado com sucesso.'
        }
    }

    @Delete('/:id')
    async removeUsuario(@Param('id') id: string) {
        const usuarioRemovido = await this.usuarioService.deletaUsuario(id)

        return {
            usuario: usuarioRemovido,
            messagem: 'Usuário removido com sucesso'
        }
    }
}