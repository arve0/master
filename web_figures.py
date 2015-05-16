from PIL import Image
from glob import glob
from os import stat

files = glob('figures/*.png')

for f in files:
    if '_small.png' in f:
        continue

    small_name = f.replace('.png', '_small.png')
    try:
        if stat(f).st_mtime < stat(small_name).st_mtime:
            continue
    except OSError:
        pass

    img = Image.open(f)
    if 'dpi' in img.info:
        dpi = img.info['dpi']
    else:
        dpi = (72, 72)
    scale = 72./dpi[0]
    if scale < 1:
        size = [int(x*scale) for x in img.size]
        img = img.resize(size, resample=Image.LANCZOS)

    img.save(small_name, dpi=(72, 72))


fp = open('thesis.md')
md = fp.read()
fp.close()
md = md.replace('.png', '_small.png')

fp = open('thesis_web.md', 'w')
fp.write(md)
fp.close()
