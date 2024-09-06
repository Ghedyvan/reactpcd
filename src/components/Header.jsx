import '../scss/index.scss';
import '../scss/patterns.scss';

function Header(){
    return(
        <header>
        <div className='buttons'>
          <div className='flex gap-20 logo'>
            <img src='src\assets\temp.png' height={40} width={40}></img>
            <p>EmpregaPCD</p>
          </div>
          <p>Sobre nós</p>
          <p>Serviços</p>
        </div>
        <div className='login-group'>
          <button className='cadastro'>Cadastre-se</button>
          <button className='entrar'>Entrar</button>
        </div>
      </header>
    )
}

export default Header