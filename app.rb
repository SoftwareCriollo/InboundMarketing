require 'rubygems'
require 'sinatra/base'
require 'slim'
require 'sass'
require 'mongoid'

Mongoid.load!("config/mongoid.yml")

Slim::Engine.set_default_options :sections => false

class User

  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :mail, type: String

end

def set_message
  flash[:notice] = "Thank you, we have updated your order with %s" 
end

class App < Sinatra::Base

  set :public, File.join(File.dirname(__FILE__), 'public')
  set :views, File.join(File.dirname(__FILE__), 'views')

  helpers do
    def partial(page, options={})
      haml page, options.merge!(:layout => false)
    end
  end


  get('/') do 
    slim :index
  end

  post('/new_user') do
    user = User.new(params)
    user.save
    redirect '/'
  end

  get('/contacts') do
    @users = User.all
    slim :contacts
  end

end
