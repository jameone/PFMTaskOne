var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3755",
        "ok": "3755",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5994",
        "ok": "5994",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4733",
        "ok": "4733",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "542",
        "ok": "542",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4798",
        "ok": "4798",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4998",
        "ok": "4998",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5657",
        "ok": "5657",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5927",
        "ok": "5927",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 20,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.857",
        "ok": "2.857",
        "ko": "-"
    }
},
contents: {
"req_get-landing-1fb31": {
        type: "REQUEST",
        name: "Get Landing",
path: "Get Landing",
pathFormatted: "req_get-landing-1fb31",
stats: {
    "name": "Get Landing",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3755",
        "ok": "3755",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5994",
        "ok": "5994",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4733",
        "ok": "4733",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "542",
        "ok": "542",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4798",
        "ok": "4798",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4998",
        "ok": "4998",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5657",
        "ok": "5657",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5927",
        "ok": "5927",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 20,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.857",
        "ok": "2.857",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
