class UsersController < ApplicationController

    def create
        user = User.new(user_params)
        render json: { id: user.id, name: user.name }
    end

    def update

    end

    def show
        user = User.find_by_id (params[:id])
        render json: user
    end

end