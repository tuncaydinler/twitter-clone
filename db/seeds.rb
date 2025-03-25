User.destroy_all
Post.destroy_all

User.create!(
  username: "Tuncay Dinler",
  handle: "@tuncaydinler",
  email_address: 'tuncaydinleroffical@gmail.com',
  password: "WormerWormer")

50.times do
  User.create! do
    it.username = Faker::Internet.unique.username
    it.handle = "@"+Faker::Internet.unique.username.gsub(/([\W])/, "")
    it.email_address = Faker::Internet.unique.email
    it.password = "WormerWormer"
  end
end

100.times do |i|
  Post.create(
    content: "Post #{i} \n\n"+Faker::Lorem.paragraph(sentence_count: 40),
    user: User.order("RANDOM()").first
  )
end
