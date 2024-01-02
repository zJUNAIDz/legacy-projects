a=int(input("select a Number: "))
b=(input("An Operator: "))
c=int(input("select another Number: "))


if b=="+":
	print(a+c)
elif b=="-":
	print(a-c)
elif b=="*" or b=="x":
	print(a*c)
elif b=="/" or b=="÷":
	print(a/c)
else:
	print("Please Select a Valid Operator")