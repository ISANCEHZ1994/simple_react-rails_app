class CreateToDo < ActiveRecord::Migration[6.0]
  def change
    create_table :to_dos do |t|
      t.string :title
      t.string :todo_item
      t.integer :user_id
    end
  end
end
