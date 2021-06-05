

//el const bt3 TOGGLE_FAVORITE da is only created to make things easier 3shan
//lama agy a refer lel action da i just import TOGGLE_FAVORITE instead of trying to write a string w momkn aghlat
//w akteb el string ghalat aw ay haga

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';  //string is IDENTIFIER
export const SET_FILTERS = 'SET_FILTERS';


//what i want to do here is whenever i press 3l favorites, i toggle it b m3na i add its mealid to the favorites
//law heya msh fl favorites aw remove it ml favorites lw heya already favorite
//in order to do this mehtaga el function nafsaha tkon bta5od el id bt3 el meal 3shn a3rf a pass it

export const toggleFavorite = (id)=>{
    return { 
        //object that describes the action
        type: TOGGLE_FAVORITE,    //this is the string identifier
        mealID: id
     };       
}

//fel reducer b2a i want to ACT whenever i get such a toggle favorite action
//yb2a fl action i don't ACT, i act fl reducer b2a fl switch

export const setFilters = filterSettings =>{
    return {
        type: SET_FILTERS,
        filters: filterSettings
    };
}