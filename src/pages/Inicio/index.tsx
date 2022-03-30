import cardapio from 'data/cardapio.json';
import Item from 'pages/Cardapio/Itens/Item';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/prato';

export default function Inicio() {
  let pratosRecamendados = [...cardapio];
  pratosRecamendados = pratosRecamendados.sort(() => 0.5 - Math.random()).slice(0,3);
  const navegate = useNavigate();
  
  function redirecionarParaDetalhes(prato: Prato) {
    navegate(`/prato/${prato.id}`, {state: { prato }, replace: true});
  }

  return (
    <section>
      <h3 className={stylesTema.titulo}>
        Recomendações da cozinha
      </h3>
      <div className={styles.recomendados}>
        {pratosRecamendados.map(item => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button 
              className={styles.recomendado__botao} 
              onClick={() => redirecionarParaDetalhes(item) }
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}> Nossa Casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Casa do aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua Vargueiro, 3185 <br /> <br /> Vila Mariana  - SP
        </div>
      </div>
    </section>
  );
}