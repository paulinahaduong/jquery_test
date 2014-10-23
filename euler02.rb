n1 = 1
n2 = 1
c = 0
ans = 0

while c < 4000000
  c = n1 + n2
  if c%2 == 0
    ans = ans + c
  end 
  n1 = n2
  n2 = c
end 

puts "The answer is #{ans}"