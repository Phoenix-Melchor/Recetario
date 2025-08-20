from pydantic import BaseModel
from typing import Optional

class CreateUser(BaseModel):
    username: str
    password: str

class ReadUser(BaseModel):
    id: int

class Token(BaseModel):
    token: str

class CreateTokens(Token):
    refresh_token: str