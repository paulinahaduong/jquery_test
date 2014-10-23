j = Array.new

1000.times do |n|
  if n%3 == 0
    j.push(n)
  elsif n%5 == 0
    j.push(n)
    # puts n
  end 
end 

x = j.inject(:+)
puts "The answer is #{x}"

