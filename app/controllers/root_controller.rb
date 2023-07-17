class RootController < ApplicationController
  def index
    @greetings = Greeting.all
    rand = Random.rand(0..@greetings.length - 1)
    @greeting = @greetings[rand]
  end
end
