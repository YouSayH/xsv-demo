import asyncio

from app.repo import ItemRepo


class ItemService:
    def __init__(self):
        self.repo = ItemRepo()

    async def list_items(self):
        print("[Service] list_items")
        await asyncio.sleep(0.01)
        return [self._decorate(i) for i in self.repo.all()]

    async def get_item(self, item_id: int):
        print(f"[Service] get_item({item_id})")
        await asyncio.sleep(0.01)
        return self._decorate(self.repo.find(item_id))

    def _decorate(self, item):
        return {**item, "label": f"#{item['id']} {item['name']}"}
