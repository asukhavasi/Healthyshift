import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Copyright from '../components/Copyright'


const About = () => {

    const [mode,setMode] = useState('default')
    
    const images = {
        default: './src/assets/Abi3.jpeg',
        hobby: './src/assets/Abi3.jpeg',
        prof: './src/assets/Abi.jpeg'
    }

    const descriptions = {
    default: "Hi, I'm Abilash. Choose between Passion and Profession to learn more about me!",
    hobby: `I’m passionate about functional workouts that build strength, mobility, and real-world endurance. 
            I thrive on staying active and pushing physical limits—whether it’s through high-intensity interval training, core conditioning, or bodyweight circuits. Beyond my own fitness journey, I genuinely enjoy guiding and supporting others in reaching their weight loss and wellness goals. I believe in sustainable fitness, building habits that stick, and celebrating progress over perfection. 
            Outside the gym, I stay energized by hiking scenic trails, experimenting with healthy cooking, and diving into creative projects that challenge both mind and body.`,
    prof: `I am a Business Intelligence professional and full-stack web developer with 
           over 11 years of experience delivering data-driven solutions and web applications. 
           I specialize in Power BI, MicroStrategy, SQL, and data modeling, with expertise in building dashboards, ETL pipelines, and data warehouses. 
           In addition, I develop scalable web apps using React (frontend) and Django (backend), combining strong data skills with user-focused design. 
           My work spans healthcare, insurance, retail, and banking industries. 
           I hold a Master’s in Computer Science and excel at bridging analytics and development to create impactful tools that support smart, efficient decision-making.`
    }

    const [selected, setSelected] = useState(null)

  return (
    <>
    <Navbar />

    <div className="maincontainer">
        

            <div className='profilepic'>
                <div className='pic'>
                    <h1>So, Who am I?</h1>
                    <div className="choose">
                        <button className={`hobby btn ${selected === 'hobby'? 'selected':''}`} onClick={()=> {setMode('hobby');setSelected('hobby')}}>Passion</button>
                        <button  className={`prof btn ${selected === 'prof'?'selected':''}`} onClick={()=> {setMode('prof');setSelected('prof')}}>Profession</button>
                    </div>
                    <img src={images[mode]} alt="Abi.jpg" />
                </div>
                
                <div className="desc">
                  
                    <p>{descriptions[mode]}</p>
                </div>
            </div>
        
    </div>
    <Copyright />
    </>
    
  )
}


export default About