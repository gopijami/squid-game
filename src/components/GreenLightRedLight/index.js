
import React, { useState, useEffect , memo} from 'react';
import YouLoose from '../YouLoose';
import YouWin from '../YouWin';
import './index.css'

const Arr = ["red","green"]
const redlight = "https://res.cloudinary.com/gopi-enterprises/image/upload/v1694937226/redlight.webp"
const greenlight = "https://res.cloudinary.com/gopi-enterprises/image/upload/v1694937227/greenlight.jpg"

const GreenLightRedLight = ({ userData }) => {
  const [currentColor, setCurrentColor] = useState('red');
  const [score, setScore] = useState(0);
  const [isGameOn, setIsGameOn] = useState(true);
  const [level,setLevel] = useState(0)
  const [topScore, setTopScore] = useState(0)
  const [time,setTime] = useState(45)

  const { difficulty , name, mobile,mail } = userData;

  useEffect(()=>{
    let timer;
      if(time >0 && isGameOn){
        timer = setInterval( ()=>{
          setTime(time-1)
               
           },1000)
      }else{
        setIsGameOn(false)
        if(time <=0){
          setTopScore(score >topScore ? score: topScore)
          setTime(0)
        }
        clearInterval(timer)
      }
       
    return ()=> clearInterval(timer)
  },[time,isGameOn,score,topScore])

  useEffect(() => {
    let interval;

    if (isGameOn) {
      interval = setInterval(() => {
        const arr = Arr.sort(()=> 0.5 - Math.random()*1)
        console.log(arr)
        setCurrentColor(arr[0]);
      }, getRandomInterval());
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isGameOn]);

  const getRandomInterval = () => {
    const minInterval = 1000;
    const maxInterval = 2000;
         
    const num =  Math.floor(
      Math.random() * (maxInterval - minInterval + 1) + minInterval
    );
    console.log(num)
    return num
  };

  const handleClick = () => {
    console.log("clicked")
    if (currentColor === 'green' && isGameOn) {
      setScore(score + 1);
    } else if (isGameOn) {
      setTopScore(score >topScore ? score: topScore)
      setIsGameOn(false);
    }
  };

  useEffect(() => {
    if (score >= getTargetScore(difficulty)) {
      setTopScore(score >topScore ? score: topScore)
      setLevel(getTargetScore())
      setIsGameOn(false);
    }
  }, [score, difficulty,topScore]);

  const getTargetScore = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return 10;
      case 'medium':
        return 15;
      case 'hard':
        return 25;
      default:
        return 0;
    }
  };

  const gameRestart = (start)=>{
    setScore(0)
    setTime(45)
    setIsGameOn(start)
  }

  const bulb = currentColor === "red" ? redlight : greenlight

  return (
    <div className="game-container">
      <nav className='nav-container'>
        <div className='img-card'>
          <img src="https://res.cloudinary.com/gopi-enterprises/image/upload/v1694896977/gamelogo_kscdq8.jpg" alt='Squidgame' className='logo'/>
          <h3 className='gh'>GL & RL</h3>
        </div>
          <ul className='score-container'>
            <li className='li'>Score: {score}</li>
            <li className='li'>TopScore: {topScore}</li>
            <li className='li resp'>Time Left: {time.toString().length <2? `0${time}`: time}</li>
          </ul>
          <div className='profile'>
            <button type='button' className='btn' >{name[0].toUpperCase()}</button>
            <ul className='profile-container'>
              <li className='liname'><span className='hname'>Name:</span> {name[0].toUpperCase()+""+name.slice(1,name.length)}</li>
              <li className='liname'><span className='hname'>Mobile:</span> <a href={`tel:+91-${mobile}`} className='ac'>{mobile}</a></li>
              <li className='liname'><span className='hname'>Email:</span> <a href={`mailto:${mail}`} className='ac'>{mail}</a></li>
              <li className='liname'><span className='hname'>Difficulty:</span> {difficulty}</li>
            </ul>
          </div>
      </nav>
      <h2 className='game-heading'>Green Light Red Light Game</h2>
      <ul className='score-container resp-time'>
         <li className='li'>Time Left: {time.toString().length <2? `0${time}`: time}</li>
      </ul>
      { isGameOn ? (

<div className='box' onClick={handleClick}> 
<img src={`${bulb}`} className={`box ${currentColor}`} alt='bulb' />
</div>
   ) : score >= getTargetScore(difficulty) ? <YouWin score={score} topScore={topScore} gameRestart={gameRestart} name={name} level={level}/> : <YouLoose score={score} topScore={topScore} gameRestart={gameRestart} name={name} level={level}/>

      }
      
    </div>
  );
};

export default memo(GreenLightRedLight);
