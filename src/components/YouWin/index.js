import './index.css'

const YouWin = (props)=>{
    const {score,topScore,gameRestart,name,level} = props

    const startGame = ()=>{
        gameRestart(true)
    }
    return(
        <div className="loos-container">
            <div className="loose-score-container">
                <h2 className='title'>Wowww! {name[0].toUpperCase()+""+name.slice(1,name.length)} Well Play</h2>
                <p className='lp'>You Won</p>
                <p className='lp'>TopScore: {topScore}</p>
                <p className='lp'>Score: {score} / {level}</p>
                <button type="button" className="re-btn" onClick={startGame} >Play Again</button>
            </div>
            <div className="loose-image-container">
                <img src="https://assets.ccbp.in/frontend/react-js/won-game-img.png" className='img1' alt="Wonimage" width="160px" height="200px" />
            </div>
            
        </div>
    )
}

export default YouWin