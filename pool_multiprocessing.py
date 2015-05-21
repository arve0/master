# coding: utf-8

from time import time

# In[7]:

from skimage.io import imread
img = imread('stitched.png')


# In[9]:

from skimage.morphology import square
from skimage.filters.rank import mean

# In[12]:

selem = square(9)

t1 = time()
res = mean(img, selem)
t2 = time()
print(t2-t1)

# In[10]:

# lets be silly and chop it in four
y,x = img.shape
chunks = (img[:y//2, :x//2], img[:y//2, x//2:],
          img[y//2:, :x//2], img[y//2:, x//2:])

from multiprocessing import Pool

def f(img):
    selem = square(9)
    return mean(img, selem)

t1 = time()
with Pool(4) as p:
    p.map(f, chunks)


t2 = time()
print(t2-t1)
