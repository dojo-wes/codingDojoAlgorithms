# Start with a list like this one: x = [19,2,54,-2,7,12,98,32,10,-3,6]. Sort your list first.
# Then, split your list in half. Push the list created from the first half to position 0
# of the list created from the second half. The output should be: [[-3, -2, 2, 6, 7], 10, 12, 19, 32, 54, 98].
# Stick with it, this one is tough!
x= [19,2,54,-2,7,12,98,32,10,-3,6] # print this[[-3, -2, 2, 6, 7], 10, 12, 19, 32, 54, 98]
x.sort()

y=[]
for i in range(len(x) / 2 - 1):
	y.append(x[0])
	x.pop(0)
y.append(x[0])
x[0] = y
print x