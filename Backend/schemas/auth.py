from pydantic import BaseModel

class CreateUser(BaseModel):
    user: str
    password: str

class ReadUser(BaseModel):
    id: int
     
class UserToken(BaseModel):
    token: str
    refresh_token: str