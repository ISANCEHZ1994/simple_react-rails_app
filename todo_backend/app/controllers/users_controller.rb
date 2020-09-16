class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, methods: [ :to_dos ] 
    end

    def create
        Byebug

        user = User.create( user_params )
        ToDo.create( todo_params )
        render json: { id: user.id, name: user.name }, methods: [ :to_dos ] 
    end

    def user_params
        params.require(:user).permit(:name, :to_dos_id)
    end
    

    def update

    end

    def show
        user = User.find_by_id (params[:id])
        render json: user
    end

end
