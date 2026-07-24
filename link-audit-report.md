# Link Audit Report — roadmap-data.js

Generated: 2026-07-24T08:36:38.144Z

**Summary:** 300 checked, 91 broken (60 confirmed, 31 inconclusive/bot-challenge), 3 search-links, 17 duplicate-url groups, 3 youtube-unavailable, 100 channel-only, 9 redirected-to-different-domain.

This report only flags problems. No replacement URLs are suggested — each flagged entry needs a human-verified replacement before roadmap-data.js is edited.

**Note on "inconclusive/bot-challenge" entries:** several premium platforms (Udemy, Pluralsight) and Cloudflare/Vercel-protected sites (Guru99, WebPageTest, TryHackMe) return a bot-challenge page ("Just a moment...", "Attention Required", "Verify you are human", a Vercel checkpoint, etc.) to automated requests instead of the real page. That is not proof the underlying resource is dead — it means this script could not get past the challenge. These need a manual browser check, not an automated one, before being treated as broken. Genuine 404/410 "Page Not Found" responses (verified by inspecting real page content on a sample of them) are listed separately as confirmed.

## BROKEN — CONFIRMED (4xx / 5xx / timeout / DNS failure, not a bot-challenge page)

- **Software Testing Foundations** _(LinkedIn Learning)_
  - Category: Test Fundamentals & Design → Test Planning, Design, & Defect Management
  - URL: https://www.linkedin.com/learning/software-testing-foundations/
  - Problem: HTTP 404

- **Software Testing & Automation (University of Minnesota)** _(Coursera)_
  - Category: Test Fundamentals & Design → Test Planning, Design, & Defect Management
  - URL: https://www.coursera.org/learn/software-testing
  - Problem: HTTP 404

- **Testing Fundamentals** _(Pluralsight)_
  - Category: Test Fundamentals & Design → Test Planning, Design, & Defect Management
  - URL: https://www.pluralsight.com/paths/software-testing
  - Problem: HTTP 404

- **ISTQB Standard Glossary** _(ISTQB)_
  - Category: Test Fundamentals & Design → Test Planning, Design, & Defect Management
  - URL: https://www.glossary.istqb.org/
  - Problem: request failed — fetch failed

