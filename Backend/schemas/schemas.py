from typing import List, Optional
from pydantic import BaseModel

class IngredientUserBase(BaseModel):
    quantity: int

class IngredientUserCreate(IngredientUserBase):
    ingredient_id: int
    user_id: int

class IngredientUser(IngredientUserBase):
    id: int

    class Config:
        orm_mode = True

class UserMain(BaseModel):
    username: str

class UserOptional(UserMain):
    password: str

class UserId(UserMain):
    id: int
    ingredients: List[IngredientUser] = []

    class Config:
        orm_mode = True

class UserToken(UserId):
    token: str
    refresh_token: str
     
class IngredientMain(BaseModel):
    name: str

class Ingredient(IngredientMain):
    id: int
    user_ingredients: List[IngredientUser] = []

    class Config:
        orm_mode = True

class RecipeMain(BaseModel):
    name: str
    description: Optional[str] = None
    instructions: Optional[str] = None 

class RecipeCreate(RecipeMain):
    ingredients: List[IngredientMain] = []

class Recipe(RecipeMain):
    id: int
    ingredients: List[Ingredient] = []

    class Config:
        orm_mode = True