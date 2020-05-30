import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return(
        <div >
            <ProfileInfo isOwner={props.isOwner} savePhoto={props.savePhoto} status={props.status} updateUserStatus={props.updateUserStatus} profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
};

export default Profile;