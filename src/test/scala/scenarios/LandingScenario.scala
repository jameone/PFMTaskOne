package test.scala.scenarios

import test.scala.requests.LandingRequest
import io.gatling.core.Predef.scenario
import io.gatling.core.structure.ScenarioBuilder

object LandingScenario {
  val getLandingScenario: ScenarioBuilder = scenario("Get Landing Scenario")
    .exec(LandingRequest.getLandingPage)
}
