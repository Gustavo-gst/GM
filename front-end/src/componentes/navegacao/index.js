import Link from '../compartilhados/link'
import Input from '../compartilhados/input'
import './estilos.css'

const Navegacao = (props) => {
   return (
      <header>
         <div className="nav-container">
            <h1 className="titulo">GM_Perfumes</h1>
            <form className='buscando'>
               <Input placeholder='O que você está buscando...'
                      tamanho="input-l-100" 
                      id="pesquisa"
                      nome="query"
                      estilo="leve"/>
               <button><i className="fa fa-search"></i></button>
            </form>
            <nav>
               <ul>
                  <img src='https://thumbs.dreamstime.com/b/%C3%ADcone-do-vetor-da-casa-ilustra%C3%A7%C3%A3o-home-preto-e-branco-%C3%ADcone-linear-da-casa-do-esbo%C3%A7o-para-aplica%C3%A7%C3%B5es-m%C3%B3veis-93075065.jpg' className='imagem-icone'/>
                  <li><Link link="" texto="Home"/></li>
                  <img src='https://media.istockphoto.com/id/1444083145/pt/vetorial/question-mark-outline-style-icon.jpg?s=1024x1024&w=is&k=20&c=4T_aDUtMu6Ks-kFmoycSUDIYcW2hBEwv5K1zd9eyItE=' className='imagem-icone'/>
                  <li><Link link="" texto="Sobre"/></li>
                  <img src='https://img.freepik.com/vetores-premium/icone-de-avatar-masculino-pessoa-desconhecida-ou-anonima-icone-de-perfil-de-avatar-padrao-usuario-de-midia-social-homem-de-negocios-silhueta-de-perfil-de-homem-isolada-no-fundo-branco-ilustracao-vetorial_735449-120.jpg?w=740' className='imagem-icone'/>
                  <li><Link link="" texto="Perfil"/></li>
               </ul>
            </nav>
            <nav className='nav-secundario'>
               <ul>
                  <li><Link link="" texto="Nacionais" estilo="leve"/></li>
                  <li><Link link="" texto="Contratipos" estilo="leve"/></li>
                  <li><Link link="" texto="Importados" estilo="leve"/></li>
                  <li><Link link="" texto="Nicho" estilo="leve"/></li>
               </ul>
         </nav>
         </div>
      </header>

   )
}

export default Navegacao