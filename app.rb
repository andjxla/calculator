require "sinatra"

set :port, ENV.fetch("PORT, 4567")
set :bind, "0.0.0.0"

get "/" do
  erb :index
end

get "/calculate" do
  num1 = params[:num1].tr(",", ".").to_f
  operator = params[:operator]
  num2 = params[:num2].tr(",", ".").to_f


  result = case operator
  when "+"
    num1 + num2
  when "-"
    num1 - num2
  when "*"
    num1 * num2
  when "/"
    num2 == 0 ? "error" : num1 / num2
  else
    "invalid"
  end

  if result.to_i == result
    result.to_i.to_s
  else 
    result.to_s
  end

end