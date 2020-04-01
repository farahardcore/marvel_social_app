import * as axios from "axios";

const instance =  axios.create({
    withCredentials : true,
    baseURL : ("https://social-network.samuraijs.com/api/1.0/"),
    headers : {
        "API-KEY":"10a0b773-bc02-42ab-8faa-a84175b9a08b"
    }
});


export const usersAPI = {
    getUsers(currentPage,pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
               return response.data;
            });
    },
    setFollow(userId){
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data.resultCode;
            })
    },
    setUnfollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data.resultCode;
            })
    }
};
export const headerAPI = {
    getAuth(){
        return instance.get(`auth/me`
        ).then(response => {
            return response.data;
        });
    }
};
export const profileAPI = {
    getUserProfile(userId){
        return instance.get(`profile/${userId}`)
            .then(response=> {
                return response.data;
            })
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status : status})
    }
}