import Botao from "../Botao/botao";
import Cabecalho from "../Cabecalho/cabecalho";
import Rodape from "../Rodape/rodape";
import "./formulario.css"

export default function Formulario() {
    return (<>
        <Cabecalho />
        <main className="formulario">
            <label htmlFor="input__nome" className="label">Nome</label>
            <input type="text" className="input" id="input__nome" placeholder="Digite seu nome" />

            <label htmlFor="input__email" className="label">Email</label>
            <input type="email" className="input" id="input__email" placeholder="nome@email.com" />

            <label htmlFor="input__tel" className="label">Telefone</label>
            <input type="tel" className="input" id="input__tel" placeholder="(xx) xxxxx-xxxx" />

            <label htmlFor="input__senha" className="label">Senha</label>
            <input type="password" className="input" id="input__senha" placeholder="**********" />

            <label htmlFor="input__senha2" className="label">Confirme a senha</label>
            <input type="password" className="input" id="input__senha2" placeholder="**********" />
            <div className="check">
                <input type="checkbox" id="input__week" />
                <label htmlFor="input__week" id="label">Aceita receber informações no seu Email?</label>
            </div>
            
            <Botao/>
            < Rodape/>

        </main>
    </>
    )
}