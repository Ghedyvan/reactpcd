import '../scss/index.scss';
import '../scss/patterns.scss';

function Header(){
    return(
        <header>
        <div className='buttons'>
          <div className='flex gap-20 logo'>
            <img src='src\assets\logo.png' height={40} width={40} style={{ borderRadius: '15%' }}></img>
            <p>AccessAble</p>
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