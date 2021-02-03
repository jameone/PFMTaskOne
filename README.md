# Performance analysis on https://www.performetriks.com

This project is a simple demonstration of the Gatling (open source) stress testing tool.

## Analysis

A stress test equivalent to 20 concurrent users was conducted (a redirection of the output
can be found [here](./output.txt)). A straightforward response time metric was used to determine
`PASS` or `FAIL`. 

- If the maximum response time exceeds 5000 ms the outcome is `FAIL`, otherwise
`PASS`. 

The test was run in multiple trials having a unanimous outcome of `FAIL`. This indicates
the site in question [performetriks.com](https://www.performetriks.com) is not well suited for
high traffic. Response times for all 20 users exceeded 1200 ms which is well outside the recommended
100-800 ms range for the web. 

A similar set of trials were completed for 2 concurrent users where the result was a unanimous `PASS`,
all response times were < 800 ms. This type of performance is consistent with what one may expect
from a relatively small marketing site. Where it is unlikely traffic will spike to an average of
20 concurrent users, deviating so far from average at a given instant, before there is an opportunity
to scale the resources accordingly (avoiding over provisioning).

For the full Gatling output, clone the repository and navigate to
`./target/gatling/landingsimulation-20210203144013933/index.html` which should open the report in your
default browser.

## Setting up the dev environment

Gatling is fully usable as a standalone executable. However, this project was created using the
IntelliJ IDEA IDE. For instructions on setting up IDEA with Gatling visit
[here](https://gist.github.com/groovybayo/4691670).

Once you have installed Maven and the Scala plugin, you should be able to clone the repository
and execute tests with the command `mvn clean gatling:test`.

An example output is given below, changing the number of concurrent users to 2:
```bash
[INFO] Scanning for projects...
[INFO] 
[INFO] -----------------------< org.example:PFMTaskOne >-----------------------
[INFO] Building PFMTaskOne 1.0-SNAPSHOT
[INFO] --------------------------------[ jar ]---------------------------------
[INFO] 
[INFO] --- maven-clean-plugin:2.5:clean (default-clean) @ PFMTaskOne ---
[INFO] Deleting /home/james/IdeaProjects/PFMTaskOne/target
[INFO] 
[INFO] --- gatling-maven-plugin:3.1.0:test (default-cli) @ PFMTaskOne ---
Simulation test.scala.simulations.LandingSimulation started...

================================================================================
2021-02-03 09:34:57                                           0s elapsed
---- Requests ------------------------------------------------------------------
> Global                                                   (OK=2      KO=0     )
> Get Landing                                              (OK=2      KO=0     )

---- Get Landing Scenario ------------------------------------------------------
[##########################################################################]100%
          waiting: 0      / active: 0      / done: 2     
================================================================================

Simulation test.scala.simulations.LandingSimulation completed in 0 seconds
Parsing log file(s)...
Parsing log file(s) done
Generating reports...

================================================================================
---- Global Information --------------------------------------------------------
> request count                                          2 (OK=2      KO=0     )
> min response time                                    432 (OK=432    KO=-     )
> max response time                                    483 (OK=483    KO=-     )
> mean response time                                   458 (OK=458    KO=-     )
> std deviation                                         26 (OK=26     KO=-     )
> response time 50th percentile                        458 (OK=458    KO=-     )
> response time 75th percentile                        470 (OK=470    KO=-     )
> response time 95th percentile                        480 (OK=480    KO=-     )
> response time 99th percentile                        482 (OK=482    KO=-     )
> mean requests/sec                                      2 (OK=2      KO=-     )
---- Response Time Distribution ------------------------------------------------
> t < 800 ms                                             2 (100%)
> 800 ms < t < 1200 ms                                   0 (  0%)
> t > 1200 ms                                            0 (  0%)
> failed                                                 0 (  0%)
================================================================================

Reports generated in 0s.
Please open the following file: /home/james/IdeaProjects/PFMTaskOne/target/gatling/landingsimulation-20210203143455580/index.html
Global: max of response time is less than 5000.0 : true

```

