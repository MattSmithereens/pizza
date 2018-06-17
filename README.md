# Welcome to the Age of Pamparius Pizza

#### Epicodus Intro to Programming: Weekly Independent Project
Friday June 15th, 2018

#### By Matt Smith

## Description
Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.

### Specs
* Allow the user to start the order process.  The base price for a small plain pizza is $10
* Allow the user to add-on to the base pizza.  The pizza size will be added first and pizza toppings will be entered into an array.
* When the user is finished the pizza is pushed into a hidden list and the user is given the option to continue ordering or check out.
* ordering additional pizzas adds additional pies to the list and keeps the ordering console visible
* checking out hides the ordering console and makes visible the user's order receipt which has been storing the pizzas as line items with size, toppings, and price listed out
* at the bottom of the user's receipt, the total cost for all the pizzas is tallied as a final charge



### Known Bugs

1. selecting a pizza with > 1 topping causes multiple instances of that pizza to be generated before determining the final pie price.  While this can be worked around, it does cause a pizza ordered with multiple toppings and no size selected to throw the "Choose a size" alert an amount equal to the amount of toppings selected.
1. no gluten free option.  Celiacs should not order from Pamparius Pizza

## Setup/Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Technologies Used

* Bootstrap 3.3.7
* jQuery 3.3.1
* Javascript

## Links

* Github Repo: https://github.com/MattSmithereens/pizza
* Github Pages: https://mattsmithereens.github.io/pizza/

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Matt Smith**

mattsmithereens@gmail.com
