import '../scss/content.scss';

function Content(){
    return(
        <div className='container-content'>
        
            <div>
                <div className='text-content'>
                    <h2>Quem somos</h2>
                    <p>Somos uma plataforma dedicada a fechar a lacuna entre pessoas com deficiência e empresas que priorizam a inclusão. Nossa missão é garantir que cada talento tenha uma chance justa no mercado de trabalho.</p>
                    <p>Acreditamos que a diversidade é a chave para a inovação!</p>
                </div>
            </div>

            <div className='img-somos'>
                <img src='src\assets\quem_somos.png' height={400} width={500}></img>
            </div>

        </div>
    )
}

export default Content;
