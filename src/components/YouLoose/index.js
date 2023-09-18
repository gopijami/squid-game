
import './index.css'

const YouLoose = (props)=>{
    const {score,topScore,gameRestart,name,level} = props

    const startGame = ()=>{
        gameRestart(true)
    }
    return(
        <div className="loos-container">
            <div className="loose-score-container">
                <h2 className='title'>Oops! {name[0].toUpperCase()+""+name.slice(1,name.length)} Well Try</h2>
                <p className='lp'>You Lost Game</p>
                <p className='lp'>TopScore: {topScore}</p>
                <p className='lp'>Score: {score} / {level}</p>
                <button type="button" className="re-btn" onClick={startGame} >Restart</button>
            </div>
            <div className="loose-image-container">
                <img src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png" className='img1' alt="Lostimage" width="160px" height="200px" />
            </div>
            
        </div>
    )
}

export default YouLoose