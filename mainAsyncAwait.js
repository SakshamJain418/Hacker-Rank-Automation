const puppeteer = require("puppeteer");
const solution = require("./code");

let hackerRankLoginPageUrl = "https://www.hackerrank.com/auth/login";
let userName = "nalefe9781@robhung.com";
let password = "Sakshamjain@12";

async function demo() {
    let browserLaunchPromise = await puppeteer.launch({
        headless : false,
        args : ["--start-maximized"],
        defaultViewport : null
    })
    let newTab = await browserLaunchPromise.newPage();
    await newTab.goto(hackerRankLoginPageUrl);
    await newTab.type("#input-1" , userName , {delay : 60});
    await newTab.type("#input-2" , password , {delay : 60});
    await waitAndClick("button[data-analytics='LoginPassword']" , newTab);
    await waitAndClick("div[data-automation='algorithms']" , newTab);
    await waitAndClick("input[value='warmup']" , newTab);
    let allQuestionArr = await newTab.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary" , {delay : 60});

    console.log(allQuestionArr.length);
    await questionSolver(allQuestionArr[i] , solution.answers[i] , newTab);    
}

demo();

async function questionSolver(questionNumber , solution , newTab) {
    await questionNumber.click();
    await waitAndClick(".monaco-editor.no-user-select.vs" , newTab);
    await newTab.click(".checkbox-input" , newTab);
    await newTab.type(".checkbox-input" , solution , {delay : 20});
    await newTab.keyboard.down("Control");
    await newTab.keyboard.press("A");
    await newTab.keyboard.press("X");
    await newTab.keyboard.up("Control");
    await newTab.click(".monaco-editor.no-user-select.vs" , {delay : 60});
    await newTab.keyboard.down("Control");
    await newTab.keyboard.press("A");
    await newTab.keyboard.up("Control");
    await newTab.type(".monaco-editor.no-user-select.vs" , "#include <bits/stdc++.h>" , {delay : 20});
    await newTab.keyboard.press("Enter");
    await newTab.keyboard.down("Control");
    await newTab.keyboard.press("V");
    await newTab.keyboard.up("Control");
    await newTab.click(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled" , newTab);
    await waitAndClick(".ui-btn.ui-btn-normal.ui-btn-secondary.submission-wrapper-next-entity-btn.ui-btn-link.ui-btn-styled" , newTab);
}

async function waitAndClick(selector , newTab) {
    await newTab.waitForSelector(selector);
    await newTab.click(selector , {delay : 60});
}
