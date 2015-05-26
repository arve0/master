f = rand(3, 3);
g = rand(3, 3);

f_dft = fft2(f);
g_dft = fft2(g);

% pad, xcorr2 does not have mode=wrap in matlab
sf = size(f); % keep sizes before padding

f = vertcat(f,f,f);
f = horzcat(f,f,f);

% calc boundaries
i =  2*sf(1,1) + 1;
ii = i+sf(1,1) - 1;
j = 2*sf(1,2) + 1;
jj = j + sf(1,2) - 1;

c = xcorr2(f, g);
c = c(i:ii, j:jj) % clip away correlation outside img

ph_c = ifft2(conj(f_dft) * g_dft)

diff = c - real(ph_c)
diff_abs = c - abs(ph_c) % this should be the same as line above (j approx 0)
