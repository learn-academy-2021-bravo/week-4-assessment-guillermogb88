# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

#creating a method block
#trying to use the select method to filter through the array 
#i kept getting a syntax error im pretty sure i have the logic right but im just not writing it correctly if i could get some input.
def get_letter 
    array.select,with_index do |value|
        value 'o'
    end
end
puts get_letter beverages_array

# # -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete



album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

#turn vowels into a variable with the string listing out the vowels 
#use .chars string method to seperate the string 
#use the "-" to the vowels to delete them. 
# use the .join array method to put string back together into a word 
#had to do a little bit of research on this but ultimately used it and understood what each method was doing. 
vowels = 'aeiou'
puts (album1.chars - vowels.chars).join
puts (album2.chars - vowels.chars).join
puts (album3.chars - vowels.chars).join


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'


# created bike class
#intialized and created perameters for it 
class Bike
    attr_accessor :wheels, :speed, :model 
    def initialized(wheels,speed, model)
        @wheels = wheels
        @speed = speed
        @model = model
    
    end
end
   # my next step would have been to creat the string interpulatin 
  # def 
  #get_info "my bike has #{@wheels} wheels, its speed is #{@speed}, and the model of it is #{@model} "


#created an instance variable for the bike but could not get it to run on ruby 
# I tried to write it and rewrite it a coulple different ways but i keept recieiving this syntax error

# code_challenges.rb:59:in `initialize': wrong number of arguments (given 3, expected 0) (ArgumentError)
#         from code_challenges.rb:59:in `new'
#         from code_challenges.rb:59:in `<main>


default_bike = Bike.new('2', '0', 'specialized')



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
