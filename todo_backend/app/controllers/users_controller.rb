class UsersController < ApplicationController

    skip_before_action :verify_authenticity_token

    def index
        users = User.all
        render json: users, methods: [ :to_dos ] 
    end

    def create
        user = User.create( user_params )
        new_todo = ToDo.create(title: params[:title], todo_item: params[:todo_item], user_id: user.id)
        # byebug
        # ToDo.new( todos_params )
        render json: { id: user.id, name: user.name }
    end

    def show
        user = User.find_by_id (params[:id])
        render json: user
    end
    
    def user_params
        # params.require(:user).permit(:name, { to_dos_attributes: [:title, :todo_item] })
        params.require(:user).permit(:name)
        # params.require(:project).permit(:title, todos_attributes: [:id, :text])
    end
end
