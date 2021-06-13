const initialState = {
  items: [
    {
      "title": "Robusta",
      "description": "Many people think that Robusta coffee is harsher and more bitter. It often has a strong smell and a somewhat flat, almost burnt taste. Robusta beans also have significantly more caffeine than Arabica beans.",
      "ingredients": [
        "Ingredients: Robusta coffee beans"
      ],
      "id": 1
    },
    {
      "title": "Excelsa",
      "description": "In terms of flavor, Excelsa beans are pretty unique. They combine light roast traits like tart notes and fruity flavors with flavors that are more reminiscent of dark roasts. They’re also lighter on aroma and caffeine — while maintaining an unusual depth of flavor. You can sometimes find these unusual beans in blends because they add complexity.",
      "ingredients": [
        "Ingredients: Excelsa coffee beans"
      ],
      "id": 2
    },
    {
      "title": "Liberica",
      "description": "Among enthusiasts, Liberica coffee has a controversial and polarizing reputation for wild inconsistency. Those who’ve tried this rare variety either love it or hate it. Some coffee drinkers adore the unusual, nutty, woody flavor and sneaky backbite on the finish. Others compare the flavor to burnt garbage.",
      "ingredients": [
        "Liberica coffee beans"
      ],
      "id": 3
    },
    {
      "title": "Arabica",
      "description": "Depending on where they’re grown, Arabica beans can offer many different tasting notes, from earthy Indonesian to floral Ethiopian. If you want to amaze your tastebuds, pick up a bag of single-origin Arabica beans!",
      "ingredients": [
        "Arabica coffee beans"
      ],
      "id": 4
    },
  ]
}


const stateReducer = (state=initialState, action) => {
  switch (action.type) {
    case "SHOW-TITLE":
      return {...state, title: state.title};
    default:
      return state;
  } 
}

export default stateReducer
