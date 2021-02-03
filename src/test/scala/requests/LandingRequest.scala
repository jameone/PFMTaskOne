package test.scala.requests

import io.gatling.http.request.builder.HttpRequestBuilder
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import test.scala.config.Configuration.baseUrl

object LandingRequest {
  var getLandingPage: HttpRequestBuilder = http("Get Landing")
    .get(baseUrl)
    .header("content-type", "text/html; charset=UTF-8")
    .check(status is 200)
}
