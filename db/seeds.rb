# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all
poser = User.create({username: 'posergram', password: 'posergram', fullname: 'posergram', bio: 'Bringing you closer to the posers and things you love. ❤️'})
poser.photo.attach(io: File.open("#{Rails.root}/app/assets/images/default_profile_pic.jpg"), filename: "default_profile_pic.jpg")

