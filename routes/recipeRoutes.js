const express = require("express");
const{ createRecipe, getAllRecipes, getRecipeById, updateRecipe, deleteRecipe } = require("../controllers/recipeController");

const router = express.Router();

//create new Recipes
router.post("/",createRecipe );
//get all Recipes
router.get("/",getAllRecipes );
//get by id
router.get("/:id", getRecipeById);
//update recipe
router.put("/:id", updateRecipe);
//delete recipe
router.delete("/:id", deleteRecipe);


module.exports = router;
