# -*- coding: utf-8 -*-
import zipfile, os

root = r"c:\Users\pirin\OneDrive\Mellékletek\tiszaujvarostransz"
out = os.path.join(root, "tiszaujvarostransz-deploy.zip")

include_dirs = ["assets", "css", "js", "unsplash"]
include_exts = {".html", ".css", ".js", ".ico", ".txt", ".xml", ".webmanifest"}

# Root-level images referenced directly in HTML
include_root_files = {
    "cert-mark-en-iso9001.png",
    "cert-mark-en-iso14001.png",
    "greenplan csoport tagja.png",
    "joyson-logo-white.png",
    "kkbsc-logo-white.png",
    "mb-logo-white.png",
    "mvm-xpert-logo-white.png",
    "tt-palyazat-info-2023-06-19.jpg",
}

skip_files = {
    "download-images.sh", "compress-image.js", "add-seo.py",
    "build-deploy.py", "verify-deploy.py", "fix-greenplan.py",
    "remove-greenplan-badge.py", "add-greenplan-back.py", "remove-footer-logo.py",
}

count = 0
with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as zf:
    for f in os.listdir(root):
        fp = os.path.join(root, f)
        if os.path.isfile(fp):
            ext = os.path.splitext(f)[1].lower()
            if (ext in include_exts or f in include_root_files) and f not in skip_files:
                zf.write(fp, f)
                count += 1

    for d in include_dirs:
        dp = os.path.join(root, d)
        if not os.path.isdir(dp):
            continue
        for dirpath, dirnames, filenames in os.walk(dp):
            dirnames[:] = [x for x in dirnames if x != "node_modules"]
            for fname in filenames:
                fpath = os.path.join(dirpath, fname)
                arcname = os.path.relpath(fpath, root).replace("\\", "/")
                zf.write(fpath, arcname)
                count += 1

size_mb = os.path.getsize(out) / 1024 / 1024
print("Done: {} files, {:.1f} MB".format(count, size_mb))
