#!/usr/bin/env bash
# Downloads all remaining WordPress-hosted images into assets/images/
# Run from the project root: bash download-images.sh

BASE="https://tiszaujvarostransz.hu/wp-content/uploads"
DEST="assets/images"

mkdir -p "$DEST"

declare -a URLS=(
  # index.html
  "$BASE/2024/08/tt-image-2024.webp"
  "$BASE/2024/05/szechenyi-infoblokk-2.png"

  # rolunk.html
  "$BASE/2022/10/tt-pic-03.jpg"
  "$BASE/2022/10/tt-pic-04.jpg"

  # referenciak.html
  "$BASE/2022/10/ref-pere-utepites.jpg"
  "$BASE/2022/06/szirmabeseny%C5%91-0129-114.jpg"
  "$BASE/2022/06/SEGA-1.jpg"
  "$BASE/2022/06/MAIP.jpg"
  "$BASE/2022/10/ref-jaszfenyszaru.jpg"
  "$BASE/2022/06/M30-2.jpg"
  "$BASE/2022/06/aktual-bau-k%C3%B6zben.jpg"
  "$BASE/2017/10/Bosch-csarmok-bovites-2017..jpg"
  "$BASE/2017/05/tiszaujvaros-transz-global-uzlethaz1.jpg"
  "$BASE/2017/05/tiszaujvaros-transz-ds-smith1.jpg"
  "$BASE/2017/05/tiszaujvaros-transz-bonar1.jpg"
  "$BASE/2017/05/tiszaujvaros-transz-jysk-miskolc.jpg"
  "$BASE/2022/10/ref-jysk-miskolc.jpg"
  "$BASE/2017/10/Bosch-Logisztikai-raktar-2014..jpg"
  "$BASE/2017/08/hejopapi-templom.jpg"
  "$BASE/2017/09/olefingy%C3%A1r.jpg"
  "$BASE/2017/10/simontornya-borgyar.jpg"
  "$BASE/2022/10/ref-czobel-villa.jpg"
  "$BASE/2022/10/Hewlett-Packard.jpg"
)

for URL in "${URLS[@]}"; do
  FILENAME=$(basename "$URL" | sed 's/%C5%91/ő/g; s/%C3%B6/ö/g; s/%C3%A1/á/g')
  echo "Downloading: $FILENAME"
  curl -s -L "$URL" -o "$DEST/$FILENAME"
done

echo ""
echo "Done. $(ls $DEST | wc -l) files in $DEST/"
