import React from 'react'
import './Main_content.css'
import civil_engineer_cap from './img/civil_engineer_cap.png'
import {useState, useEffect} from 'react'
import background_electric from './img/background_electric.png'
import {motion} from 'framer-motion'
import autoCAD_logo from './img_tools/autoCAD_logo.png'
import bluebeam_logo from './img_tools/bluebeam_logo.png'
import revit_logo from './img_tools/revit_logo.png'
import matlab_logo from './img_tools/matlab_logo.png'
import LTspice_logo from './img_tools/LTspice_logo.png'
import c_logo from './img_tools/c_logo.png'
import civil3D_logo from './img_tools/civil3D_logo.png'
import fusion360_logo from './img_tools/fusion360_icon.png'
import git_logo from './img_tools/git_logo.png'
import java_logo from './img_tools/java_logo.png'
import ms_powerpointa_logo from './img_tools/ms_powerpointa_logo.png'

const Main_content = () => {

  

  const [text, setText] = useState("I'm Electrical Engineer");

    useEffect(() => {
      const interval = setInterval(() => {
        setText(prev =>
          prev === "I'm Electrical Engineer"
            ? "I'm Power Supply Specilist"
            : "I'm Electrical Engineer"
        );
      }, 3000);

      return () => clearInterval(interval);
    }, []); 
  
  
  return (
    <div className='full_cointainer'>

      <header>
      
        <a className='way_page' href="#introduce">About Me</a>
        <a className='way_page' href="#projects">Projects</a>
        <a className='way_page' href="#works">Works</a>
        <a className='way_page' href='#contact'>Contact</a>
        
      </header>


    <div  style={{
      backgroundImage: `url(${background_electric})`,
      backgroundSize: 'fill',
      backgroundPosition: 'center',
      backgroundopacity:'0.8',
      }}>

      <div id="introduce" >

        <div className='about_introduce'>
            <motion.p
      key={text} 
      initial={{ opacity: 0  }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="profession"
    >
      {text}
    </motion.p>
          <p className='name'>Kushalta Paudel</p>
          
          <p className='about_me'> 
          Innovative electrical engineer and power supply specialist driven by a passion for efficient, reliable, and sustainable energy solutions. Skilled in designing power systems, lighting, and infrastructure that blend precision with performance. Experienced with industry tools like AutoCAD, Civil 3D, PowerWorld, and MATLAB, and committed to turning complex electrical challenges into practical, future-ready designs.
        </p>

          <div id="contact">
           <div className="left_contact">
             <p><span >Address:</span> Fayetteville, AR</p>
             <p><span>Phone:</span> +1 (409) 665-0818</p>
           </div>
           <div className="right_contact">
             <p><span>E-mail:</span> kushaltapaudel@gmail.com</p>
             <p><span>LinkedIn:</span> Kushaltapaudel</p>
           </div>
       </div>
        </div>

        



        <div className='image_introduction'>
          
          <img  src={civil_engineer_cap} alt="image"></img>
        </div>
        
      </div>



      <div id="short_moto"> 
             
         <p className='moto'>
            "Designing reliable power for a sustainable future."
         </p>
      </div>


      <div className="achievements">
        <button className='achiments_button'>
          <span className='achiments_button1'>4.5+ </span>
          <span className='achiments_button2'>
            years of experience
            </span>
        </button>
        <button className='achiments_button'><span className='achiments_button1'>500+</span> <span className='achiments_button2'>projects completed</span></button>
        <button className='achiments_button'><span className='achiments_button1'>350+</span> <span className='achiments_button2'>satisfied customer</span></button>
      </div>
    
    </div>

      <div className="skills_education_container">
      
      <div className="skills">
        <p className="skills_title">Skills:</p>
        <div className="profession_skill">
          
          <p>Professional Skills:</p>
          
         <ul>
            <li>Power system & circuit design</li>
            <li>Airfield electrical systems (FAA, NEC)</li>
            <li>AutoCAD, Civil 3D, Revit, PowerWorld</li>
            <li>MATLAB, LTspice, Arduino, Verilog, C</li>
            <li>Electrical load & lighting design</li>
            <li>Technical documentation & analysis</li>
         </ul>
        </div>
        
        <div className="soft_skill">
          <p>Soft Skills:</p>
            <ul>
                <li>Problem-solving</li>
                <li>Team collaboration</li>
                <li>Attention to detail</li>
                <li>Leadership & mentoring</li>
                <li>Time management</li>
            </ul>
        </div>

      </div>

       
      <div className="education">
       <p className="edu_title">Education:</p>
        <div className="edu1">
             <p className='edu_bachelor'>Bachelor of Science in Electrical Engineering</p>
             <p className='edu_certificate'>Minor: Applied Mathematics | Certificate: Cyber-Physical Systems - Power Systems</p>
             <div style={{display:"flex",marginBottom:"10px"}}>
             <p className="university_name" >Boise State University, Boise, ID</p>
             <p className='edu_date'>(May 2021)</p>
             </div>
             <p className="edu_description">Focused on power systems, circuit design, and applied mathematics, gaining hands-on experience in research, modeling, and practical engineering projects.</p>
        </div>

              
      </div>
      </div>
       
      <div className="full_project">
        <p className="proj_title">Projects:</p>
        <div id="projects">

            <button className='project'>
              <img className='project_img' src={civil_engineer_cap} alt="project_img" />
              <p className='proj_name'>Battery Health Monitoring System</p>
              
              <p className="proj_description">A year-long capstone project where the team developed a method to monitor battery health using Electrochemical Impedance Spectroscopy (EIS) and generated Nyquist plots. The team also analyzed software tools and environments and implemented C-based programming logic.</p>
              <a href="http://localhost:5173" target="_blank">link</a>
              {/* Tools */}
              <div className='proj_tools'>
                  <button>C</button>
                  <button>EIS</button>
                  <button>MATLAB</button>
                  <button>Microcontroller IDE</button>
                  <button>Test Hardware</button>
              </div>
              
            </button>

            <button className='project'>
              <img className='project_img' src={civil_engineer_cap} alt="project_img" />
              <p className='proj_name'>Five-Bus Power System Load Flow Analysisc</p>
              <link rel="stylesheet" href="" />
              <p className="proj_description">Designed a five-bus power system model to analyze power flow using PowerWorld. The project involved observing line losses, managing generator scheduling, reactive power support, and ensuring operating limits stayed within standards.</p>
              {/* Tools */}
              <div className='proj_tools'>
                  <button>PowerWorld</button>
                  <button>Load Flow Analysis</button>
                  <button>Power System Modeling</button>
              </div>
              
            </button>
    
             <button className='project'>
              <img className='project_img' src={civil_engineer_cap} alt="project_img" />
              <p className='proj_name'>Airfield Power & Lighting System Design</p>
              <link rel="stylesheet" href="" />
              <p className="proj_description">Worked on electrical design projects for airports including airside power systems, lighting layouts, NAVAIDs, and infrastructure improvement designs. Also visited job sites to perform electrical assessments.</p>
              {/* Tools */}
              <div className='proj_tools'>
                 <button>Civil 3D</button>
                 <button>AutoCAD</button>
                 <button>Visual Lighting</button>
                 <button>FAA Standards</button>
                 <button>Bluebeam</button>
              </div>
              
            </button>

             <button className='project'>
              <img className='project_img' src={civil_engineer_cap} alt="project_img" />
              <p className='proj_name'>Low-Voltage Electrical Distribution System Design</p>
              
              <p className="proj_description">Developed LV electrical distribution systems for commercial, institutional, and retail projects. Designed electrical drawings, performed engineering calculations such as energy usage, load estimation, and voltage drop analysis.</p>
              {/* Tools */}
              <div className='proj_tools'>
                  <button>Revit</button>
                  <button>AutoCAD</button>
                  <button>MS Office</button>
                  <button>Load/Energy Calculations</button>
              </div>
            </button>

             <button className='project'>
              <img className='project_img' src={civil_engineer_cap} alt="project_img" />
              <p className='proj_name'>Embedded System Programming on STM32F4</p>
            
              <p className="proj_description">Guided students in programming STM32F4 Discovery boards using Assembly language and C, and used remote servers for debugging and testing microcontroller code.</p>
              {/* Tools */}
              <div className='proj_tools'>
                <button>STM32F4</button>
                <button>C</button>
                <button>Assembly</button>
                <button>Debug Server</button>
                <button>Simulation Tools</button>
              </div>
              
            </button>

             <button className='project'>
              <img className='project_img' src={civil_engineer_cap} alt="project_img" />
              <p className='proj_name'>Semiconductor Characterization and High-Voltage Measurement</p>
             
              <p className="proj_description">Performed semiconductor and dielectric testing using advanced measurement tools. Conducted high-voltage measurements, analyzed electrical performance of materials, and presented findings to research teams.</p>

              {/* Tools */}
              <div className='proj_tools'>
                 <button>LCR Meter</button>
                 <button>MATLAB</button>
                  <button>High-Voltage Supply</button>
              </div> 
            </button>

        </div>
       </div>

       <div className="full_works">
       <p className='work_title'>Works:</p>
      
      <svg height="900" width="100%">
       <line x1="750" y1="0" x2="750" y2="900" style={{stroke:"gray", strokeWidth:"2"}} />
       <circle cx="750" cy="160" r="10" fill="gray" />
       <circle cx="750" cy="405" r="10" fill="gray" />
       <circle cx="750" cy="660" r="10" fill="gray" />
       <circle cx="750" cy="890" r="10" fill="gray" />

        </svg>

       <div id="works">
             
          
          <motion.div 
          className="work" 
          
          animate={{ x: 100,y:-800}}
          style={{textAlign:"left"}}
          
          >
            <div className='work_headline'>
              <p className='work_name'>Garver - Project Engineer</p>
              
            </div>
            
            <ul className='work_description'>
              <li>Designed airfield electrical systems, lighting, and NAVAIDs using Civil 3D.</li>
              <li>Conducted site assessments for airport electrical infrastructure.</li>
              <li>Ensured compliance with FAA and NEC standards.</li>
            </ul>
          </motion.div>

          <motion.p
          animate={{ x: 800,y:-880}}
           className='work_time' >(July 2021 - Present)
          </motion.p>


         

          <motion.div className="work"
            
          animate={{ x: 800,y:-700}}
          style={{textAlign:"left"}}
          >
            <div className='work_headline'>
              <p className='work_name'>Electrical Engineering Intern / EIT-I - CSHQA</p>
              
            </div>
            
            <ul className='work_description'>
              <li>Developed low-voltage distribution systems for commercial and institutional projects.</li>
              <li>Created detailed drawings using Revit and AutoCAD.</li>
              <li>Performed load, voltage drop, and energy calculations.</li>
            </ul>
          </motion.div>
          <motion.p
           animate={{ x: 520,y:-780}}
           className='work_time'>(July 2020 - June 2021)</motion.p>




          <motion.div className="work"
          
          animate={{ x: 100,y:-600}}
          style={{textAlign:"left"}}
          >
            <div className='work_headline'>
              <p className='work_name'>Senior Design Project</p>
              
            </div>
            
            <ul className='work_description'>
              <li>Developed a method to monitor battery health using Electrochemical Impedance Spectroscopy.</li>
              <li>Produced Nyquist plots and implemented programming in C.</li>
              <li>Collaborated with a team to refine practical engineering solutions.</li>
            </ul>
          </motion.div>
          <motion.p
           animate={{ x: 800,y:-680}}
          className='work_time'>(Fall 2020 - Spring 2021)</motion.p>




          <motion.div className="work"
          
          animate={{ x: 800,y:-500}}
          style={{textAlign:"left"}}>
            <div className='work_headline'>
              <p className='work_name'>Bus Load Analysis Design</p>
              
            </div>
            
            <ul className='work_description'>
              <li>Designed a five-bus power system and analyzed load flow in PowerWorld.</li>
              <li>Optimized generator scheduling and reactive power support to maintain system limits.</li>
            </ul>
          </motion.div>
          <motion.p 
          animate={{ x: 600,y:-570}}
          className='work_time'>(Fall 2020)</motion.p>

       </div>
      
       </div>


      <div className="tools_container">
       <p className='tools_title'>Tools:</p>

      <div

        className="tools_img_container"
      >
        <img 
         
          transition={{
            duration: 25, 
            repeat: Infinity, 
            animation:""
          }}
          className='tools_img'
          src={autoCAD_logo} alt=""
        />
       

        <img 

        className='tools_img' 
                 
        src={civil3D_logo} alt="" 
        />

        <img 

         
        className='tools_img'
         src={revit_logo} alt="" />

        <img className='tools_img'
         
        src={bluebeam_logo} 
        alt="" />

         <img 
          
         className='tools_img' 
         src={fusion360_logo} 
         alt="" />

        <img 
         
        className='tools_img' 
        src={LTspice_logo} 
        alt="" />

        <img 
          
        className='tools_img' 
        src={matlab_logo} 
        alt="" />

        <img 
        
        className='tools_img' 
        src={c_logo} 
        alt="" />

         <img 
          

         className='tools_img' 
         src={java_logo}
         alt="" />

        <img 
        

        className='tools_img' 
        src={git_logo} 
        alt="" />

        <img 
        className='tools_img'
        src={ms_powerpointa_logo} 
        alt="" />
      
      </div>
      </div>


       
             <p>Social Media:</p>

       <div className="footer">
           <img src="" alt="" />
           <img src="" alt="" />
       </div>
    </div>
  )
}

export default Main_content
