from pydantic import BaseModel
from typing import Optional, List
from ingredients import i

class CreateRecipes(BaseModel):
    name: str
    description: Optional[str]
    instructions: str
    user_id: int

class ReadRecipes(BaseModel):
    id: int


class UpdateRecipe(BaseModel):
    id: int
    name: Optional[str]