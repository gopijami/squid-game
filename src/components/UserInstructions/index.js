
import './index.css'

const UserInstructions = (props)=>{
    const {closeWindow} = props

    const onClosePopup = ()=>{
        closeWindow(false)
    }

    return(
        <div className='popup-container'>
            <div>
            <h1 className='main-heading'>GAME INSTRUCTIONS TO USER</h1>
            <hr className='hr' />
            </div>
            
           <p className='para'>Here are the step-by-step instructions for the player to understand how to play the Green Light Red Light game:</p>
           <h3 className='headings'>Objective:</h3>
           <p className='para'>  Your goal is to click on the green box a specific number of times within a given time frame to win the game.</p>
           <h3 className='headings'>Difficulty Levels:</h3>
           <dl className='para'>
            <dt>Easy:</dt>
            <dd> Click the green box 10 times within 40 seconds.</dd>
            <dt>Medium: </dt>
            <dd> Click the green box 15 times within 40 seconds.</dd>
            <dt>Hard:</dt>
            <dd> Click the green box 25 times within 40 seconds.</dd>
           </dl>

           <h2 className='game-play-head'>GAME PLAY</h2>
           <hr className='hr-game' />

           <h3 className='headings'>User Registration:</h3>
           <dl className='para'>
            <dt>Before starting the game, you need to provide your details</dt>
            <dd>Name</dd>
            <dd>Email</dd>
            <dd>Mobile Number</dd>
            <dd>Select a difficulty level (Easy, Medium, or Hard).</dd>
           </dl>

           <h3 className='headings'>Start Game:</h3>
           <p className='para'>   After providing your details, press the "Start Game" button to begin.</p>

           <h3 className='headings'>Game Display:</h3>
           <p className='para'>   Once the game starts, you will see a box that changes color randomly between green and red.</p>

           <h3 className='headings'>Clicking the Box:</h3>
           <p className='para'>   Your objective is to click on the green box as many times as required for your chosen difficulty level.</p>
           <p className='para'>The box will change color no sooner than 1 second and no later than 2 seconds.</p>

           <h3 className='headings'>Game Over Conditions:</h3>
           <ul className='para'>
            <li>If you click on the red box, the game ends immediately, and you lose.</li>
            <li>If you do not reach the required number of clicks (n) on the green box within the given time (y seconds), the game ends, and you lose.</li>
           </ul>

           <h3 className='headings'>Winning the Game:</h3>
           <ul className='para'>
            <li>If you successfully click on the green box the required number of times (n) within the time limit (y seconds), you win!</li>
            <li>You will see a "You win!" message displayed on the screen.</li>
           </ul>

            <h3 className='headings'>Note</h3>
            <ul className='para'>
            <li>
Pay attention to the changing colors of the box and time your clicks.
</li>
<li>Good luck, and have fun playing the Green Light Red Light game!</li></ul>

        <button type='button' onClick={onClosePopup} className='btn-close' >lose</button>
        </div>
    )
}

export default UserInstructions