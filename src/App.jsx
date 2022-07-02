import './App.css'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Diário de Campo da Reprograma</h1>
      </header>

      <main>
        <div className='Github'>
          <h2>😺 Github</h2>
          <p>Aprender Git e Github foi um ótimo começo, pois consegui entender muito bem. Aprendemos a utilizar o terminal Git Bash e o terminal do VS Code, podendo subir os projetos individuais, a compartilhar o mesmo projeto com várias pessoas e commitando pedaços de códigos com o cuidado para não chocarem entre si. Com certeza saber o idioma inglês facilitou na leitura dos erros e assim podemos corrigir com facilidade.</p>
        </div>

        <div className='HTML'>
          <h2>💀 HTML</h2>
          <p>HTML é muito tranquilo. Já tinha estudado antes e essa parte estrutural é a mais simples e básica. Aprender sobre a hierarquia das tags foi uito importante para facilitar a construção do código também.</p>
        </div>

        <div className='CSS'>
          <h2>💅 CSS</h2>
          <p>A minha parte favorita até agora. Estudar sobre estilização do código tem sido muito divertido para mim. Existem muitos componentes a serem utilizados, é uma bibliotea infinita e toda vez que aprendo um novo, fico muito feliz. Sem dúvidas a melhor parte até então, apesar de um pouco desafiador fazer repsonsividade depois do projeto desktop.</p>
        </div>

        <div className='JavaScript'>
          <h2>🧠 JavaScript</h2>
          <p>Aprender a linguagem de programação JavaScript com certeza não é tão fácil, principalmente tendo que pegar em poucas semanas. Mesmo já tendo estudando raciocínio lógico e lógica de programação, aqui tem sido minha maior dificuldade, principalmente na sintaxe e uso de alguns métodos. Porém venho praticando e tentando entender mais. O DOM e a API pelo JavaScript também estão sendo um desafio.</p>
        </div>

        <div className='React'>
          <h2>⚛️ React</h2>
          <p>O framework React tem sido uma luz no fim do túnel. O React veio para facilitar os códigos e tem sido muito prático. Tenho me apaixonado cada vez mais e voltado a me motivar a estudar e a não desistir!</p>
        </div>
      </main>
      <p>
        <a
          className="App-link"
          href="https://github.com/MarianaOrico"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        {' | '}
        <a
          className="App-link"
          href="https://www.linkedin.com/in/marianaorico/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>

      <footer>Semana 12 - Projeto de Introdução ao React</footer>
    </div >
  )
}

export default App
