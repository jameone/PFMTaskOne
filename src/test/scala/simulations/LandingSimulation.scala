package test.scala.simulations

import test.scala.config.Configuration._
import test.scala.scenarios.LandingScenario
import io.gatling.core.Predef._

class LandingSimulation extends Simulation {
  private val getLandingExec = LandingScenario.getLandingScenario.inject(atOnceUsers(users))

  setUp(getLandingExec).assertions(global.responseTime.max.lt(5000))
}
