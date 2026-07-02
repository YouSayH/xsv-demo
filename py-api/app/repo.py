print("[Repo] module loaded")

_ITEMS = [
    {"id": 1, "name": "alpha"},
    {"id": 2, "name": "beta"},
    {"id": 3, "name": "gamma"},
]


class ItemRepo:
    def all(self):
        print("[Repo] all")
        return list(_ITEMS)

    def find(self, item_id: int):
        print(f"[Repo] find({item_id})")
        return next(i for i in _ITEMS if i["id"] == item_id)
