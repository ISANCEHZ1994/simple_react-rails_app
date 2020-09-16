class ToDosController < ApplicationController

    def index
        todos = ToDo.all
        render json: todos #, methods: [ :users ]  # this allows to also have the user information ( name and id )
    end

    def create
        
        list = ToDo.create(todo_params)
        render json: { id: list.id, nameOfList:list.title, listItem:list.todo_item }
    end

    def todo_params
        params.require(:to_dos).permit(:title, :todo_item, :user_id)
    end

    # user_id: @user.id

    # def update

    # end

    # def show

    # end

end