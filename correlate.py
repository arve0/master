from numpy import ones, pad
from numpy.random import rand
from numpy.fft import fft2, ifft2, fftshift
from scipy.ndimage import correlate

size = (7,)
dims = 2
padding = size[0]//2

# for debugging
def twenty(arr):
    "prints int(20*arr)"
    print((20*arr.real).astype(int))

#f = ones(size*dims)
#g = ones(size*dims)

f = rand(*(size*dims))
g = rand(*(size*dims))


# cross correlation is defined with zero padding!
c = correlate(f, g, mode="constant")

# zero pad to keep frequency information on edge
f_padded = pad(f, padding, mode="constant")
g_padded = pad(g, padding, mode="constant")

# phase correlation
F = fft2(f_padded)
G = fft2(g_padded)
FG = F.conj() * G
ph_c = ifft2(FG)

# why do we need to shift?
ph_c = fftshift(ph_c)

# clip back to original size
ph_c = ph_c[padding:-padding, padding:-padding]

# why?
ph_c = ph_c[::-1, ::-1]

twenty(ph_c)
twenty(c)

diff = c - ph_c.real
print(diff < 1e-12)
