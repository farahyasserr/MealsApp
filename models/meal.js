class Meal {
    constructor(
        id, 
        categoryIDs, 
        title, 
        affordability, 
        complexity, 
        imageURL, 
        duration, 
        ingredients, 
        steps, 
        isGlutenFree, 
        isVegan, 
        isVegetarian,
        isLactoseFree)
        {
            this.id=id;
            this.categoryIDs = categoryIDs;
            this.title= title;
            this.affordability=affordability;
            this.complexity=complexity;
            this.imageURL=imageURL;
            this.duration=duration;
            this.ingredients=ingredients;
            this.steps=steps;
            this.isGlutenFree=isGlutenFree;
            this.isVegan= isVegan;
            this.isVegetarian=isVegetarian;
            this.isLactoseFree=isLactoseFree;
        }
}

export default Meal;