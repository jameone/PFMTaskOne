package test.scala.config

object Configuration {
  val baseUrl: String = "https://www.performetriks.com"
  val users: Int = Integer.getInteger("users", 20).toInt
  val rampup: Int = Integer.getInteger("rampup", 1).toInt
}
