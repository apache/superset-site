"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[6209],{62337:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=i(74848),t=i(28453);const r={title:"Guidelines",sidebar_position:2,version:1},o=void 0,l={id:"contributing/guidelines",title:"Guidelines",description:"Pull Request Guidelines",source:"@site/docs/contributing/guidelines.mdx",sourceDirName:"contributing",slug:"/contributing/guidelines",permalink:"/docs/contributing/guidelines",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/superset/edit/master/docs/docs/contributing/guidelines.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Guidelines",sidebar_position:2,version:1},sidebar:"CustomSidebar",previous:{title:"Contributing to Superset",permalink:"/docs/contributing/"},next:{title:"Setting up a Development Environment",permalink:"/docs/contributing/development"}},a={},c=[{value:"Pull Request Guidelines",id:"pull-request-guidelines",level:2},{value:"Protocol",id:"protocol",level:3},{value:"Authoring",id:"authoring",level:4},{value:"Reviewing",id:"reviewing",level:4},{value:"Test Environments",id:"test-environments",level:4},{value:"Merging",id:"merging",level:4},{value:"Post-merge Responsibility",id:"post-merge-responsibility",level:4},{value:"Managing Issues and PRs",id:"managing-issues-and-prs",level:2},{value:"Revert Guidelines",id:"revert-guidelines",level:2},{value:"Design Guidelines",id:"design-guidelines",level:2},{value:"Capitalization guidelines",id:"capitalization-guidelines",level:3},{value:"Sentence case",id:"sentence-case",level:4},{value:"How to refer to UI elements",id:"how-to-refer-to-ui-elements",level:4},{value:"**Exceptions to sentence case",id:"exceptions-to-sentence-case",level:4},{value:"Programming Language Conventions",id:"programming-language-conventions",level:2},{value:"Python",id:"python",level:3},{value:"Typing / Types Hints",id:"typing--types-hints",level:4},{value:"TypeScript",id:"typescript",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"pull-request-guidelines",children:"Pull Request Guidelines"}),"\n",(0,s.jsx)(n.p,{children:"A philosophy we would like to strongly encourage is"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Before creating a PR, create an issue."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The purpose is to separate problem from possible solutions."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Bug fixes:"})," If you\u2019re only fixing a small bug, it\u2019s fine to submit a pull request right away but we highly recommend to file an issue detailing what you\u2019re fixing. This is helpful in case we don\u2019t accept that specific fix but want to keep track of the issue. Please keep in mind that the project maintainers reserve the rights to accept or reject incoming PRs, so it is better to separate the issue and the code to fix it from each other. In some cases, project maintainers may request you to create a separate issue from PR before proceeding."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Refactor:"})," For small refactors, it can be a standalone PR itself detailing what you are refactoring and why. If there are concerns, project maintainers may request you to create a ",(0,s.jsx)(n.code,{children:"#SIP"})," for the PR before proceeding."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Feature/Large changes:"})," If you intend to change the public API, or make any non-trivial changes to the implementation, we require you to file a new issue as ",(0,s.jsx)(n.code,{children:"#SIP"})," (Superset Improvement Proposal). This lets us reach an agreement on your proposal before you put significant effort into it. You are welcome to submit a PR along with the SIP (sometimes necessary for demonstration), but we will not review/merge the code until the SIP is approved."]}),"\n",(0,s.jsx)(n.p,{children:"In general, small PRs are always easier to review than large PRs. The best practice is to break your work into smaller independent PRs and refer to the same issue. This will greatly reduce turnaround time."}),"\n",(0,s.jsxs)(n.p,{children:["If you wish to share your work which is not ready to merge yet, create a ",(0,s.jsx)(n.a,{href:"https://github.blog/2019-02-14-introducing-draft-pull-requests/",children:"Draft PR"}),". This will enable maintainers and the CI runner to prioritize mature PR's."]}),"\n",(0,s.jsx)(n.p,{children:"Finally, never submit a PR that will put master branch in broken state. If the PR is part of multiple PRs to complete a large feature and cannot work on its own, you can create a feature branch and merge all related PRs into the feature branch before creating a PR from feature branch to master."}),"\n",(0,s.jsx)(n.h3,{id:"protocol",children:"Protocol"}),"\n",(0,s.jsx)(n.h4,{id:"authoring",children:"Authoring"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Fill in all sections of the PR template."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Title the PR with one of the following semantic prefixes (inspired by ",(0,s.jsx)(n.a,{href:"http://karma-runner.github.io/0.10/dev/git-commit-msg.html%5D",children:"Karma"}),"):"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"feat"})," (new feature)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fix"})," (bug fix)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"docs"})," (changes to the documentation)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"style"})," (formatting, missing semi colons, etc; no application logic change)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"refactor"})," (refactoring code)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"test"})," (adding missing tests, refactoring tests; no application logic change)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chore"})," (updating tasks etc; no application logic change)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"perf"})," (performance-related change)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"build"})," (build tooling, Docker configuration change)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ci"})," (test runner, GitHub Actions workflow changes)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"other"})," (changes that don't correspond to the above -- should be rare!)"]}),"\n",(0,s.jsxs)(n.li,{children:["Examples:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"feat: export charts as ZIP files"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"perf(api): improve API info performance"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"fix(chart-api): cached-indicator always shows value is cached"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add prefix ",(0,s.jsx)(n.code,{children:"[WIP]"})," to title if not ready for review (WIP = work-in-progress). We recommend creating a PR with ",(0,s.jsx)(n.code,{children:"[WIP]"})," first and remove it once you have passed CI test and read through your code changes at least once."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If you believe your PR contributes a potentially breaking change, put a ",(0,s.jsx)(n.code,{children:"!"})," after the semantic prefix but before the colon in the PR title, like so: ",(0,s.jsx)(n.code,{children:"feat!: Added foo functionality to bar"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Screenshots/GIFs:"})," Changes to user interface require before/after screenshots, or GIF for interactions"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Recommended capture tools (",(0,s.jsx)(n.a,{href:"https://getkap.co/",children:"Kap"}),", ",(0,s.jsx)(n.a,{href:"https://www.cockos.com/licecap/",children:"LICEcap"}),", ",(0,s.jsx)(n.a,{href:"https://download.cnet.com/Skitch/3000-13455_4-189876.html",children:"Skitch"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["If no screenshot is provided, the committers will mark the PR with ",(0,s.jsx)(n.code,{children:"need:screenshot"})," label and will not review until screenshot is provided."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Dependencies:"})," Be careful about adding new dependency and avoid unnecessary dependencies."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For Python, include it in ",(0,s.jsx)(n.code,{children:"pyproject.toml"})," denoting any specific restrictions and\nin ",(0,s.jsx)(n.code,{children:"requirements.txt"})," pinned to a specific version which ensures that the application\nbuild is deterministic."]}),"\n",(0,s.jsxs)(n.li,{children:["For TypeScript/JavaScript, include new libraries in ",(0,s.jsx)(n.code,{children:"package.json"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Tests:"})," The pull request should include tests, either as doctests, unit tests, or both. Make sure to resolve all errors and test failures. See ",(0,s.jsx)(n.a,{href:"/docs/contributing/howtos#testing",children:"Testing"})," for how to run tests."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Documentation:"})," If the pull request adds functionality, the docs should be updated as part of the same PR."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"CI:"})," Reviewers will not review the code until all CI tests are passed. Sometimes there can be flaky tests. You can close and open PR to re-run CI test. Please report if the issue persists. After the CI fix has been deployed to ",(0,s.jsx)(n.code,{children:"master"}),", please rebase your PR."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Code coverage:"})," Please ensure that code coverage does not decrease."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Remove ",(0,s.jsx)(n.code,{children:"[WIP]"})," when ready for review. Please note that it may be merged soon after approved so please make sure the PR is ready to merge and do not expect more time for post-approval edits."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If the PR was not ready for review and inactive for > 30 days, we will close it due to inactivity. The author is welcome to re-open and update."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"reviewing",children:"Reviewing"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use constructive tone when writing reviews."}),"\n",(0,s.jsx)(n.li,{children:"If there are changes required, state clearly what needs to be done before the PR can be approved."}),"\n",(0,s.jsx)(n.li,{children:"If you are asked to update your pull request with some changes there's no need to create a new one. Push your changes to the same branch."}),"\n",(0,s.jsx)(n.li,{children:"The committers reserve the right to reject any PR and in some cases may request the author to file an issue."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"test-environments",children:"Test Environments"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Members of the Apache GitHub org can launch an ephemeral test environment directly on a pull request by creating a comment containing (only) the command ",(0,s.jsx)(n.code,{children:"/testenv up"}),".","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Note that org membership must be public in order for this validation to function properly."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Feature flags may be set for a test environment by specifying the flag name (prefixed with ",(0,s.jsx)(n.code,{children:"FEATURE_"}),") and value after the command.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Format: ",(0,s.jsx)(n.code,{children:"/testenv up FEATURE_<feature flag name>=true|false"})]}),"\n",(0,s.jsxs)(n.li,{children:["Example: ",(0,s.jsx)(n.code,{children:"/testenv up FEATURE_DASHBOARD_NATIVE_FILTERS=true"})]}),"\n",(0,s.jsx)(n.li,{children:"Multiple feature flags may be set in single command, separated by whitespace"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"A comment will be created by the workflow script with the address and login information for the ephemeral environment."}),"\n",(0,s.jsx)(n.li,{children:"Test environments may be created once the Docker build CI workflow for the PR has completed successfully."}),"\n",(0,s.jsx)(n.li,{children:"Test environments do not currently update automatically when new commits are added to a pull request."}),"\n",(0,s.jsx)(n.li,{children:"Test environments do not currently support async workers, though this is planned."}),"\n",(0,s.jsx)(n.li,{children:"Running test environments will be shutdown upon closing the pull request."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"merging",children:"Merging"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"At least one approval is required for merging a PR."}),"\n",(0,s.jsx)(n.li,{children:"PR is usually left open for at least 24 hours before merging."}),"\n",(0,s.jsxs)(n.li,{children:["After the PR is merged, ",(0,s.jsx)(n.a,{href:"https://help.github.com/articles/closing-issues-using-keywords/",children:"close the corresponding issue(s)"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"post-merge-responsibility",children:"Post-merge Responsibility"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Project maintainers may contact the PR author if new issues are introduced by the PR."}),"\n",(0,s.jsx)(n.li,{children:"Project maintainers may revert your changes if a critical issue is found, such as breaking master branch CI."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"managing-issues-and-prs",children:"Managing Issues and PRs"}),"\n",(0,s.jsx)(n.p,{children:"To handle issues and PRs that are coming in, committers read issues/PRs and flag them with labels to categorize and help contributors spot where to take actions, as contributors usually have different expertises."}),"\n",(0,s.jsx)(n.p,{children:"Triaging goals"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"For issues:"})," Categorize, screen issues, flag required actions from authors."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"For PRs:"})," Categorize, flag required actions from authors. If PR is ready for review, flag required actions from reviewers."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["First, add ",(0,s.jsx)(n.strong,{children:"Category labels (a.k.a. hash labels)"}),". Every issue/PR must have one hash label (except spam entry). Labels that begin with ",(0,s.jsx)(n.code,{children:"#"})," defines issue/PR type:"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Label"}),(0,s.jsx)(n.th,{children:"for Issue"}),(0,s.jsx)(n.th,{children:"for PR"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"#bug"})}),(0,s.jsx)(n.td,{children:"Bug report"}),(0,s.jsx)(n.td,{children:"Bug fix"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"#code-quality"})}),(0,s.jsx)(n.td,{children:"Describe problem with code, architecture or productivity"}),(0,s.jsx)(n.td,{children:"Refactor, tests, tooling"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"#feature"})}),(0,s.jsx)(n.td,{children:"New feature request"}),(0,s.jsx)(n.td,{children:"New feature implementation"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"#refine"})}),(0,s.jsx)(n.td,{children:"Propose improvement such as adjusting padding or refining UI style, excluding new features, bug fixes, and refactoring."}),(0,s.jsx)(n.td,{children:"Implementation of improvement such as adjusting padding or refining UI style, excluding new features, bug fixes, and refactoring."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"#doc"})}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsx)(n.td,{children:"Documentation"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"#question"})}),(0,s.jsxs)(n.td,{children:["Troubleshooting: Installation, Running locally, Ask how to do something. Can be changed to ",(0,s.jsx)(n.code,{children:"#bug"})," later."]}),(0,s.jsx)(n.td,{children:"N/A"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"#SIP"})}),(0,s.jsx)(n.td,{children:"Superset Improvement Proposal"}),(0,s.jsx)(n.td,{children:"N/A"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"#ASF"})}),(0,s.jsx)(n.td,{children:"Tasks related to Apache Software Foundation policy"}),(0,s.jsx)(n.td,{children:"Tasks related to Apache Software Foundation policy"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Then add other types of labels as appropriate."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Descriptive labels (a.k.a. dot labels):"})," These labels that begin with ",(0,s.jsx)(n.code,{children:"."})," describe the details of the issue/PR, such as ",(0,s.jsx)(n.code,{children:".ui"}),", ",(0,s.jsx)(n.code,{children:".js"}),", ",(0,s.jsx)(n.code,{children:".install"}),", ",(0,s.jsx)(n.code,{children:".backend"}),", etc. Each issue/PR can have zero or more dot labels."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Need labels:"})," These labels have pattern ",(0,s.jsx)(n.code,{children:"need:xxx"}),", which describe the work required to progress, such as ",(0,s.jsx)(n.code,{children:"need:rebase"}),", ",(0,s.jsx)(n.code,{children:"need:update"}),", ",(0,s.jsx)(n.code,{children:"need:screenshot"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Risk labels:"})," These labels have pattern ",(0,s.jsx)(n.code,{children:"risk:xxx"}),", which describe the potential risk on adopting the work, such as ",(0,s.jsx)(n.code,{children:"risk:db-migration"}),". The intention was to better understand the impact and create awareness for PRs that need more rigorous testing."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Status labels:"})," These labels describe the status (",(0,s.jsx)(n.code,{children:"abandoned"}),", ",(0,s.jsx)(n.code,{children:"wontfix"}),", ",(0,s.jsx)(n.code,{children:"cant-reproduce"}),", etc.) Issue/PRs that are rejected or closed without completion should have one or more status labels."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Version labels:"})," These have the pattern ",(0,s.jsx)(n.code,{children:"vx.x"})," such as ",(0,s.jsx)(n.code,{children:"v0.28"}),". Version labels on issues describe the version the bug was reported on. Version labels on PR describe the first release that will include the PR."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Committers may also update title to reflect the issue/PR content if the author-provided title is not descriptive enough."}),"\n",(0,s.jsxs)(n.p,{children:["If the PR passes CI tests and does not have any ",(0,s.jsx)(n.code,{children:"need:"})," labels, it is ready for review, add label ",(0,s.jsx)(n.code,{children:"review"})," and/or ",(0,s.jsx)(n.code,{children:"design-review"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If an issue/PR has been inactive for >=30 days, it will be closed. If it does not have any status label, add ",(0,s.jsx)(n.code,{children:"inactive"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When creating a PR, if you're aiming to have it included in a specific release, please tag it with the version label. For example, to have a PR considered for inclusion in Superset 1.1 use the label ",(0,s.jsx)(n.code,{children:"v1.1"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"revert-guidelines",children:"Revert Guidelines"}),"\n",(0,s.jsx)(n.p,{children:"Reverting changes that are causing issues in the master branch is a normal and expected part of the development process. In an open source community, the ramifications of a change cannot always be fully understood. With that in mind, here are some considerations to keep in mind when considering a revert:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Availability of the PR author:"})," If the original PR author or the engineer who merged the code is highly available and can provide a fix in a reasonable time frame, this would counter-indicate reverting."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Severity of the issue:"})," How severe is the problem on master? Is it keeping the project from moving forward? Is there user impact? What percentage of users will experience a problem?"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Size of the change being reverted:"})," Reverting a single small PR is a much lower-risk proposition than reverting a massive, multi-PR change."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Age of the change being reverted:"})," Reverting a recently-merged PR will be more acceptable than reverting an older PR. A bug discovered in an older PR is unlikely to be causing widespread serious issues."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Risk inherent in reverting:"})," Will the reversion break critical functionality? Is the medicine more dangerous than the disease?"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Difficulty of crafting a fix:"})," In the case of issues with a clear solution, it may be preferable to implement and merge a fix rather than a revert."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Should you decide that reverting is desirable, it is the responsibility of the Contributor performing the revert to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Contact the interested parties:"})," The PR's author and the engineer who merged the work should both be contacted and informed of the revert."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Provide concise reproduction steps:"})," Ensure that the issue can be clearly understood and duplicated by the original author of the PR."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Put the revert through code review:"})," The revert must be approved by another committer."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"design-guidelines",children:"Design Guidelines"}),"\n",(0,s.jsx)(n.h3,{id:"capitalization-guidelines",children:"Capitalization guidelines"}),"\n",(0,s.jsx)(n.h4,{id:"sentence-case",children:"Sentence case"}),"\n",(0,s.jsx)(n.p,{children:"Use sentence-case capitalization for everything in the UI (except these **)."}),"\n",(0,s.jsx)(n.p,{children:"Sentence case is predominantly lowercase. Capitalize only the initial character of the first word, and other words that require capitalization, like:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Proper nouns."})," Objects in the product ",(0,s.jsx)(n.em,{children:"are not"})," considered proper nouns e.g. dashboards, charts, saved queries etc. Proprietary feature names eg. SQL Lab, Preset Manager ",(0,s.jsx)(n.em,{children:"are"})," considered proper nouns"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Acronyms"})," (e.g. CSS, HTML)"]}),"\n",(0,s.jsxs)(n.li,{children:["When referring to ",(0,s.jsx)(n.strong,{children:"UI labels that are themselves capitalized"})," from sentence case (e.g. page titles - Dashboards page, Charts page, Saved queries page, etc.)"]}),"\n",(0,s.jsx)(n.li,{children:"User input that is reflected in the UI. E.g. a user-named a dashboard tab"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Sentence case vs. Title case:"}),'\nTitle case: "A Dog Takes a Walk in Paris"\nSentence case: "A dog takes a walk in Paris"']}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Why sentence case?"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"It\u2019s generally accepted as the quickest to read"}),"\n",(0,s.jsx)(n.li,{children:"It\u2019s the easiest form to distinguish between common and proper nouns"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"how-to-refer-to-ui-elements",children:"How to refer to UI elements"}),"\n",(0,s.jsx)(n.p,{children:"When writing about a UI element, use the same capitalization as used in the UI."}),"\n",(0,s.jsx)(n.p,{children:"For example, if an input field is labeled \u201cName\u201d then you refer to this as the \u201cName input field\u201d. Similarly, if a button has the label \u201cSave\u201d in it, then it is correct to refer to the \u201cSave button\u201d."}),"\n",(0,s.jsx)(n.p,{children:"Where a product page is titled \u201cSettings\u201d, you refer to this in writing as follows:\n\u201cEdit your personal information on the Settings page\u201d."}),"\n",(0,s.jsx)(n.p,{children:"Often a product page will have the same title as the objects it contains. In this case, refer to the page as it appears in the UI, and the objects as common nouns:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Upload a dashboard on the Dashboards page"}),"\n",(0,s.jsx)(n.li,{children:"Go to Dashboards"}),"\n",(0,s.jsx)(n.li,{children:"View dashboard"}),"\n",(0,s.jsx)(n.li,{children:"View all dashboards"}),"\n",(0,s.jsx)(n.li,{children:"Upload CSS templates on the CSS templates page"}),"\n",(0,s.jsx)(n.li,{children:"Queries that you save will appear on the Saved queries page"}),"\n",(0,s.jsx)(n.li,{children:"Create custom queries in SQL Lab then create dashboards"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exceptions-to-sentence-case",children:"**Exceptions to sentence case"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Input labels, buttons and UI tabs are all caps"}),"\n",(0,s.jsx)(n.li,{children:"User input values (e.g. column names, SQL Lab tab names) should be in their original case"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"programming-language-conventions",children:"Programming Language Conventions"}),"\n",(0,s.jsx)(n.h3,{id:"python",children:"Python"}),"\n",(0,s.jsxs)(n.p,{children:["Parameters in the ",(0,s.jsx)(n.code,{children:"config.py"})," (which are accessible via the Flask app.config dictionary) are\nassumed to always be defined and thus should be accessed directly via,"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'blueprints = app.config["BLUEPRINTS"]\n'})}),"\n",(0,s.jsx)(n.p,{children:"rather than,"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'blueprints = app.config.get("BLUEPRINTS")\n'})}),"\n",(0,s.jsxs)(n.p,{children:["or similar as the later will cause typing issues. The former is of type ",(0,s.jsx)(n.code,{children:"List[Callable]"}),"\nwhereas the later is of type ",(0,s.jsx)(n.code,{children:"Optional[List[Callable]]"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"typing--types-hints",children:"Typing / Types Hints"}),"\n",(0,s.jsxs)(n.p,{children:["To ensure clarity, consistency, all readability, ",(0,s.jsx)(n.em,{children:"all"})," new functions should use\n",(0,s.jsx)(n.a,{href:"https://docs.python.org/3/library/typing.html",children:"type hints"})," and include a\ndocstring."]}),"\n",(0,s.jsxs)(n.p,{children:["Note per ",(0,s.jsx)(n.a,{href:"https://www.python.org/dev/peps/pep-0484/#exceptions",children:"PEP-484"})," no\nsyntax for listing explicitly raised exceptions is proposed and thus the\nrecommendation is to put this information in a docstring, i.e.,"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import math\nfrom typing import Union\n\n\ndef sqrt(x: Union[float, int]) -> Union[float, int]:\n    """\n    Return the square root of x.\n\n    :param x: A number\n    :returns: The square root of the given number\n    :raises ValueError: If the number is negative\n    """\n\n    return math.sqrt(x)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"typescript",children:"TypeScript"}),"\n",(0,s.jsxs)(n.p,{children:["TypeScript is fully supported and is the recommended language for writing all new frontend\ncomponents. When modifying existing functions/components, migrating to TypeScript is\nappreciated, but not required. Examples of migrating functions/components to TypeScript can be\nfound in ",(0,s.jsx)(n.a,{href:"https://github.com/apache/superset/pull/9162",children:"#9162"})," and ",(0,s.jsx)(n.a,{href:"https://github.com/apache/superset/pull/9180",children:"#9180"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(96540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);