import React, { useState } from 'react';
import UserInstructions from '../UserInstructions';
import './index.css'

const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const UserRegistration = ({ onStartGame }) => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [mobile, setMobile] = useState('');
  const [read,setRead] = useState(false)
  const [difficulty, setDifficulty] = useState('');
  const [isTrue,setIsTrue] = useState(false)
  const [error, setError] = useState({eName:false,eEmail:false,eMobile:false,eDif:false,eRead:false})

  const handleStartGame = (e) => {
    e.preventDefault()
   
    if (name && mail && mobile && difficulty && read) {
      onStartGame({ name, mail, mobile, difficulty,read });
    } else {
      const errormessage = {eName : name? false : true,
      eEmail: mail? false : true ,
      eMobile: mobile? false : true,
      eDif: difficulty ? false : true,
      eRead: read ? false : true
      }

      setError({...error,...errormessage})
    }
  };

  const closeWindow = (data)=>{
      setIsTrue(data)
  }

  const validateMail = pattern.test(mail)

  return (
    <div className="registration-form">
      <h2 className='heading-forms'>Registration For Game</h2>
      <form onSubmit={handleStartGame} className='form-container'>
      <h2 className='heading-form'>User Registration</h2>
        <div className='name-card'>
          <label htmlFor='name' className='name-label'>Name:<span className='re'>*</span> </label>
            <input
            id='name'
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={(e)=> setError({...error, eName: e.target.value ? false: true})}
          />
          {error.eName && <p className='er'>Please enter name</p>}
        </div>
      
      <div className='mail-card'>
      <label htmlFor='mail' className='mail-label'>Email:<span className='re'>*</span> </label>
          <input
          id='mail'
            type="email"
            placeholder="Email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            onBlur={(e)=> setError({...error, eEmail: e.target.value && validateMail ? false: true})}
          />
          {error.eEmail && <p className='er'>Invalid Email OR Field Empty</p>}
      </div>
      
      <div className='phone-card'>
      <label htmlFor='phone' className='phone-label'>Phone:<span className='re'>*</span> </label>
          <input
          id='phone'
            type="tel"
            placeholder="Mobile Number"
            pattern='[0-9]{10}'
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            onBlur={(e)=> setError({...error, eMobile: e.target.value ? false: true})}
          />
          {error.eMobile && <p className='er'>Please enter mobile number</p>}
      </div>

      <div className='dif-card'>
      <label htmlFor='level' className='dif-label'>Difficulty:<span className='re'>*</span> </label>
          <select id='level' onChange={(e) => setDifficulty(e.target.value)} onBlur={(e)=> setError({...error, eDif: e.target.value ? false: true})}>
            <option value="">Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          {error.eDif && <p className='er'>Please enter Difficulty level</p>}
      </div>
      <div className='read-card'>
        <div className='read-in'>
          <input
          id='read'
            type="checkbox"
            value={read}
            onChange={(e) =>{setRead(e.target.checked)
            setIsTrue(!isTrue)}}
          /> 
          <label htmlFor='read' className='read-label'>Read Me!<span className='re'>*</span> </label></div>
          {error.eRead && <p className='er'>Please read it</p>}
          <p className='require'>*Required</p>
      </div>
      <button type='submit' className='btn-start'>Start Game</button>
      </form>
      <div className="instra">
      {isTrue && <UserInstructions  closeWindow={closeWindow} />}
      </div>
      
    </div>
  );
};

export default UserRegistration;
