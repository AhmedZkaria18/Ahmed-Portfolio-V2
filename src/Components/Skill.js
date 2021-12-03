import React, { useRef } from 'react'

function Skill(props) {
    const {SkillIcon, SkillIcon2, SkillName} = props;

    const spanRef = useRef(null);

    return (
        <div className={'skills__container__item'}            
            onMouseEnter={() => {
                spanRef.current.style.animation = "none";
                spanRef.current.style.animation = "skillsItemBefore 0.6s linear";        
                spanRef.current.style.left= "0";
                spanRef.current.style.top= "auto";
                spanRef.current.style.bottom= "0";
                spanRef.current.style.width= "45%";
                spanRef.current.style.height= "2px";

            }}
            onMouseLeave={() => {
                spanRef.current.style.animation = "none";
                spanRef.current.style.animation = "skillsItemBeforervs 0.6s linear";
                spanRef.current.style.left= "0";
                spanRef.current.style.top= "auto";
                spanRef.current.style.bottom= "0";
                spanRef.current.style.width= "2px";
                spanRef.current.style.height= "100%";
            }}
        >
            {/* <span ref={spanRef} ></span>
            { React.createElement(SkillIcon, null, null) }
            <p>{SkillName}</p> */}
            {
                (SkillIcon2) ?
                <>
                    <span ref={spanRef} ></span>
                    { React.createElement(SkillIcon, null, null) }
                    { React.createElement(SkillIcon2, null, null) }
                    <p>{SkillName}</p>    
                </>
                :<>
                    <span ref={spanRef} ></span>
                    { React.createElement(SkillIcon, null, null) }
                    <p>{SkillName}</p>
                </>
            }
        </div>
    )
}

export default Skill
