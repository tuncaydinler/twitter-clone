class CreatePosts < ActiveRecord::Migration[8.0]
  def change
    create_table :posts do |t|
      t.text :content, null: false
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :like_count, null: false, default: 0

      t.timestamps
    end
  end
end
