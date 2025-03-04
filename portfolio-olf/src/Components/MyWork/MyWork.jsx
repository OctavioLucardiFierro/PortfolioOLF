import React from 'react'
import './MyWork.css';
import theme_pattern from '../../assets/logoasset.svg'
import MyWork_Data from '../../assets/mywork_data';
import arrowIcon from '../../assets/arrow_icon.svg';
const MyWork = () => {
  return (
    <div className='MyWork'>
        <div className="mywork-title">
            <h1>Mis trabajos recientes</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mymork-container">
            {MyWork_Data.map((work, index)=>{
                return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
        <div className="mywork-showmore">
            <p>Ver Más</p>
            <img src={arrowIcon} alt="" />
        </div>
    </div>
  )
}

export default MyWork