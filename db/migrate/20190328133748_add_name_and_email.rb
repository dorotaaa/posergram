class AddNameAndEmail < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :fullname, :string
    add_column :users, :email, :string
  end
end
