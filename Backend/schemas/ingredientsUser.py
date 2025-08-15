from pydantic import BaseModel
from typing import Optional, List

class CreateIngridient(BaseModel):
    id: int
    ingredient_id: int
    quantity: int
    user_id: int

class ReadIngredients(BaseModel):
    id: int
    ingredients: List[CreateIngridient]

class UpdateIngridient(BaseModel):
    id: int
    ingredient_id: Optional[int]
    quantity: Optional[int]
    user_id: Optional[int]

class DeleteIngredient(BaseModel):
    id: int