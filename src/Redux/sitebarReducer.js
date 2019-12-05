import Friends from "../components/Navbar/Friends/Friends";
import React from "react";

let initialState ={
    friends : [
        {id : 1 , src : "https://cdn.iconscout.com/icon/premium/png-256-thumb/marvel-1502922-1273137.png"},
        {id : 1 , src : "https://66.media.tumblr.com/2baea900172949be0a2c460cfe48fff8/tumblr_p9d3rzjswE1wmrvkdo7_250.png"},
        {id : 1 , src : "https://66.media.tumblr.com/b6fdaeba44abe187c44e7b07fc896cbf/tumblr_p9d3rzjswE1wmrvkdo2_r1_250.png"}
    ]
};
const FRIENDS_LIST = "FRIENDS_LIST";
const  sidebarReducer = (state = initialState ,action) => {
    switch (action.type) {
        case FRIENDS_LIST:
            state.friends.map(f => <Friends src={f.src}/>);
            return state;
        default :
            return state;
    }
};
export const friendsListActionCreator = () => ({type : FRIENDS_LIST});

export default  sidebarReducer;