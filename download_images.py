from pathlib import Path
from urllib.request import Request, urlopen
import json

ROOT = Path(__file__).resolve().parent
manifest = json.loads((ROOT / "image-manifest.json").read_text(encoding="utf-8"))
for item in manifest["assets"]:
    target = ROOT / item["path"]
    target.parent.mkdir(parents=True, exist_ok=True)
    try:
        req = Request(item["url"], headers={"User-Agent": "Mozilla/5.0"})
        with urlopen(req, timeout=30) as response:
            data = response.read()
        target.write_bytes(data)
        print(f"OK {item['path']} ({len(data)} bytes)")
    except Exception as exc:
        print(f"FAILED {item['path']}: {exc}")
