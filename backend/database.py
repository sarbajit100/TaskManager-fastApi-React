from model import Todo
import motor.motor_asyncio
# MongoDB connection URL

# Create a client instance
client = motor.motor_asyncio.AsyncIOMotorClient("mongodb+srv://root:root@cluster0.lr4vr.mongodb.net/")

# Access a database
database = client.Task

# Access a collection
collection = database.Task

async def fetch_one_todo(title):
    document = await collection.find_one({"title":title})
    return document

async def fetch_all_todos():
    todos = []
    curser = collection.find({})
    async for document in curser:
        todos.append(Todo(**document))
    return todos

async def create_todo(todo):
    document = todo
    result = await collection.insert_one(document)
    return document

async def update_todo(title,desc):
    await collection.update_one({"title":title},{"$set":{"description":desc}})
    document = await collection.find_one({"title":title})
    return document

async def remove_todo(title):
    await collection.delete_one({"title":title})
    return True