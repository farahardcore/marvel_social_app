import React from 'react'
import s from "./ProfileInfo.module.css"
import Preloader from "../../preloader/preloader";


const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }else {
        return(
            <div>
                <div className={s.avatar}>
                    <img src="https://esquire.kz/wp-content/uploads/2018/04/3367434-aiw_master-1-960x540.jpg" />
                </div>
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large}/>
                    <span>{props.profile.fullName}</span>
                </div>
                <div>
                    <span>{props.profile.aboutMe}</span>
                </div>
                <div>
                    <span>{props.profile.lookingForAJob?"Looking for a work":"Not looking a work"}</span>
                </div>
                <div>
                    <span>{props.profile.lookingForAJobDescription}</span>
                </div>
            </div>
        )
    }

}

export default ProfileInfo;