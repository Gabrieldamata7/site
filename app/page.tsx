'use client'; // Indica que este componente é do lado do cliente

import { useState } from 'react';

export default function MeuComponente() {
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setShowContent(!showContent); // Alterna entre mostrar e esconder o conteúdo extra
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Você Está Prestes a Descobrir Como a <span style={styles.highlight}>Inteligência Artificial</span> Pode Transformar Seu Mundo! 🚀
      </h1>

      <div style={styles.scrollContent}>
        <div style={styles.cloud}>
          <h2 style={styles.cloudTitle}><span style={styles.highlight}>💰 Ganhe Mais</span> com IA</h2>
          <p style={styles.cloudText}>
            Transforme a maneira como você trabalha. Automatize tarefas repetitivas e aumente sua produtividade, tudo com a ajuda da <span style={styles.highlight}>Inteligência Artificial</span>. Você sabia que pode ganhar mais tempo e mais dinheiro ao usar as ferramentas certas? Comece agora!
          </p>
        </div>

        <div style={styles.cloud}>
          <h2 style={styles.cloudTitle}><span style={styles.highlight}>📚 Estude</span> de Forma Inteligente</h2>
          <p style={styles.cloudText}>
            Estudar nunca foi tão fácil! A IA adapta o conteúdo ao seu estilo de aprendizado, acelerando o processo e garantindo que você retenha mais. Chega de perder tempo com métodos ineficientes. 
          </p>
        </div>

        <div style={styles.cloud}>
          <h2 style={styles.cloudTitle}><span style={styles.highlight}>🎯 Se Destaque</span> no Mercado</h2>
          <p style={styles.cloudText}>
            As profissões do futuro exigem o uso de <span style={styles.highlight}>Inteligência Artificial</span>. Se você não aprender a usar a IA, vai ficar para trás. Invista agora para ser um líder na sua área!
          </p>
        </div>

        <div style={styles.cloud}>
          <h2 style={styles.cloudTitle}>🚫 Evite <span style={styles.highlight}>Erros Comuns</span></h2>
          <p style={styles.cloudText}>
            Muitas pessoas tentam usar a IA sem entender como ela funciona de verdade. Nós vamos te ensinar como evitar os erros mais comuns e aproveitar o máximo das ferramentas de IA.
          </p>
        </div>

        <div style={styles.cloud}>
          <h2 style={styles.cloudTitle}><span style={styles.highlight}>🔍 Como a IA</span> Está Moldando o Futuro</h2>
          <p style={styles.cloudText}>
            O mundo está mudando, e a <span style={styles.highlight}>Inteligência Artificial</span> é a força que está moldando o futuro. Não fique para trás – aprenda a usar a IA para melhorar sua vida profissional e pessoal.
          </p>
        </div>

        <button style={styles.button} onClick={handleClick}>
          {showContent ? 'Ver Menos' : 'Saiba Mais'}
        </button>

        {showContent && (
          <div style={styles.extraContent}>
            <p style={styles.extraText}>
              As ferramentas de IA podem te ajudar a ganhar dinheiro, aumentar sua produtividade e acelerar seus estudos. Ao aprender a usá-las corretamente, você se torna um <span style={styles.highlight}>diferencial</span> no mercado de trabalho.
            </p>
            <p style={styles.extraText}>
              Não perca a chance de se destacar. O futuro está nas suas mãos – <span style={styles.highlight}>não espere mais</span>!
            </p>
          </div>
        )}
      </div>

      {/* Botão de Redirecionamento para a página de pagamento */}
      <a href="https://pay.kiwify.com.br/36vnFrK" target="_blank" style={styles.redirectButton}>
        Comprar Agora
      </a>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #1a1a1a, #1e3c77)', // Gradiente de preto para azul
    color: '#ecf0f1', // Texto claro que contrasta bem com o fundo escuro
    padding: '20px',
    textAlign: 'center',
    boxSizing: 'border-box',
    overflowY: 'auto',
    paddingBottom: '50px',
  },
  title: {
    color: '#bdc3c7', // Cor mais escura para o título
    fontSize: '36px',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  highlight: {
    color: '#ecf0f1', // Alterando para branco para não ficar amarelo
    fontWeight: 'bold',
  },
  scrollContent: {
    maxWidth: '900px',
    margin: '0 auto',
    paddingBottom: '40px',
  },
  cloud: {
    backgroundColor: '#34495e',  // Tom de cinza escuro para as "nuvens"
    borderRadius: '15px',
    padding: '20px',
    margin: '20px 0',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s',
  },
  cloudTitle: {
    color: '#ecf0f1', // Mantém o título claro nas "nuvens"
    fontSize: '24px',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  cloudText: {
    color: '#bdc3c7', // Texto em tom escuro mas suave
    fontSize: '18px',
    lineHeight: '1.6',
  },
  button: {
    marginTop: '20px',
    backgroundColor: '#1abc9c',  // Tom verde suave para o botão
    color: '#fff',
    border: 'none',
    padding: '14px 28px',
    fontSize: '18px',
    cursor: 'pointer',
    borderRadius: '8px',
    transition: 'background-color 0.3s',
    fontWeight: 'bold',
    marginBottom: '20px',
    marginRight: '10px',
    display: 'inline-block',
  },
  extraContent: {
    display: 'block',
    marginTop: '20px',
    backgroundColor: '#34495e',
    padding: '20px',
    borderRadius: '5px',
  },
  extraText: {
    color: '#bdc3c7', // Texto extra em tom mais escuro
    fontSize: '18px',
  },
  redirectButton: {
    marginTop: '30px',
    backgroundColor: '#3498db',  // Azul claro para o botão de redirecionamento
    color: '#fff',
    padding: '16px 32px',
    fontSize: '20px',
    fontWeight: 'bold',
    textDecoration: 'none',
    borderRadius: '8px',
    transition: 'background-color 0.3s',
    display: 'inline-block',
  },
};
