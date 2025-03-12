Post.destroy_all
if User.count == 0
  User.create!(
    username: "Tuncay Dinler",
    handle: "@tuncaydinler",
    email_address: 'tuncaydinleroffical@gmail.com',
    password: "WormerWormer")
end

100.times do |i|
  Post.create(content: "Post #{i} \n\n"+Faker::Lorem.paragraph(sentence_count: 40), user: User.first)
end
