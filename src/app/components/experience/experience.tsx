import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>I have experience working on projects with Spring Boot and FastAPI backends.</p>
          <div className="experience-time">
            <Skill 
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" 
              measure={3} 
              years="3 years"
            />

            <Skill 
              image="/ts.png" 
              measure={3} 
              years="3 years"
            />

            <Skill 
              image="/js.png" 
              measure={3} 
              years="3 years"
            />

            <Skill 
              image="/java.png" 
              measure={1} 
              years="1 year"
            />

          </div>
        </div>
    )
}