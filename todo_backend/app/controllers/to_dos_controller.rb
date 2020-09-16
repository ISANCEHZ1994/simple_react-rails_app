class ToDosController < ApplicationController

    def index
        todos = ToDo.all
        render json: todos #, methods: [ :users ]  # this allows to also have the user information ( name and id )
    end

    def create
        list = ToDo.new(todo_params)
        render json: { id: list.id, nameOfList:list.title, listItem:list.todo_item }
    end

    def update

    end

    def show

    end

end