class PlayerController < ApplicationController
  def index
  	@players=Player.all
  end

  def playerstats
  	nameServer = params[:name]
  	positionServer = params[:position]

  	testlogin = {name: nameServer, position: positionServer}
  	p testlogin

  	person=Player.create(
  		name: nameServer,
  		position: positionServer)
  		person.save


  	head :ok
  end

  def throwstats
    nameServer = params[:name]
    positionServer = params[:position]
  	throwServer = params[:longest_throw]

  	testlogin = {longest_throw: throwServer}
  	p testlogin

  player=Player.find_by(name: nameServer)
    player.destroy  

  throwStat=Player.new(
      name: nameServer,
      position: positionServer,
      longest_throw: throwServer)
      throwStat.save

  	head :ok
  end

  def runstats
    nameServer = params[:name]
    positionServer = params[:position]
  	runServer = params[:longest_run]

  	testlogin = {longest_run: runServer}
  	p testlogin

  player=Player.find_by(name: nameServer)
    player.destroy

  runStat=Player.new(
    name: nameServer,
    position: positionServer,
  	longest_run: runServer)
  	runStat.save

  	head :ok
  end

end
