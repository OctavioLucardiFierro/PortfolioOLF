import React from 'react'
import './MyWork.css';
import theme_pattern from '../../assets/logoasset.svg'
import MyWork_Data from '../../assets/mywork_data';
import arrowIcon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id='work' className='MyWork'>
        <div className="mywork-title">
            <h1>Mis trabajos</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mymork-container">
            {MyWork_Data.map((work, index)=>{
                return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
        <div className="mywork-showmore">
            <a target="_blank" href='https://www.linkedin.com/in/octavio-lucardi-fierro-4aba90251/details/experience/'><p>Ver Más</p></a>
            <img src={arrowIcon} alt="" />
        </div>
    </div>
  )
}

export default MyWork