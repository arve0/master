# coding: utf-8
import json
nb = open('automated scan.ipynb')
j = json.load(nb)
cell = j['cells'][1]
outputs = [cell.get('outputs', []) for cell in j['cells']]
[len(output) for output in outputs]
outputs = [o for o in outputs if len(o)]
[output[0].get('metadata') for output in outputs]
output = outputs[-2][0]
output.keys()
data = output['data']
data.keys()
b64_img = data['image/png']
from base64 import b64decode, b64encode
b_img = b64decode(''.join(b64_img))
from PIL import Image
from io import BytesIO
io_img = BytesIO(b_img)
img = Image.open(io_img)
img.size
new_size = [x//8 for x in img.size]
img.resize(new_size)
img = img.resize(new_size)
out = BytesIO()
img.save(out, 'png')
out.seek(0)
b64_img = b64encode(out.read())

def chunkstring(string, length):
    return [string[0+i:length+i] for i in range(0, len(string), length)]

j['cells'][-3]['outputs'][0]['data']['image/png'] = chunkstring(b64_img, 77)

with open('out.ipynb', 'w') as f:
    json.dump(j, f, indent=2, sort_keys=True)
