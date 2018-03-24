arr = [-1,5,17,-32,0]

def biggie_size(lst):
	for i in range(0,len(lst)):
		if lst[i] > 0:
			lst[i] = "BIG"
	return lst

def biggie_size2(lst):
	idx = 0
	for ele in lst:
		if ele > 0:
			lst[idx] = "BIG"
		idx += 1
	return lst

print biggie_size2(arr)