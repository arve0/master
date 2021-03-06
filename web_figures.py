from __future__ import division
from PIL import Image
from glob import glob
from os import stat

files = glob('figures/*.png')

web_name = '_web.jpg'
web_res = (72, 72)
md_source = 'thesis.md'
md_web = 'thesis_web.md'

for f in files:
    if web_name in f:
        continue

    small_name = f.replace('.png', web_name)
    try:
        if stat(f).st_mtime < stat(small_name).st_mtime:
            continue
    except OSError:
        pass

    img = Image.open(f)
    if 'dpi' in img.info:
        dpi = img.info['dpi']
    else:
        dpi = web_res
    scale = web_res[0]/dpi[0]
    if scale < 1:
        size = [int(x*scale) for x in img.size]
        img = img.resize(size, resample=Image.LANCZOS)

    img.save(small_name, dpi=web_res, quality=80, optimize=True, progressive=True)


try:
    if stat(md_source).st_mtime < stat(md_web).st_mtime:
        exit()
except OSError:
    pass

fp = open(md_source)
md = fp.read()
fp.close()
md = md.replace('.png', web_name)

fp = open(md_web, 'w')
fp.write(md)
fp.close()