- **ISTQB Foundation Level Syllabus (PDF)** _(ISTQB)_
  - Category: Test Fundamentals & Design → Test Planning, Design, & Defect Management
  - URL: https://www.istqb.org/downloads/send/2-foundation-level-documents/281-istqb-ctfl-syllabus-2018-v3-1.html
  - Problem: HTTP 404 (final URL: https://istqb.org/downloads/send/2-foundation-level-documents/281-istqb-ctfl-syllabus-2018-v3-1.html)

- **Exploratory Testing Masterclass** _(Ministry of Testing)_
  - Category: Test Fundamentals & Design → Exploratory Testing
  - URL: https://www.youtube.com/@ministryoftesting
  - Problem: HTTP 404 (final URL: https://www.youtube.com/@ministryoftesting?cbrd=1&ucbcb=1)

- **Exploratory Testing Explained (James Bach)** _(James Bach / Satisfice)_
  - Category: Test Fundamentals & Design → Exploratory Testing
  - URL: https://www.satisfice.com/download/exploratory-testing
  - Problem: HTTP 404

- **Agile Testing Masterclass: Software Testing in Agile/Scrum** _(Udemy)_
  - Category: Test Fundamentals & Design → Agile Testing
  - URL: https://www.udemy.com/course/agile-testing-masterclass/
  - Problem: HTTP 404

- **Agile Software Testing (University of Virginia)** _(Coursera)_
  - Category: Test Fundamentals & Design → Agile Testing
  - URL: https://www.coursera.org/learn/agile-software-testing
  - Problem: HTTP 404

- **Agile Testing** _(LinkedIn Learning)_
  - Category: Test Fundamentals & Design → Agile Testing
  - URL: https://www.linkedin.com/learning/agile-testing/
  - Problem: HTTP 404

- **Agile Testing Fundamentals** _(Pluralsight)_
  - Category: Test Fundamentals & Design → Agile Testing
  - URL: https://www.pluralsight.com/courses/agile-testing-fundamentals
  - Problem: HTTP 404

- **Agile Testing Resources** _(Mountain Goat Software)_
  - Category: Test Fundamentals & Design → Agile Testing
  - URL: https://www.mountaingoatsoftware.com/agile/testing
  - Problem: HTTP 404

- **Automated Web Testing with Selenium** _(Pluralsight)_
  - Category: Test Automation (UI & Frameworks) → Selenium WebDriver (Advanced Framework Design)
  - URL: https://www.pluralsight.com/courses/automated-web-testing-selenium
  - Problem: HTTP 404

- **Selenium with Java** _(SDET-QA Techie)_
  - Category: Test Automation (UI & Frameworks) → Selenium WebDriver (Advanced Framework Design)
  - URL: https://www.youtube.com/@SDET-QATechie
  - Problem: HTTP 404 (final URL: https://www.youtube.com/@SDET-QATechie?cbrd=1&ucbcb=1)

- **Selenium Testing Tutorials** _(LambdaTest)_
  - Category: Test Automation (UI & Frameworks) → Selenium WebDriver (Advanced Framework Design)
  - URL: https://www.youtube.com/@LambdaTest
  - Problem: HTTP 404 (final URL: https://www.youtube.com/@LambdaTest?cbrd=1&ucbcb=1)

- **Playwright with JavaScript** _(Test Automation University)_
  - Category: Test Automation (UI & Frameworks) → Playwright
  - URL: https://testautomationu.applitools.com/playwright-tutorial/
  - Problem: HTTP 404

- **Playwright Essential Training** _(LinkedIn Learning)_
  - Category: Test Automation (UI & Frameworks) → Playwright
  - URL: https://www.linkedin.com/learning/playwright-essential-training/
  - Problem: HTTP 404

- **Playwright Testing Guide** _(LambdaTest)_
  - Category: Test Automation (UI & Frameworks) → Playwright
  - URL: https://www.youtube.com/@LambdaTest
  - Problem: HTTP 404 (final URL: https://www.youtube.com/@LambdaTest?cbrd=1&ucbcb=1)

- **Cypress Essential Training** _(LinkedIn Learning)_
  - Category: Test Automation (UI & Frameworks) → Cypress
  - URL: https://www.linkedin.com/learning/cypress-essential-training/
  - Problem: HTTP 404

- **Cypress Testing Tutorials** _(LambdaTest)_
  - Category: Test Automation (UI & Frameworks) → Cypress
  - URL: https://www.youtube.com/@LambdaTest
  - Problem: HTTP 404 (final URL: https://www.youtube.com/@LambdaTest?cbrd=1&ucbcb=1)

- **Awesome Cypress (GitHub)** _(GitHub)_
  - Category: Test Automation (UI & Frameworks) → Cypress
  - URL: https://github.com/cypress-io/awesome-cypress
  - Problem: HTTP 404

- **Appium Mobile Automation Playlist** _(SDET-QA Techie)_
  - Category: Test Automation (UI & Frameworks) → Mobile Test Automation
  - URL: https://www.youtube.com/@SDET-QATechie
  - Problem: HTTP 404 (final URL: https://www.youtube.com/@SDET-QATechie?cbrd=1&ucbcb=1)

- **Mobile App Testing with Appium** _(LambdaTest)_
  - Category: Test Automation (UI & Frameworks) → Mobile Test Automation
  - URL: https://www.youtube.com/@LambdaTest
  - Problem: HTTP 404 (final URL: https://www.youtube.com/@LambdaTest?cbrd=1&ucbcb=1)

- **API Testing with Java** _(Test Automation University)_
  - Category: API & Integration Testing → API Testing Fundamentals (REST & SOAP)
  - URL: https://testautomationu.applitools.com/apitesting/
  - Problem: HTTP 404

- **RestAssured Tutorial** _(SDET-QA Techie)_
  - Category: API & Integration Testing → API Testing Fundamentals (REST & SOAP)
  - URL: https://www.youtube.com/@SDET-QATechie
  - Problem: HTTP 404 (final URL: https://www.youtube.com/@SDET-QATechie?cbrd=1&ucbcb=1)

- **Contract Testing with Pact** _(Pluralsight)_
  - Category: API & Integration Testing → Contract Testing
  - URL: https://www.pluralsight.com/courses/contract-testing-pact
  - Problem: HTTP 404

- **API Contract Testing** _(LinkedIn Learning)_
  - Category: API & Integration Testing → Contract Testing
  - URL: https://www.linkedin.com/learning/api-contract-testing/
  - Problem: HTTP 404

- **Contract Testing Talks** _(Ministry of Testing)_
  - Category: API & Integration Testing → Contract Testing
  - URL: https://www.youtube.com/@ministryoftesting
  - Problem: HTTP 404 (final URL: https://www.youtube.com/@ministryoftesting?cbrd=1&ucbcb=1)

- **Awesome Pact (GitHub)** _(GitHub)_
  - Category: API & Integration Testing → Contract Testing
  - URL: https://github.com/pact-foundation/awesome-pact
  - Problem: HTTP 404

- **Testing GraphQL APIs** _(Pluralsight)_
  - Category: API & Integration Testing → GraphQL Testing
  - URL: https://www.pluralsight.com/courses/graphql-testing
  - Problem: HTTP 404

- **CI/CD with Azure DevOps** _(Pluralsight)_
  - Category: Quality Engineering & Pipeline Integration → CI/CD Integration & API Pipeline Automation
  - URL: https://www.pluralsight.com/paths/azure-devops-engineering
  - Problem: HTTP 404

- **Continuous Delivery & DevOps (University of Virginia)** _(Coursera)_
  - Category: Quality Engineering & Pipeline Integration → CI/CD Integration & API Pipeline Automation
  - URL: https://www.coursera.org/learn/continuous-delivery-devops
  - Problem: HTTP 404

- **Unit Testing & Test-Driven Development** _(LinkedIn Learning)_
  - Category: Quality Engineering & Pipeline Integration → Shift-Left Testing & Code Quality
  - URL: https://www.linkedin.com/learning/unit-testing-and-test-driven-development/
  - Problem: HTTP 404

- **TestNG Documentation** _(Testng)_
  - Category: Quality Engineering & Pipeline Integration → Shift-Left Testing & Code Quality
  - URL: https://testng.org/doc/
  - Problem: HTTP 404

- **Application Monitoring & Observability** _(Pluralsight)_
  - Category: Quality Engineering & Pipeline Integration → Test Observability
  - URL: https://www.pluralsight.com/courses/application-monitoring-observability
  - Problem: HTTP 404

- **Monitoring & Observability** _(LinkedIn Learning)_
  - Category: Quality Engineering & Pipeline Integration → Test Observability
  - URL: https://www.linkedin.com/learning/monitoring-and-observability/
  - Problem: HTTP 404

- **Load Testing with k6** _(Pluralsight)_
  - Category: Performance Engineering → k6
  - URL: https://www.pluralsight.com/courses/load-testing-k6
  - Problem: HTTP 404

- **k6 Load Testing** _(LinkedIn Learning)_
  - Category: Performance Engineering → k6
  - URL: https://www.linkedin.com/learning/k6-load-testing/
  - Problem: HTTP 404

- **Load Testing with JMeter** _(Pluralsight)_
  - Category: Performance Engineering → JMeter
  - URL: https://www.pluralsight.com/courses/jmeter-load-testing
  - Problem: HTTP 404

- **JMeter Essential Training** _(LinkedIn Learning)_
  - Category: Performance Engineering → JMeter
  - URL: https://www.linkedin.com/learning/jmeter-essential-training/
  - Problem: HTTP 404

- **Performance Testing & Engineering** _(Pluralsight)_
  - Category: Performance Engineering → Performance Analysis & Root Cause Identification
  - URL: https://www.pluralsight.com/paths/performance-testing
  - Problem: HTTP 404

- **OWASP Top 10** _(Pluralsight)_
  - Category: Security Testing → OWASP Top 10 & Penetration Testing Basics
  - URL: https://www.pluralsight.com/courses/owasp-top10-web-security
  - Problem: HTTP 404

- **Ethical Hacking & Penetration Testing** _(LinkedIn Learning)_
  - Category: Security Testing → OWASP Top 10 & Penetration Testing Basics
  - URL: https://www.linkedin.com/learning/ethical-hacking/
  - Problem: HTTP 404

- **FREE** _(Web Security Academy (PortSwigger))_
  - Category: Security Testing → OWASP Top 10 & Penetration Testing Basics
  - URL: https://portswigger.net/web-security
  - Problem: HTTP 404

- **DevSecOps Fundamentals** _(Pluralsight)_
  - Category: Security Testing → Security Test Automation
  - URL: https://www.pluralsight.com/courses/devsecops-fundamentals
  - Problem: HTTP 404

- **DevSecOps** _(LinkedIn Learning)_
  - Category: Security Testing → Security Test Automation
  - URL: https://www.linkedin.com/learning/devsecops/
  - Problem: HTTP 404

- **AI for Software Testing** _(LinkedIn Learning)_
  - Category: AI-Assisted Testing → AI Tools for Testers & Prompt Engineering for QA
  - URL: https://www.linkedin.com/learning/ai-for-software-testing/
  - Problem: HTTP 404

- **AI-Assisted Testing** _(Pluralsight)_
  - Category: AI-Assisted Testing → AI Tools for Testers & Prompt Engineering for QA
  - URL: https://www.pluralsight.com/courses/ai-assisted-testing
  - Problem: HTTP 404

- **Machine Learning Testing (DeepLearning.AI)** _(Coursera)_
  - Category: AI-Assisted Testing → Testing AI Systems
  - URL: https://www.coursera.org/learn/machine-learning-testing
  - Problem: HTTP 404

- **Testing Machine Learning Models** _(LinkedIn Learning)_
  - Category: AI-Assisted Testing → Testing AI Systems
  - URL: https://www.linkedin.com/learning/testing-machine-learning-models/
  - Problem: HTTP 404

- **ISTQB AI Testing Syllabus (PDF)** _(ISTQB)_
  - Category: AI-Assisted Testing → Testing AI Systems
  - URL: https://www.istqb.org/certifications/ai-testing
  - Problem: HTTP 404 (final URL: https://istqb.org/certifications/ai-testing)

- **AI Fairness Toolkit** _(AIF360)_
  - Category: AI-Assisted Testing → Testing AI Systems
  - URL: https://aif360.res.ibm.com/
  - Problem: request failed — fetch failed

- **Test Management** _(LinkedIn Learning)_
  - Category: Test Leadership & Delivery → Test Strategy & Stakeholder Communication
  - URL: https://www.linkedin.com/learning/test-management/
  - Problem: HTTP 404

- **Test Management & Strategy** _(Pluralsight)_
  - Category: Test Leadership & Delivery → Test Strategy & Stakeholder Communication
  - URL: https://www.pluralsight.com/courses/test-management-strategy
  - Problem: HTTP 404

- **Leadership Talks** _(Ministry of Testing)_
  - Category: Test Leadership & Delivery → Test Strategy & Stakeholder Communication
  - URL: https://www.youtube.com/@ministryoftesting
  - Problem: HTTP 404 (final URL: https://www.youtube.com/@ministryoftesting?cbrd=1&ucbcb=1)

- **Coaching & Mentoring** _(LinkedIn Learning)_
  - Category: Test Leadership & Delivery → Coaching and Mentoring
  - URL: https://www.linkedin.com/learning/coaching-and-mentoring/
  - Problem: HTTP 404

- **Leadership & Management** _(Pluralsight)_
  - Category: Test Leadership & Delivery → Coaching and Mentoring
  - URL: https://www.pluralsight.com/paths/leadership-and-management
  - Problem: HTTP 404

- **Leadership & Management (University of Michigan)** _(Coursera)_
  - Category: Test Leadership & Delivery → Coaching and Mentoring
  - URL: https://www.coursera.org/specializations/leading-people-and-teams
  - Problem: HTTP 404

- **Mentoring Programs** _(Ministry of Testing)_
  - Category: Test Leadership & Delivery → Coaching and Mentoring
  - URL: https://www.youtube.com/@ministryoftesting
  - Problem: HTTP 404 (final URL: https://www.youtube.com/@ministryoftesting?cbrd=1&ucbcb=1)

- **Test Leadership Congress Resources** _(Test Leadership Congress)_
  - Category: Test Leadership & Delivery → Coaching and Mentoring
  - URL: https://testleadershipcongress.com/
  - Problem: request failed — fetch failed


## BROKEN — INCONCLUSIVE (bot/CDN challenge — needs manual browser check)

- **Software Testing Masterclass - From Manual to Automation** _(Udemy)_
  - Category: Test Fundamentals & Design → Test Planning, Design, & Defect Management
  - URL: https://www.udemy.com/course/software-testing-masterclass/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **ISTQB Foundation Level Certification Training** _(Udemy)_
  - Category: Test Fundamentals & Design → Test Planning, Design, & Defect Management
  - URL: https://www.udemy.com/course/istqb-foundation-level/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **Software Testing Tutorial** _(Guru99)_
  - Category: Test Fundamentals & Design → Test Planning, Design, & Defect Management
  - URL: https://www.guru99.com/software-testing.html
  - Problem: HTTP 403 — page content matched bot-challenge marker "attention required"

- **Exploratory Testing: Find More Bugs, Write Better Tests** _(Udemy)_
  - Category: Test Fundamentals & Design → Exploratory Testing
  - URL: https://www.udemy.com/course/exploratory-testing/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **Selenium WebDriver with Java - Framework Design by Rahul Shetty** _(Udemy)_
  - Category: Test Automation (UI & Frameworks) → Selenium WebDriver (Advanced Framework Design)
  - URL: https://www.udemy.com/course/selenium-real-time-projectinterview-prep/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **Selenium WebDriver with Python - Automation Framework** _(Udemy)_
  - Category: Test Automation (UI & Frameworks) → Selenium WebDriver (Advanced Framework Design)
  - URL: https://www.udemy.com/course/selenium-webdriver-with-python/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **Playwright with Python by Rahul Shetty** _(Udemy)_
  - Category: Test Automation (UI & Frameworks) → Playwright
  - URL: https://www.udemy.com/course/playwright-python/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **Cypress: Web Automation Testing from Zero to Hero by Rahul Shetty** _(Udemy)_
  - Category: Test Automation (UI & Frameworks) → Cypress
  - URL: https://www.udemy.com/course/cypress-tutorial/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **Cypress End-to-End Testing - The Complete Guide** _(Udemy)_
  - Category: Test Automation (UI & Frameworks) → Cypress
  - URL: https://www.udemy.com/course/cypress-end-to-end-testing/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **Appium - Mobile Automation Testing (Android/iOS) with Java by Rahul Shetty** _(Udemy)_
  - Category: Test Automation (UI & Frameworks) → Mobile Test Automation
  - URL: https://www.udemy.com/course/appium-selenium-for-mobile-automated-testing/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **Appium with Python - Mobile Automation** _(Udemy)_
  - Category: Test Automation (UI & Frameworks) → Mobile Test Automation
  - URL: https://www.udemy.com/course/appium-python/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **REST API Testing with RestAssured** _(Udemy)_
  - Category: API & Integration Testing → API Testing Fundamentals (REST & SOAP)
  - URL: https://www.udemy.com/course/rest-api-automation-testing-rest-assured/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **Postman: The Complete Guide** _(Udemy)_
  - Category: API & Integration Testing → API Testing Fundamentals (REST & SOAP)
  - URL: https://www.udemy.com/course/postman-the-complete-guide/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **Contract Testing with Pact in Java and JavaScript** _(Udemy)_
  - Category: API & Integration Testing → Contract Testing
  - URL: https://www.udemy.com/course/contract-testing-with-pact/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **Testing GraphQL APIs with Postman and RestAssured** _(Udemy)_
  - Category: API & Integration Testing → GraphQL Testing
  - URL: https://www.udemy.com/course/graphql-testing/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **Jenkins, Docker, Git, CI/CD for Test Automation Engineers by Karthik KK** _(Udemy)_
  - Category: Quality Engineering & Pipeline Integration → CI/CD Integration & API Pipeline Automation
  - URL: https://www.udemy.com/course/jenkins-docker-ci-cd/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **GitHub Actions - The Complete Guide** _(Udemy)_
  - Category: Quality Engineering & Pipeline Integration → CI/CD Integration & API Pipeline Automation
  - URL: https://www.udemy.com/course/github-actions-the-complete-guide/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **DevOps for QA: Unit Testing, TDD, & Code Coverage Fundamentals** _(Udemy)_
  - Category: Quality Engineering & Pipeline Integration → Shift-Left Testing & Code Quality
  - URL: https://www.udemy.com/course/devops-for-qa/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **Log Analysis, Monitoring, and Metrics for QA Engineers** _(Udemy)_
  - Category: Quality Engineering & Pipeline Integration → Test Observability
  - URL: https://www.udemy.com/course/log-analysis-monitoring/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **Performance Testing with k6: Zero to Hero** _(Udemy)_
  - Category: Performance Engineering → k6
  - URL: https://www.udemy.com/course/k6-performance-testing/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **JMeter - Performance & Load Testing Masterclass** _(Udemy)_
  - Category: Performance Engineering → JMeter
  - URL: https://www.udemy.com/course/jmeter-performance-testing/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **Performance Engineering & Metrics Analysis (JMeter/k6)** _(Udemy)_
  - Category: Performance Engineering → Performance Analysis & Root Cause Identification
  - URL: https://www.udemy.com/course/performance-engineering/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **WebPageTest** _(Webpagetest)_
  - Category: Performance Engineering → Performance Analysis & Root Cause Identification
  - URL: https://www.webpagetest.org/
  - Problem: HTTP 403 — page content matched bot-challenge marker "verify you are human"

- **Website Security & Penetration Testing for QA Engineers** _(Udemy)_
  - Category: Security Testing → OWASP Top 10 & Penetration Testing Basics
  - URL: https://www.udemy.com/course/website-security-penetration-testing/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **OWASP Top 10 - Web Security Fundamentals** _(Udemy)_
  - Category: Security Testing → OWASP Top 10 & Penetration Testing Basics
  - URL: https://www.udemy.com/course/owasp-top-10-web-security/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **Free Security Labs** _(TryHackMe)_
  - Category: Security Testing → OWASP Top 10 & Penetration Testing Basics
  - URL: https://tryhackme.com/
  - Problem: HTTP 429 — page content matched bot-challenge marker "security check"

- **DevSecOps: Automated Security Testing in CI/CD** _(Udemy)_
  - Category: Security Testing → Security Test Automation
  - URL: https://www.udemy.com/course/devsecops-automated-security/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **Artificial Intelligence (AI) for Software Testing Masterclass** _(Udemy)_
  - Category: AI-Assisted Testing → AI Tools for Testers & Prompt Engineering for QA
  - URL: https://www.udemy.com/course/ai-for-software-testing/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **Testing AI and Machine Learning Systems Fundamentals** _(Udemy)_
  - Category: AI-Assisted Testing → Testing AI Systems
  - URL: https://www.udemy.com/course/testing-ai-ml-systems/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **Test Manager / QA Lead Complete Roadmap** _(Udemy)_
  - Category: Test Leadership & Delivery → Test Strategy & Stakeholder Communication
  - URL: https://www.udemy.com/course/test-manager-qa-lead/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"

- **Engineering Leadership: Mentoring and Coaching Tech Teams** _(Udemy)_
  - Category: Test Leadership & Delivery → Coaching and Mentoring
  - URL: https://www.udemy.com/course/engineering-leadership/
  - Problem: HTTP 403 — page content matched bot-challenge marker "just a moment"


## REDIRECTED TO DIFFERENT DOMAIN (possible dead-site takeover)

- **Azure DevOps Pipelines** _(Microsoft)_
  - Category: Quality Engineering & Pipeline Integration → CI/CD Integration & API Pipeline Automation
  - URL: https://docs.microsoft.com/en-us/azure/devops/pipelines/
  - Problem: redirects from docs.microsoft.com to learn.microsoft.com (HTTP 200) — final URL: https://learn.microsoft.com/en-us/azure/devops/pipelines/?view=azure-devops

- **SonarQube Community Documentation** _(Sonarqube)_
  - Category: Quality Engineering & Pipeline Integration → Shift-Left Testing & Code Quality
  - URL: https://docs.sonarqube.org/latest/
  - Problem: redirects from docs.sonarqube.org to docs.sonarsource.com (HTTP 200) — final URL: https://docs.sonarsource.com/

- **JUnit 5 User Guide** _(Junit)_
  - Category: Quality Engineering & Pipeline Integration → Shift-Left Testing & Code Quality
  - URL: https://junit.org/junit5/docs/current/user-guide/
  - Problem: redirects from junit.org to docs.junit.org (HTTP 200) — final URL: https://docs.junit.org/6.1.2/overview.html

- **Grafana k6 Core Documentation** _(K6)_
  - Category: Performance Engineering → k6
  - URL: https://k6.io/docs/
  - Problem: redirects from k6.io to grafana.com (HTTP 200) — final URL: https://grafana.com/docs/k6/latest/

- **k6 Cloud Documentation** _(K6)_
  - Category: Performance Engineering → k6
  - URL: https://k6.io/docs/cloud/
  - Problem: redirects from k6.io to grafana.com (HTTP 200) — final URL: https://grafana.com/docs/grafana-cloud/testing/k6/

- **k6 Examples & Templates** _(K6)_
  - Category: Performance Engineering → k6
  - URL: https://k6.io/docs/examples/
  - Problem: redirects from k6.io to grafana.com (HTTP 200) — final URL: https://grafana.com/docs/k6/latest/examples/

- **Performance Testing Guide (Gatling)** _(Gatling)_
  - Category: Performance Engineering → Performance Analysis & Root Cause Identification
  - URL: https://gatling.io/docs/gatling/
  - Problem: redirects from gatling.io to docs.gatling.io (HTTP 200) — final URL: https://docs.gatling.io/

- **Trivy Security Scanner** _(Github)_
  - Category: Security Testing → Security Test Automation
  - URL: https://aquasecurity.github.io/trivy/
  - Problem: redirects from aquasecurity.github.io to trivy.dev (HTTP 200) — final URL: http://trivy.dev/

- **OpenAI API Documentation** _(Openai)_
  - Category: AI-Assisted Testing → AI Tools for Testers & Prompt Engineering for QA
  - URL: https://platform.openai.com/docs/
  - Problem: redirects from platform.openai.com to developers.openai.com (HTTP 200) — final URL: https://developers.openai.com/api/docs


## YOUTUBE VIDEO UNAVAILABLE (detected via page content)

- **Software Testing Tutorial for Beginners** _(Guru99)_
  - Category: Test Fundamentals & Design → Test Planning, Design, & Defect Management
  - URL: https://www.youtube.com/watch?v=5JUdVXVq5nE
  - Problem: page content matched "Video unavailable" (HTTP 200)

- **Software Testing Full Course** _(Edureka)_
  - Category: Test Fundamentals & Design → Test Planning, Design, & Defect Management
  - URL: https://www.youtube.com/watch?v=5JUdVXVq5nE
  - Problem: page content matched "Video unavailable" (HTTP 200)

- **Manual Testing Full Course** _(Intellipaat)_
  - Category: Test Fundamentals & Design → Test Planning, Design, & Defect Management
  - URL: https://www.youtube.com/watch?v=5JUdVXVq5nE
  - Problem: page content matched "Video unavailable" (HTTP 200)


## SEARCH-QUERY LINKS (not a real resource)

- **Exploratory Testing Techniques** _(James Bach)_
  - Category: Test Fundamentals & Design → Exploratory Testing
  - URL: https://www.youtube.com/results?search_query=james+bach+exploratory+testing
  - Problem: URL is a YouTube search-results page, not a direct resource link

- **Agile Testing Talks** _(Lisa Crispin)_
  - Category: Test Fundamentals & Design → Agile Testing
  - URL: https://www.youtube.com/results?search_query=lisa+crispin+agile+testing
  - Problem: URL is a YouTube search-results page, not a direct resource link

- **Modern Testing** _(Alan Page)_
  - Category: Test Leadership & Delivery → Test Strategy & Stakeholder Communication
  - URL: https://www.youtube.com/results?search_query=alan+page+modern+testing
  - Problem: URL is a YouTube search-results page, not a direct resource link


## DUPLICATE URLS (same link reused for different titles)

- URL: https://www.youtube.com/watch?v=5JUdVXVq5nE
  - **Software Testing Tutorial for Beginners** _(Guru99)_ — Test Fundamentals & Design → Test Planning, Design, & Defect Management
  - **Software Testing Full Course** _(Edureka)_ — Test Fundamentals & Design → Test Planning, Design, & Defect Management
  - **Manual Testing Full Course** _(Intellipaat)_ — Test Fundamentals & Design → Test Planning, Design, & Defect Management

- URL: https://www.youtube.com/@NaveenAutomationLabs
  - **Manual Testing Concepts** _(Naveen AutomationLabs)_ — Test Fundamentals & Design → Test Planning, Design, & Defect Management
  - **Selenium Java Framework From Scratch** _(Naveen AutomationLabs)_ — Test Automation (UI & Frameworks) → Selenium WebDriver (Advanced Framework Design)
  - **Appium with Java** _(Naveen AutomationLabs)_ — Test Automation (UI & Frameworks) → Mobile Test Automation
  - **JMeter Performance Testing** _(Naveen AutomationLabs)_ — Performance Engineering → JMeter

- URL: https://www.ministryoftesting.com/dojo/lessons
  - **Testing Essentials** _(Ministry of Testing)_ — Test Fundamentals & Design → Test Planning, Design, & Defect Management
  - **Leadership Resources** _(Ministry of Testing)_ — Test Leadership & Delivery → Test Strategy & Stakeholder Communication
  - **Mentoring Guide** _(Ministry of Testing)_ — Test Leadership & Delivery → Coaching and Mentoring
  - **Grow Your QA Career (Free eBook)** _(Ministry of Testing)_ — Test Leadership & Delivery → Coaching and Mentoring

- URL: https://www.youtube.com/@ministryoftesting
  - **Exploratory Testing Masterclass** _(Ministry of Testing)_ — Test Fundamentals & Design → Exploratory Testing
  - **Contract Testing Talks** _(Ministry of Testing)_ — API & Integration Testing → Contract Testing
  - **Leadership Talks** _(Ministry of Testing)_ — Test Leadership & Delivery → Test Strategy & Stakeholder Communication
  - **Mentoring Programs** _(Ministry of Testing)_ — Test Leadership & Delivery → Coaching and Mentoring

- URL: https://testautomationu.applitools.com/
  - **Exploratory Testing** _(Test Automation University)_ — Test Fundamentals & Design → Exploratory Testing
  - **Free Selenium Courses** _(Test Automation University)_ — Test Automation (UI & Frameworks) → Selenium WebDriver (Advanced Framework Design)

- URL: https://www.youtube.com/@angiejones
  - **Exploratory Testing Strategies** _(Angie Jones)_ — Test Fundamentals & Design → Exploratory Testing
  - **Test Leadership** _(Angie Jones)_ — Test Leadership & Delivery → Test Strategy & Stakeholder Communication

- URL: https://www.youtube.com/@SDET-QATechie
  - **Selenium with Java** _(SDET-QA Techie)_ — Test Automation (UI & Frameworks) → Selenium WebDriver (Advanced Framework Design)
  - **Appium Mobile Automation Playlist** _(SDET-QA Techie)_ — Test Automation (UI & Frameworks) → Mobile Test Automation
  - **RestAssured Tutorial** _(SDET-QA Techie)_ — API & Integration Testing → API Testing Fundamentals (REST & SOAP)

- URL: https://www.youtube.com/@LambdaTest
  - **Selenium Testing Tutorials** _(LambdaTest)_ — Test Automation (UI & Frameworks) → Selenium WebDriver (Advanced Framework Design)
  - **Playwright Testing Guide** _(LambdaTest)_ — Test Automation (UI & Frameworks) → Playwright
  - **Cypress Testing Tutorials** _(LambdaTest)_ — Test Automation (UI & Frameworks) → Cypress
  - **Mobile App Testing with Appium** _(LambdaTest)_ — Test Automation (UI & Frameworks) → Mobile Test Automation

- URL: https://www.youtube.com/@RaghavPal
  - **Selenium WebDriver** _(Automation Step by Step)_ — Test Automation (UI & Frameworks) → Selenium WebDriver (Advanced Framework Design)
  - **Playwright Tutorial** _(Automation Step by Step)_ — Test Automation (UI & Frameworks) → Playwright
  - **Cypress Fast-Track Playlist** _(Automation Step by Step)_ — Test Automation (UI & Frameworks) → Cypress
  - **Appium Tutorial** _(Automation Step by Step)_ — Test Automation (UI & Frameworks) → Mobile Test Automation
  - **API Testing with Postman** _(Automation Step by Step)_ — API & Integration Testing → API Testing Fundamentals (REST & SOAP)
  - **Pact Tutorial** _(Automation Step by Step)_ — API & Integration Testing → Contract Testing
  - **CI/CD Pipeline Tutorial** _(Automation Step by Step)_ — Quality Engineering & Pipeline Integration → CI/CD Integration & API Pipeline Automation
  - **TDD Tutorial** _(Automation Step by Step)_ — Quality Engineering & Pipeline Integration → Shift-Left Testing & Code Quality
  - **k6 Performance Testing Masterclass** _(Automation Step by Step)_ — Performance Engineering → k6
  - **JMeter Tutorial** _(Automation Step by Step)_ — Performance Engineering → JMeter
  - **AI Testing Tools** _(Automation Step by Step)_ — AI-Assisted Testing → AI Tools for Testers & Prompt Engineering for QA

- URL: https://www.youtube.com/@TheTestingAcademy
  - **Selenium with Python** _(The Testing Academy)_ — Test Automation (UI & Frameworks) → Selenium WebDriver (Advanced Framework Design)
  - **Playwright with JavaScript** _(The Testing Academy)_ — Test Automation (UI & Frameworks) → Playwright
  - **Cypress Complete Course** _(The Testing Academy)_ — Test Automation (UI & Frameworks) → Cypress
  - **Appium Complete Course** _(The Testing Academy)_ — Test Automation (UI & Frameworks) → Mobile Test Automation
  - **API Testing Complete Course** _(The Testing Academy)_ — API & Integration Testing → API Testing Fundamentals (REST & SOAP)
  - **Contract Testing Tutorial** _(The Testing Academy)_ — API & Integration Testing → Contract Testing
  - **GraphQL API Testing** _(The Testing Academy)_ — API & Integration Testing → GraphQL Testing
  - **CI/CD for Testers** _(The Testing Academy)_ — Quality Engineering & Pipeline Integration → CI/CD Integration & API Pipeline Automation
  - **Shift Left Testing** _(The Testing Academy)_ — Quality Engineering & Pipeline Integration → Shift-Left Testing & Code Quality
  - **Test Observability** _(The Testing Academy)_ — Quality Engineering & Pipeline Integration → Test Observability
  - **k6 Complete Course** _(The Testing Academy)_ — Performance Engineering → k6
  - **JMeter Complete Course** _(The Testing Academy)_ — Performance Engineering → JMeter
  - **Performance Engineering** _(The Testing Academy)_ — Performance Engineering → Performance Analysis & Root Cause Identification
  - **Security Testing for QA** _(The Testing Academy)_ — Security Testing → OWASP Top 10 & Penetration Testing Basics
  - **Security Automation** _(The Testing Academy)_ — Security Testing → Security Test Automation
  - **AI in Software Testing Playlist** _(The Testing Academy)_ — AI-Assisted Testing → AI Tools for Testers & Prompt Engineering for QA
  - **Testing AI/ML Systems** _(The Testing Academy)_ — AI-Assisted Testing → Testing AI Systems
  - **QA Leadership** _(The Testing Academy)_ — Test Leadership & Delivery → Test Strategy & Stakeholder Communication
  - **QA Career Growth** _(The Testing Academy)_ — Test Leadership & Delivery → Coaching and Mentoring

- URL: https://www.youtube.com/@TestersTalk
  - **Playwright Tutorial Full Course** _(Testers Talk)_ — Test Automation (UI & Frameworks) → Playwright
  - **Cypress Tutorial** _(Testers Talk)_ — Test Automation (UI & Frameworks) → Cypress
  - **k6 Performance Testing** _(Testers Talk)_ — Performance Engineering → k6
  - **AI for Testers** _(Testers Talk)_ — AI-Assisted Testing → AI Tools for Testers & Prompt Engineering for QA

- URL: https://www.youtube.com/@programmingwithmosh
  - **Playwright Tutorial** _(Programming with Mosh)_ — Test Automation (UI & Frameworks) → Playwright
  - **Cypress Tutorial** _(Programming with Mosh)_ — Test Automation (UI & Frameworks) → Cypress
  - **Mobile Testing** _(Programming with Mosh)_ — Test Automation (UI & Frameworks) → Mobile Test Automation
  - **API Testing Tutorial** _(Programming with Mosh)_ — API & Integration Testing → API Testing Fundamentals (REST & SOAP)
  - **GraphQL Tutorial** _(Programming with Mosh)_ — API & Integration Testing → GraphQL Testing
  - **Unit Testing Tutorial** _(Programming with Mosh)_ — Quality Engineering & Pipeline Integration → Shift-Left Testing & Code Quality

- URL: https://www.youtube.com/@guru99com
  - **API Testing Tutorial** _(Guru99)_ — API & Integration Testing → API Testing Fundamentals (REST & SOAP)
  - **JMeter Tutorial** _(Guru99)_ — Performance Engineering → JMeter

- URL: https://www.youtube.com/@freecodecamp
  - **GraphQL Full Course** _(FreeCodeCamp)_ — API & Integration Testing → GraphQL Testing
  - **DevOps Full Course** _(FreeCodeCamp)_ — Quality Engineering & Pipeline Integration → CI/CD Integration & API Pipeline Automation
  - **TDD Full Course** _(FreeCodeCamp)_ — Quality Engineering & Pipeline Integration → Shift-Left Testing & Code Quality
  - **Monitoring with Prometheus & Grafana** _(FreeCodeCamp)_ — Quality Engineering & Pipeline Integration → Test Observability
  - **Performance Engineering** _(FreeCodeCamp)_ — Performance Engineering → Performance Analysis & Root Cause Identification
  - **Ethical Hacking Full Course** _(FreeCodeCamp)_ — Security Testing → OWASP Top 10 & Penetration Testing Basics
  - **DevSecOps Full Course** _(FreeCodeCamp)_ — Security Testing → Security Test Automation
  - **AI for Developers** _(FreeCodeCamp)_ — AI-Assisted Testing → AI Tools for Testers & Prompt Engineering for QA
  - **Engineering Management** _(FreeCodeCamp)_ — Test Leadership & Delivery → Coaching and Mentoring

- URL: https://www.youtube.com/@TechWorldwithNana
  - **Jenkins Tutorial** _(TechWorld with Nana)_ — Quality Engineering & Pipeline Integration → CI/CD Integration & API Pipeline Automation
  - **DevOps for Testers** _(TechWorld with Nana)_ — Quality Engineering & Pipeline Integration → Shift-Left Testing & Code Quality
  - **Monitoring & Observability** _(TechWorld with Nana)_ — Quality Engineering & Pipeline Integration → Test Observability
  - **k6 Tutorial** _(TechWorld with Nana)_ — Performance Engineering → k6
  - **Performance Testing** _(TechWorld with Nana)_ — Performance Engineering → Performance Analysis & Root Cause Identification
  - **DevSecOps Tutorial** _(TechWorld with Nana)_ — Security Testing → Security Test Automation

- URL: https://www.youtube.com/@hnasr
  - **System Design & Observability** _(Hussein Nasser)_ — Quality Engineering & Pipeline Integration → Test Observability
  - **System Performance** _(Hussein Nasser)_ — Performance Engineering → Performance Analysis & Root Cause Identification

- URL: https://github.com/k6io/awesome-k6
  - **Awesome k6 (GitHub)** _(GitHub)_ — Performance Engineering → k6
  - **Awesome-k6 Tool Suite (GitHub)** _(GitHub)_ — Performance Engineering → Performance Analysis & Root Cause Identification

## CHANNEL-ONLY LINKS (informational — works fine, just not video-specific)

- **Complete Manual Testing Course** _(Software Testing Mentor)_
  - Category: Test Fundamentals & Design → Test Planning, Design, & Defect Management
  - URL: https://www.youtube.com/@SoftwareTestingMentor
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Manual Testing Concepts** _(Naveen AutomationLabs)_
  - Category: Test Fundamentals & Design → Test Planning, Design, & Defect Management
  - URL: https://www.youtube.com/@NaveenAutomationLabs
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Exploratory Testing Masterclass** _(Ministry of Testing)_
  - Category: Test Fundamentals & Design → Exploratory Testing
  - URL: https://www.youtube.com/@ministryoftesting
  - Info: links to a channel, not a specific resource (HTTP 404)

- **Exploratory Testing Strategies** _(Angie Jones)_
  - Category: Test Fundamentals & Design → Exploratory Testing
  - URL: https://www.youtube.com/@angiejones
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Agile Testing Alliance** _(YouTube)_
  - Category: Test Fundamentals & Design → Agile Testing
  - URL: https://www.youtube.com/@AgileTestingAlliance
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Agile Testing Best Practices** _(Scrum.org)_
  - Category: Test Fundamentals & Design → Agile Testing
  - URL: https://www.youtube.com/@scrumorg
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Testing in Agile** _(Agile for All)_
  - Category: Test Fundamentals & Design → Agile Testing
  - URL: https://www.youtube.com/@AgileForAll
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Selenium Java Framework From Scratch** _(Naveen AutomationLabs)_
  - Category: Test Automation (UI & Frameworks) → Selenium WebDriver (Advanced Framework Design)
  - URL: https://www.youtube.com/@NaveenAutomationLabs
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Selenium Complete Course** _(Rahul Shetty Academy)_
  - Category: Test Automation (UI & Frameworks) → Selenium WebDriver (Advanced Framework Design)
  - URL: https://www.youtube.com/@RahulShettyAcademy
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Selenium with Java** _(SDET-QA Techie)_
  - Category: Test Automation (UI & Frameworks) → Selenium WebDriver (Advanced Framework Design)
  - URL: https://www.youtube.com/@SDET-QATechie
  - Info: links to a channel, not a specific resource (HTTP 404)

- **Selenium Testing Tutorials** _(LambdaTest)_
  - Category: Test Automation (UI & Frameworks) → Selenium WebDriver (Advanced Framework Design)
  - URL: https://www.youtube.com/@LambdaTest
  - Info: links to a channel, not a specific resource (HTTP 404)

- **Selenium WebDriver** _(Automation Step by Step)_
  - Category: Test Automation (UI & Frameworks) → Selenium WebDriver (Advanced Framework Design)
  - URL: https://www.youtube.com/@RaghavPal
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Selenium Advanced Concepts** _(Testing Mini Bytes)_
  - Category: Test Automation (UI & Frameworks) → Selenium WebDriver (Advanced Framework Design)
  - URL: https://www.youtube.com/@TestingMiniBytes
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Selenium with Python** _(The Testing Academy)_
  - Category: Test Automation (UI & Frameworks) → Selenium WebDriver (Advanced Framework Design)
  - URL: https://www.youtube.com/@TheTestingAcademy
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Playwright Tutorial Full Course** _(Testers Talk)_
  - Category: Test Automation (UI & Frameworks) → Playwright
  - URL: https://www.youtube.com/@TestersTalk
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Playwright Tutorial** _(Automation Step by Step)_
  - Category: Test Automation (UI & Frameworks) → Playwright
  - URL: https://www.youtube.com/@RaghavPal
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Playwright Official Channel** _(YouTube)_
  - Category: Test Automation (UI & Frameworks) → Playwright
  - URL: https://www.youtube.com/@Playwrightdev
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Playwright with JavaScript** _(The Testing Academy)_
  - Category: Test Automation (UI & Frameworks) → Playwright
  - URL: https://www.youtube.com/@TheTestingAcademy
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Playwright Testing Guide** _(LambdaTest)_
  - Category: Test Automation (UI & Frameworks) → Playwright
  - URL: https://www.youtube.com/@LambdaTest
  - Info: links to a channel, not a specific resource (HTTP 404)

- **Playwright Tutorial** _(Programming with Mosh)_
  - Category: Test Automation (UI & Frameworks) → Playwright
  - URL: https://www.youtube.com/@programmingwithmosh
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Cypress Fast-Track Playlist** _(Automation Step by Step)_
  - Category: Test Automation (UI & Frameworks) → Cypress
  - URL: https://www.youtube.com/@RaghavPal
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Cypress.io Official Channel** _(YouTube)_
  - Category: Test Automation (UI & Frameworks) → Cypress
  - URL: https://www.youtube.com/@Cypressio
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Cypress Tutorial** _(Testers Talk)_
  - Category: Test Automation (UI & Frameworks) → Cypress
  - URL: https://www.youtube.com/@TestersTalk
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Cypress Complete Course** _(The Testing Academy)_
  - Category: Test Automation (UI & Frameworks) → Cypress
  - URL: https://www.youtube.com/@TheTestingAcademy
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Cypress Testing Tutorials** _(LambdaTest)_
  - Category: Test Automation (UI & Frameworks) → Cypress
  - URL: https://www.youtube.com/@LambdaTest
  - Info: links to a channel, not a specific resource (HTTP 404)

- **Cypress Tutorial** _(Programming with Mosh)_
  - Category: Test Automation (UI & Frameworks) → Cypress
  - URL: https://www.youtube.com/@programmingwithmosh
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Appium Mobile Automation Playlist** _(SDET-QA Techie)_
  - Category: Test Automation (UI & Frameworks) → Mobile Test Automation
  - URL: https://www.youtube.com/@SDET-QATechie
  - Info: links to a channel, not a specific resource (HTTP 404)

- **Appium Complete Course** _(The Testing Academy)_
  - Category: Test Automation (UI & Frameworks) → Mobile Test Automation
  - URL: https://www.youtube.com/@TheTestingAcademy
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Appium Tutorial** _(Automation Step by Step)_
  - Category: Test Automation (UI & Frameworks) → Mobile Test Automation
  - URL: https://www.youtube.com/@RaghavPal
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Mobile App Testing with Appium** _(LambdaTest)_
  - Category: Test Automation (UI & Frameworks) → Mobile Test Automation
  - URL: https://www.youtube.com/@LambdaTest
  - Info: links to a channel, not a specific resource (HTTP 404)

- **Appium with Java** _(Naveen AutomationLabs)_
  - Category: Test Automation (UI & Frameworks) → Mobile Test Automation
  - URL: https://www.youtube.com/@NaveenAutomationLabs
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Mobile Testing** _(Programming with Mosh)_
  - Category: Test Automation (UI & Frameworks) → Mobile Test Automation
  - URL: https://www.youtube.com/@programmingwithmosh
  - Info: links to a channel, not a specific resource (HTTP 200)

- **API Testing with Postman** _(Automation Step by Step)_
  - Category: API & Integration Testing → API Testing Fundamentals (REST & SOAP)
  - URL: https://www.youtube.com/@RaghavPal
  - Info: links to a channel, not a specific resource (HTTP 200)

- **API Testing Complete Course** _(The Testing Academy)_
  - Category: API & Integration Testing → API Testing Fundamentals (REST & SOAP)
  - URL: https://www.youtube.com/@TheTestingAcademy
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Postman API Testing** _(Valentin Despa)_
  - Category: API & Integration Testing → API Testing Fundamentals (REST & SOAP)
  - URL: https://www.youtube.com/@valentindespa
  - Info: links to a channel, not a specific resource (HTTP 200)

- **API Testing Tutorial** _(Programming with Mosh)_
  - Category: API & Integration Testing → API Testing Fundamentals (REST & SOAP)
  - URL: https://www.youtube.com/@programmingwithmosh
  - Info: links to a channel, not a specific resource (HTTP 200)

- **RestAssured Tutorial** _(SDET-QA Techie)_
  - Category: API & Integration Testing → API Testing Fundamentals (REST & SOAP)
  - URL: https://www.youtube.com/@SDET-QATechie
  - Info: links to a channel, not a specific resource (HTTP 404)

- **API Testing Tutorial** _(Guru99)_
  - Category: API & Integration Testing → API Testing Fundamentals (REST & SOAP)
  - URL: https://www.youtube.com/@guru99com
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Pact Foundation Official Channel** _(YouTube)_
  - Category: API & Integration Testing → Contract Testing
  - URL: https://www.youtube.com/@pact-foundation
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Contract Testing Tutorial** _(The Testing Academy)_
  - Category: API & Integration Testing → Contract Testing
  - URL: https://www.youtube.com/@TheTestingAcademy
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Pact Tutorial** _(Automation Step by Step)_
  - Category: API & Integration Testing → Contract Testing
  - URL: https://www.youtube.com/@RaghavPal
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Contract Testing Talks** _(Ministry of Testing)_
  - Category: API & Integration Testing → Contract Testing
  - URL: https://www.youtube.com/@ministryoftesting
  - Info: links to a channel, not a specific resource (HTTP 404)

- **GraphQL API Testing** _(The Testing Academy)_
  - Category: API & Integration Testing → GraphQL Testing
  - URL: https://www.youtube.com/@TheTestingAcademy
  - Info: links to a channel, not a specific resource (HTTP 200)

- **GraphQL Tutorial** _(Programming with Mosh)_
  - Category: API & Integration Testing → GraphQL Testing
  - URL: https://www.youtube.com/@programmingwithmosh
  - Info: links to a channel, not a specific resource (HTTP 200)

- **GraphQL Full Course** _(FreeCodeCamp)_
  - Category: API & Integration Testing → GraphQL Testing
  - URL: https://www.youtube.com/@freecodecamp
  - Info: links to a channel, not a specific resource (HTTP 200)

- **GraphQL Crash Course** _(Traversy Media)_
  - Category: API & Integration Testing → GraphQL Testing
  - URL: https://www.youtube.com/@TraversyMedia
  - Info: links to a channel, not a specific resource (HTTP 200)

- **DevOps & Jenkins for Automation Engineers** _(ExecuteAutomation)_
  - Category: Quality Engineering & Pipeline Integration → CI/CD Integration & API Pipeline Automation
  - URL: https://www.youtube.com/@ExecuteAutomation
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Jenkins Tutorial** _(TechWorld with Nana)_
  - Category: Quality Engineering & Pipeline Integration → CI/CD Integration & API Pipeline Automation
  - URL: https://www.youtube.com/@TechWorldwithNana
  - Info: links to a channel, not a specific resource (HTTP 200)

- **CI/CD Pipeline Tutorial** _(Automation Step by Step)_
  - Category: Quality Engineering & Pipeline Integration → CI/CD Integration & API Pipeline Automation
  - URL: https://www.youtube.com/@RaghavPal
  - Info: links to a channel, not a specific resource (HTTP 200)

- **DevOps Full Course** _(FreeCodeCamp)_
  - Category: Quality Engineering & Pipeline Integration → CI/CD Integration & API Pipeline Automation
  - URL: https://www.youtube.com/@freecodecamp
  - Info: links to a channel, not a specific resource (HTTP 200)

- **CI/CD for Testers** _(The Testing Academy)_
  - Category: Quality Engineering & Pipeline Integration → CI/CD Integration & API Pipeline Automation
  - URL: https://www.youtube.com/@TheTestingAcademy
  - Info: links to a channel, not a specific resource (HTTP 200)

- **GitHub Actions Tutorial** _(DevOps Toolkit)_
  - Category: Quality Engineering & Pipeline Integration → CI/CD Integration & API Pipeline Automation
  - URL: https://www.youtube.com/@DevOpsToolkit
  - Info: links to a channel, not a specific resource (HTTP 200)

- **TDD Tutorial** _(Automation Step by Step)_
  - Category: Quality Engineering & Pipeline Integration → Shift-Left Testing & Code Quality
  - URL: https://www.youtube.com/@RaghavPal
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Shift Left Testing** _(The Testing Academy)_
  - Category: Quality Engineering & Pipeline Integration → Shift-Left Testing & Code Quality
  - URL: https://www.youtube.com/@TheTestingAcademy
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Unit Testing Tutorial** _(Programming with Mosh)_
  - Category: Quality Engineering & Pipeline Integration → Shift-Left Testing & Code Quality
  - URL: https://www.youtube.com/@programmingwithmosh
  - Info: links to a channel, not a specific resource (HTTP 200)

- **TDD Full Course** _(FreeCodeCamp)_
  - Category: Quality Engineering & Pipeline Integration → Shift-Left Testing & Code Quality
  - URL: https://www.youtube.com/@freecodecamp
  - Info: links to a channel, not a specific resource (HTTP 200)

- **DevOps for Testers** _(TechWorld with Nana)_
  - Category: Quality Engineering & Pipeline Integration → Shift-Left Testing & Code Quality
  - URL: https://www.youtube.com/@TechWorldwithNana
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Test Observability** _(The Testing Academy)_
  - Category: Quality Engineering & Pipeline Integration → Test Observability
  - URL: https://www.youtube.com/@TheTestingAcademy
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Monitoring & Observability** _(TechWorld with Nana)_
  - Category: Quality Engineering & Pipeline Integration → Test Observability
  - URL: https://www.youtube.com/@TechWorldwithNana
  - Info: links to a channel, not a specific resource (HTTP 200)

- **System Design & Observability** _(Hussein Nasser)_
  - Category: Quality Engineering & Pipeline Integration → Test Observability
  - URL: https://www.youtube.com/@hnasr
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Monitoring with Prometheus & Grafana** _(FreeCodeCamp)_
  - Category: Quality Engineering & Pipeline Integration → Test Observability
  - URL: https://www.youtube.com/@freecodecamp
  - Info: links to a channel, not a specific resource (HTTP 200)

- **k6 Performance Testing Masterclass** _(Automation Step by Step)_
  - Category: Performance Engineering → k6
  - URL: https://www.youtube.com/@RaghavPal
  - Info: links to a channel, not a specific resource (HTTP 200)

- **k6 Tutorials** _(Grafana Labs)_
  - Category: Performance Engineering → k6
  - URL: https://www.youtube.com/@grafana
  - Info: links to a channel, not a specific resource (HTTP 200)

- **k6 Complete Course** _(The Testing Academy)_
  - Category: Performance Engineering → k6
  - URL: https://www.youtube.com/@TheTestingAcademy
  - Info: links to a channel, not a specific resource (HTTP 200)

- **k6 Performance Testing** _(Testers Talk)_
  - Category: Performance Engineering → k6
  - URL: https://www.youtube.com/@TestersTalk
  - Info: links to a channel, not a specific resource (HTTP 200)

- **k6 Tutorial** _(TechWorld with Nana)_
  - Category: Performance Engineering → k6
  - URL: https://www.youtube.com/@TechWorldwithNana
  - Info: links to a channel, not a specific resource (HTTP 200)

- **JMeter Tutorial** _(Automation Step by Step)_
  - Category: Performance Engineering → JMeter
  - URL: https://www.youtube.com/@RaghavPal
  - Info: links to a channel, not a specific resource (HTTP 200)

- **JMeter Complete Course** _(The Testing Academy)_
  - Category: Performance Engineering → JMeter
  - URL: https://www.youtube.com/@TheTestingAcademy
  - Info: links to a channel, not a specific resource (HTTP 200)

- **JMeter Tutorial** _(Guru99)_
  - Category: Performance Engineering → JMeter
  - URL: https://www.youtube.com/@guru99com
  - Info: links to a channel, not a specific resource (HTTP 200)

- **JMeter Performance Testing** _(Naveen AutomationLabs)_
  - Category: Performance Engineering → JMeter
  - URL: https://www.youtube.com/@NaveenAutomationLabs
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Performance Engineering** _(The Testing Academy)_
  - Category: Performance Engineering → Performance Analysis & Root Cause Identification
  - URL: https://www.youtube.com/@TheTestingAcademy
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Performance Testing** _(TechWorld with Nana)_
  - Category: Performance Engineering → Performance Analysis & Root Cause Identification
  - URL: https://www.youtube.com/@TechWorldwithNana
  - Info: links to a channel, not a specific resource (HTTP 200)

- **System Performance** _(Hussein Nasser)_
  - Category: Performance Engineering → Performance Analysis & Root Cause Identification
  - URL: https://www.youtube.com/@hnasr
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Performance Engineering** _(FreeCodeCamp)_
  - Category: Performance Engineering → Performance Analysis & Root Cause Identification
  - URL: https://www.youtube.com/@freecodecamp
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Penetration Testing** _(The Cyber Mentor)_
  - Category: Security Testing → OWASP Top 10 & Penetration Testing Basics
  - URL: https://www.youtube.com/@TCMSecurityAcademy
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Security Testing** _(John Hammond)_
  - Category: Security Testing → OWASP Top 10 & Penetration Testing Basics
  - URL: https://www.youtube.com/@_JohnHammond
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Web Application Security** _(HackerSploit)_
  - Category: Security Testing → OWASP Top 10 & Penetration Testing Basics
  - URL: https://www.youtube.com/@HackerSploit
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Security Talks** _(OWASP Foundation)_
  - Category: Security Testing → OWASP Top 10 & Penetration Testing Basics
  - URL: https://www.youtube.com/@OWASPGLOBAL
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Ethical Hacking Full Course** _(FreeCodeCamp)_
  - Category: Security Testing → OWASP Top 10 & Penetration Testing Basics
  - URL: https://www.youtube.com/@freecodecamp
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Security Testing for QA** _(The Testing Academy)_
  - Category: Security Testing → OWASP Top 10 & Penetration Testing Basics
  - URL: https://www.youtube.com/@TheTestingAcademy
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Security Automation** _(The Testing Academy)_
  - Category: Security Testing → Security Test Automation
  - URL: https://www.youtube.com/@TheTestingAcademy
  - Info: links to a channel, not a specific resource (HTTP 200)

- **DevSecOps Tutorial** _(TechWorld with Nana)_
  - Category: Security Testing → Security Test Automation
  - URL: https://www.youtube.com/@TechWorldwithNana
  - Info: links to a channel, not a specific resource (HTTP 200)

- **DevSecOps Full Course** _(FreeCodeCamp)_
  - Category: Security Testing → Security Test Automation
  - URL: https://www.youtube.com/@freecodecamp
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Security Automation** _(Snyk)_
  - Category: Security Testing → Security Test Automation
  - URL: https://www.youtube.com/@Snyksec
  - Info: links to a channel, not a specific resource (HTTP 200)

- **AI in Software Testing Playlist** _(The Testing Academy)_
  - Category: AI-Assisted Testing → AI Tools for Testers & Prompt Engineering for QA
  - URL: https://www.youtube.com/@TheTestingAcademy
  - Info: links to a channel, not a specific resource (HTTP 200)

- **AI Testing Tools** _(Automation Step by Step)_
  - Category: AI-Assisted Testing → AI Tools for Testers & Prompt Engineering for QA
  - URL: https://www.youtube.com/@RaghavPal
  - Info: links to a channel, not a specific resource (HTTP 200)

- **AI for Testers** _(Testers Talk)_
  - Category: AI-Assisted Testing → AI Tools for Testers & Prompt Engineering for QA
  - URL: https://www.youtube.com/@TestersTalk
  - Info: links to a channel, not a specific resource (HTTP 200)

- **AI for Developers** _(FreeCodeCamp)_
  - Category: AI-Assisted Testing → AI Tools for Testers & Prompt Engineering for QA
  - URL: https://www.youtube.com/@freecodecamp
  - Info: links to a channel, not a specific resource (HTTP 200)

- **AI Tools for Developers** _(Fireship)_
  - Category: AI-Assisted Testing → AI Tools for Testers & Prompt Engineering for QA
  - URL: https://www.youtube.com/@Fireship
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Testing AI/ML Systems** _(The Testing Academy)_
  - Category: AI-Assisted Testing → Testing AI Systems
  - URL: https://www.youtube.com/@TheTestingAcademy
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Machine Learning Testing** _(Sentdex)_
  - Category: AI-Assisted Testing → Testing AI Systems
  - URL: https://www.youtube.com/@sentdex
  - Info: links to a channel, not a specific resource (HTTP 200)

- **AI Testing Research** _(Two Minute Papers)_
  - Category: AI-Assisted Testing → Testing AI Systems
  - URL: https://www.youtube.com/@TwoMinutePapers
  - Info: links to a channel, not a specific resource (HTTP 200)

- **ML Testing** _(Yannic Kilcher)_
  - Category: AI-Assisted Testing → Testing AI Systems
  - URL: https://www.youtube.com/@YannicKilcher
  - Info: links to a channel, not a specific resource (HTTP 200)

- **QA Leadership** _(The Testing Academy)_
  - Category: Test Leadership & Delivery → Test Strategy & Stakeholder Communication
  - URL: https://www.youtube.com/@TheTestingAcademy
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Leadership Talks** _(Ministry of Testing)_
  - Category: Test Leadership & Delivery → Test Strategy & Stakeholder Communication
  - URL: https://www.youtube.com/@ministryoftesting
  - Info: links to a channel, not a specific resource (HTTP 404)

- **Test Leadership** _(Angie Jones)_
  - Category: Test Leadership & Delivery → Test Strategy & Stakeholder Communication
  - URL: https://www.youtube.com/@angiejones
  - Info: links to a channel, not a specific resource (HTTP 200)

- **QA Career Growth** _(The Testing Academy)_
  - Category: Test Leadership & Delivery → Coaching and Mentoring
  - URL: https://www.youtube.com/@TheTestingAcademy
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Mentoring Programs** _(Ministry of Testing)_
  - Category: Test Leadership & Delivery → Coaching and Mentoring
  - URL: https://www.youtube.com/@ministryoftesting
  - Info: links to a channel, not a specific resource (HTTP 404)

- **Engineering Management** _(FreeCodeCamp)_
  - Category: Test Leadership & Delivery → Coaching and Mentoring
  - URL: https://www.youtube.com/@freecodecamp
  - Info: links to a channel, not a specific resource (HTTP 200)

- **Engineering Leadership** _(TechLead)_
  - Category: Test Leadership & Delivery → Coaching and Mentoring
  - URL: https://www.youtube.com/@TechLead
  - Info: links to a channel, not a specific resource (HTTP 200)

