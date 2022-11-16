import React, { useEffect, useState } from 'react'
import styles from './GoToTop.module.css'
import { FaArrowUp } from 'react-icons/fa'

const GoToTop = () => {
    
    const [isVisiable,setIsVisiable] = useState(false)

    const goToBtn = () =>{
        window.scrollTo({top:0, left:0, behavior:"smooth"})
    };

    const lsitenToScroll = ()=>{
        let heightToHidden=400;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop

        // console.log("heighi is ", winScroll)
        if(winScroll>heightToHidden){
            setIsVisiable(true)
        }else{
            setIsVisiable(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", lsitenToScroll)
    },[]);

  return (
    <>
    {
        isVisiable &&(
            <div className= {styles["top-btn"]} onClick={goToBtn}>
            <FaArrowUp className={styles['top-btn--icon']} />
            
        </div>
        
        )
    }
    
    
    </>
  )
}

export default GoToTop