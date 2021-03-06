# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
ToDo.destroy_all


#USERS <----------------

 max = User.create({
    name: 'Max'
})
maria = User.create({
    name: 'Maria'
})
matthew = User.create({
    name: 'Matthew'
})

testToDO = ToDo.create({
    title: 'Groceries', todo_item: 'Buy: Milk, Eggs, and Butter', user_id: max.id
})

testToDO2 = ToDo.create({
    title: 'Wash Car', todo_item: 'Use: Soap, Tire Wash, and Rain-X', user_id: matthew.id
})

testToDO3 = ToDo.create({
    title: 'Clean House', todo_item: 'Clean: ONLY the first floor', user_id: maria.id
})



puts 'we seeded!!'