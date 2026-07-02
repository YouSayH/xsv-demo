# py-api — Python（FastAPI）側バックエンドの検証アプリ

incident-copilot の多言語トレース（pytrace）検証用。`Route → Service → Repo` の連鎖を持つ最小 API。

## セットアップ

```powershell
cd py-api
python -m venv .venv
.venv\Scripts\pip install -r requirements.txt
```

## 起動（pytrace 経由・ソース無改変で記録）

pytrace は php-selfmade リポジトリで管理されているため、PYTHONPATH で指す:

```powershell
cd py-api
$env:PYTHONPATH = "C:\Users\yumah\OneDrive\Desktop\php-selfmade"
.venv\Scripts\python -m pytrace app.main:app --port 8001
```

- リクエストごとに `.py-trace/trace.<unixtime>.json`（正規化トレース）が生成される
- エンドポイント: `GET /api/items` / `GET /api/items/{id}`（CORS は localhost:3000 を許可済み）
- 記録なしの通常起動: `.venv\Scripts\uvicorn app.main:app --port 8001`
