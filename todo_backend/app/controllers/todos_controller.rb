class ToDoController < ApplicationController

    def index
        list = ToDo.all
        render json: list
    end

    def create
        list = ToDo.new(todo_params)
        render json: {id: list.id, nameOfList:list.title, listItem:list.todo_item }
    end

    def update

    end

    def show

    end

end