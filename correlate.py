from numpy.random import rand
from numpy.fft import fft2, ifft2
from scipy.ndimage import correlate

f = rand(3, 3)
g = rand(3, 3)

f_dft = fft2(f)
g_dft = fft2(g)

c = correlate(f, g, mode="wrap")
ph_c = ifft2(f_dft.conj() * g_dft)

diff = c - ph_c.real
diff_abs = c - abs(ph_c) # this should be the same as line above (j approx 0)

print(diff)
print(diff_abs)
