import {MEALS} from '../../data/dummy-data';
import { SET_FILTERS, TOGGLE_FAVORITE } from '../actions/meals';

const initialState = {   //initial state gets initialized whenever the app launches
    meals: MEALS,
    filteredMeals: MEALS,  //because originally no filters are applied
    favoriteMeals: []     //because originally there's no favorites
}

//state = initial state btkhaleny if state is not defined YET, ba set it to the initial state
//reducer takes a state and an action
const mealsReducer = (state = initialState , action)=>{
    switch(action.type){
        case TOGGLE_FAVORITE: 
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealID)
            //The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
            if(existingIndex >=0){
                console.log("exists");
                //meal is already in favorites
                const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.splice(existingIndex, 1);
                //array.splice(index, howmany, item1, ....., itemX)
                return {...state, favoriteMeals: updatedFavMeals}
                //used spread operator here because i want to leave b2et el state kolha unchanged
                //w only change the favorite meals
            }
            else{
                console.log("doesnt exist");
                //returned -1, not found y3ny i ant to add it fl favs
                const meal = state.meals.find(meal => meal.id === action.mealID)
                console.log(state.favoriteMeals.concat(meal));
                return{...state, favoriteMeals: state.favoriteMeals.concat(meal)}

            }
        case SET_FILTERS: 
            const appliedFilters = action.filters;
            const updatedFilteredMeals = state.meals.filter(meal => {
                if(appliedFilters.glutenFree && !meal.isGlutenFree){
                    return false;
                }
                if(appliedFilters.lactoseFree && !meal.isLactoseFree){
                    return false;
                }  
                if(appliedFilters.vegetarian && !meal.isVegetarian){
                    return false;
                }
                if(appliedFilters.vegan && !meal.isVegan){
                    return false;  //false removes the meal from array
                }
                return true;  //true keeps the meal
            });
            return {...state, filteredMeals: updatedFilteredMeals}

        default: return state; //default case where i return an unchanged state
    }
}

export default mealsReducer; 