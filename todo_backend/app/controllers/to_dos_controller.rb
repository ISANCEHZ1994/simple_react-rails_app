class ToDosController < ApplicationController

    skip_before_action :verify_authenticity_token

    def index
        todos = ToDo.all
        render json: todos #, methods: [ :users ]  # this allows to also have the user information ( name and id )
    end

    def create
        list = ToDo.new(todo_params)
        render json: { id: list.id, nameOfList:list.title, listItem:list.todo_item }
    end

    def todo_params
        params.require(:to_dos).permit(:title, :todo_item, :user_id)
    end

end
