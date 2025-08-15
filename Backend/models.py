from sqlalchemy import Column, Integer, String, ForeignKey, Table
from sqlalchemy.orm import relationship
from database import Base

recipe_ingredients_table = Table(
    "recipes_ingredients",
    Base.metadata,
    Column("recipe_id", Integer, ForeignKey("recipes.id")),
    Column("ingredient_id", Integer, ForeignKey("ingredients.id"))
)

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    password = Column(String)
    ingredients = relationship("IngredientsUser", back_populates="user")

class Recipes(Base):
    __tablename__ = "recipes"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)
    ingredients = relationship("Ingredients", secondary=recipe_ingredients_table, back_populates="recipes_ingredients")
    instructions = Column(String)
    user_id = Column(Integer, ForeignKey("users.id"))

class Ingredients(Base):
    __tablename__ = "ingredients"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    recipes_ingredients = relationship("Recipes", secondary=recipe_ingredients_table, back_populates="ingredients")
    user_ingredients = relationship("IngredientsUser", back_populates="ingredient")

class IngredientsUser(Base):
    __tablename__ = "ingredients_user"

    id = Column(Integer, primary_key=True, index=True)
    ingredient_id = Column(Integer, ForeignKey("ingredients.id"))
    ingredient = relationship("Ingredients", back_populates="user_ingredients")
    quantity = Column(Integer)
    user_id = Column(Integer, ForeignKey("users.id"))
    user = relationship("User", back_populates="ingredients")