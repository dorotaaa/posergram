Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root' 

  namespace :api, defaults: { format: :json } do 
    resources :users do
      resources :posts, only: [:index, :create]
    end
    resource :session, only: [:create, :destroy]
    resources :posts, except: [:index, :create]
    resources :comments, only: [:index, :create, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :follows, only: [:create, :destroy]
  end
end
