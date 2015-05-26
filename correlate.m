s = 5;
pad = floor(s/2);

f = rand(s, s);
g = rand(s, s);

% for debugging
%f = ones(s,s);
%g = ones(s,s);

f_padded = padarray(f, [pad pad]);
g_padded = padarray(g, [pad pad]);

F = fft2(f_padded);
G = fft2(g_padded);

c = xcorr2(f, g)
ph_c = ifft2(conj(F) .* G);

% shift in real domain - why?
ph_c = fftshift(ph_c);

% invert axes - why?
ph_c = ph_c(end:-1:1, end:-1:1)

abs(c - ph_c) < 1e-12
