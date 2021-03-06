source 'https://rubygems.org'

ruby '2.3.1'

# This should be first.
gem 'mime-types', '~> 2.6.1', require: 'mime/types/columnar'

gem 'rails', '~> 5.0.0'
gem 'rack-cors'
gem 'pg'
gem 'puma'
gem 'sidekiq'
gem 'kaminari'

# CSS
gem 'sass-rails', '~> 5.0'
gem 'sassc-rails'
gem 'bourbon'
gem 'normalize-rails'

# Javascript
gem 'uglifier', '>= 1.3.0'
gem 'jquery-rails'

# Frontend
gem 'jbuilder', '~> 2.0'
gem 'hamlit'
gem 'simple_form'

gem 'slack-notifier'
gem 'bugsnag'
gem 'elo2'
gem 'faraday'
gem 'devise'
gem 'cancancan'
gem 'games_back', '~> 1.0'

group :production do
  gem 'redis-rails'
end

group :development do
  gem 'stackprof', require: false
  gem 'flamegraph', require: false
  gem 'rack-mini-profiler', require: false
  gem 'letter_opener'
  gem 'rack-livereload'
  gem 'guard-livereload', '~> 2.5', require: false
  gem 'rubocop', '0.41.2', require: false
end

group :development, :test do
  gem 'dotenv-rails'
  gem 'rspec-rails', '~> 3.5.0.beta3'
  gem 'rails-controller-testing'
  gem 'pry-rails'

  gem 'factory_girl_rails', require: false
end

group :test do
  # Test fast or die trying.
  gem 'codeclimate-test-reporter', require: false
  gem 'capybara', require: false
  gem 'poltergeist', require: false
  gem 'database_cleaner', require: false
  gem 'shoulda-matchers', require: false
  gem 'timecop', require: false

  gem 'visdiff'
end
