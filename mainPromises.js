let puppeteer = require("puppeteer");
let codeSolutions = require("./code");

let cPage;
let hackerRankLoginPageLink = "https://www.hackerrank.com/auth/login";
let email = "nalefe9781@robhung.com";
let password = "Sakshamjain@12";

let browserLaunchPromise = puppeteer.launch({
    headless : false,
    args : ["--start-maximized"],
    defaultViewport : null
})

browserLaunchPromise.then(function(browserObject) {
    let newTabOpenPromise = browserObject.newPage();
    return newTabOpenPromise;
})
.then(function(newTab) {
    cPage = newTab;
    let goToHackerRankLoginPagePromise = cPage.goto(hackerRankLoginPageLink)
    return goToHackerRankLoginPagePromise;
})
.then(function() {
    let waitForSelectorPromise = cPage.waitForSelector("#input-1");
    return waitForSelectorPromise;
})
.then(function() {
    let userNameTypePromise = cPage.type("#input-1" , email , {delay : 50});
    return userNameTypePromise;
})
.then(function() {
    let passwordTypePromise = cPage.type("#input-2" , password , {delay : 50});
    return passwordTypePromise;
})
.then(function() {
    let loginClickPromise = cPage.click("button[data-analytics='LoginPassword']" , {delay : 65});
    return loginClickPromise;
})
.then(function() {
    let waitAndClickPromise = waitAndClick("a[data-attr1='algorithms']" , cPage);
    return waitAndClickPromise;
})
.then(function() {
    let waitAndClickPromise = waitAndClick("input[value='warmup']" , cPage);
    return waitAndClickPromise;
})
.then(function() {
    let waitFor3SecondsPromise = cPage.waitForTimeout(3000);
    return waitFor3SecondsPromise;
})
.then(function() {
    let allQuestionSelectPromise = cPage.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled" , {delay : 55});
    return allQuestionSelectPromise;
})
.then(function(questionArr) {
    console.log(questionArr.length);
        let questionSolvePromise = allQuestionSolver(cPage , questionArr[0], codeSolutions.answers[0]);
        return questionSolvePromise;
})





function waitAndClick(selector , cPage) {
    return new Promise(function(resolve , reject) {
        let waitForSelectorPromise = cPage.waitForSelector(selector);
        waitForSelectorPromise.then(function() {
            let clickPromise = cPage.click(selector , {delay : 100});
            return clickPromise;
        })
        .then(function() {
            resolve();
        })
        .catch(function() {
            reject();
        })
    })
}




function allQuestionSolver(cPage , questionNumber , questionSolution) {
    return new Promise(function(resolve , reject) {
        let solveChallangeClickPromise = questionNumber.click();
        
            solveChallangeClickPromise.then(function() {
                let waitAndClickPromise = waitAndClick(".monaco-editor.no-user-select.vs" , cPage);
                    
                    waitAndClickPromise.then(function() {
                        let waitForSelector = cPage.waitForSelector(".checkbox-input");
                        return waitForSelector;
                    })
                    .then(function() {
                        let testAllCasesPromise = cPage.click(".checkbox-input" , {delay : 60});
                        return testAllCasesPromise;
                    })
                    .then(function() {
                        let solutionTypePromise = cPage.type(".input.text-area.custominput.auto-width" , questionSolution , {delay : 20});
                        return solutionTypePromise;
                    })
                    .then(function() {
                        let controlPressPromise = cPage.keyboard.down("Control" , {delay : 50});
                        return controlPressPromise;
                    })
                    .then(function() {
                        let APressPromise = cPage.keyboard.press("A" , {delay : 50});
                        return APressPromise;
                    })
                    .then(function() {
                        let XPressPromise = cPage.keyboard.press("X" , {delay : 50})
                        return XPressPromise;
                    })
                    .then(function() {
                        let controlUnPressPromise = cPage.keyboard.up("Control" , {delay : 50});
                        return controlUnPressPromise;
                    })
                    .then(function() {
                        let focusOnCodeAreaPromise = waitAndClick(".monaco-editor.no-user-select.vs" , cPage);
                        return focusOnCodeAreaPromise;
                    })
                    .then(function() {
                        let controlPressPromise = cPage.keyboard.down("Control" , {delay : 50});
                        return controlPressPromise;
                    })
                    .then(function() {
                        let APressPromise = cPage.keyboard.press("A" , {delay : 50});
                        return APressPromise;
                    })
                    .then(function() {
                        let VPressPromise = cPage.keyboard.press("V" , {delay : 50});
                        return VPressPromise;
                    })
                    .then(function() {
                        let controlUnPressPromise = cPage.keyboard.up("Control" , {delay : 50});
                        return controlUnPressPromise;
                    })
                    .then(function() {
                        let submitClickPromise = cPage.click(".hr-monaco-submit" , {delay : 100});
                        return submitClickPromise;
                    })
                    .then(function() {
                        resolve();
                    })
                    .catch(function() {
                        reject();
                    })
            })
    })
}
