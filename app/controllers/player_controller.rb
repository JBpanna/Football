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
  	throwServer = params[:longest_throw]

  	testlogin = {longest_throw: throwServer}
  	p testlogin

  throwStat=Player.create(
  	longest_throw: throwServer)
  	throwStat.save

  	head :ok
  end

  def runstats
  	runServer = params[:longest_run]

  	testlogin = {longest_run: runServer}
  	p testlogin

  runStat=Player.create(
  	longest_run: runServer)
  	runStat.save

  	head :ok
  end

end
