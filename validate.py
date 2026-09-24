import json
from pathlib import Path
apps=json.loads((Path(__file__).parents[1]/"data/apps.json").read_text())
required={"name","bundleId","version","platform","minimumOS","binarySizeMB"}
assert all(required <= set(a) for a in apps)
assert all(a["platform"]=="iOS" for a in apps)
print(f"Validated {len(apps)} applications.")
