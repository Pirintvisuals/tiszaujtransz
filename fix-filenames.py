# -*- coding: utf-8 -*-
import os, glob, shutil

root = r"c:\Users\pirin\OneDrive\Mellékletek\tiszaujvarostransz"

# Exact rename map: old filename -> new filename
RENAMES = {
    # assets/images/
    "aktual-bau-közben.jpg":       "aktual-bau-kozben.jpg",
    "nehezgep-kezelő.jpg":         "nehezgep-kezelo.jpg",
    "olefingyár.jpg":              "olefingyar.jpg",
    "szirmabesenyő-0129-114.jpg":  "szirmabeseny-0129-114.jpg",
    # unsplash/
    "gépi föld (1).jpg":           "gepi-fold-1.jpg",
    "út (1).jpg":                  "ut-1.jpg",
}

# Directories to search for these files
search_dirs = [
    os.path.join(root, "assets", "images"),
    os.path.join(root, "unsplash"),
]

# 1. Rename files on disk
print("=== Renaming files ===")
for d in search_dirs:
    for old_name, new_name in RENAMES.items():
        old_path = os.path.join(d, old_name)
        new_path = os.path.join(d, new_name)
        if os.path.isfile(old_path):
            shutil.copy2(old_path, new_path)
            print("  Renamed: {} -> {}".format(old_name, new_name))

# 2. Update all HTML files
print("\n=== Updating HTML references ===")
for html_path in glob.glob(os.path.join(root, "*.html")):
    with open(html_path, encoding="utf-8") as f:
        content = f.read()
    new_content = content
    for old_name, new_name in RENAMES.items():
        new_content = new_content.replace(old_name, new_name)
    if new_content != content:
        with open(html_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print("  Updated:", os.path.basename(html_path))

print("\nDone.")
