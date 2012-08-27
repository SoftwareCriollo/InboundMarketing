require 'rubygems'
require 'sinatra/base'
require 'slim'
require 'sass'
require 'mongoid'

Mongoid.load!("config/mongoid.yml")

Slim::Engine.set_default_options :sections => true

class User

  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :mail, type: String

end

class App < Sinatra::Base

  set :public, File.join(File.dirname(__FILE__), 'public')
  set :views, File.join(File.dirname(__FILE__), 'views')

  helpers do
    def partial(page, options={})
      slim page, options.merge!(:layout => false)
    end
  end


  get('/') do 
    slim :index
  end

  post('/new_user') do
    user = User.new(params)
    user.save
  end

  get('/contacts') do
    @users = User.all
    slim :contacts, :locals => {:user => @users}
  end

  get('/contacts/destroy/:id') do
    User.where(:_id => params[:id]).first.destroy
    redirect '/contacts'
  end

end
