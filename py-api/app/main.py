# クロススタック可視化の検証用 FastAPI アプリ（Python 側バックエンド）。
# Laravel 側（api/）と同じく Route → Service → Repo の連鎖を持つ。
# pytrace への参照は無い（ソース無改変で観察される側）。
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.service import ItemService

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)
service = ItemService()


@app.get("/api/items")
async def list_items():
    print("[Route] GET /api/items")
    return await service.list_items()


@app.get("/api/items/{item_id}")
async def get_item(item_id: int):
    print(f"[Route] GET /api/items/{item_id}")
    return await service.get_item(item_id)
