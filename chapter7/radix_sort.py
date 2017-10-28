import random
import time

def radix_sort(arr):
	divisor = 1
	mod = 10

	while(True):
		buckets = []
		for i in range(10): #initialize buckets
			buckets.append([])

		for num in arr:
			least_digit = num % mod
			least_digit /= divisor
			buckets[least_digit].append(num)

		mod *= 10
		divisor *= 10
		
		if len(buckets[0]) == len(arr):
			print arr
			return arr

		arr = []
		for bucket in buckets:
			for num in bucket:
				arr.append(num)

def test_rig(n):
	print "generating list"
	my_list = [random.randint(0, 1000000) for i in xrange(n)]

	print "copying list"
	answer = [x for x in my_list]

	print "starting my LSD radix sort"
	start = time.time()
	my_list = radix_sort(my_list)
	end = time.time() - start

	print "sort complete, took {} seconds.".format(end)

	print "starting built-in Tim sort"
	start2 = time.time()
	answer.sort()
	end2 = time.time() - start2

	print "built-in sort complete, took {} seconds.".format(end2)

	if answer == my_list:
		print "sorts matched"
	else:
		print "sorts did not match"

test_rig(10000)