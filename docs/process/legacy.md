---
sidebar_position: 1
Date: 2023 January 12
Revision:  0.01
---

# Legacy Code

What is 'Legacy' code? 

Definition 1: All code is legacy code

Definition 2: All code without effective tests is legacy code

Definition 3: All code without organizational understanding and ownership is legacy code

My position? Somewhere between 1 and 2. Generally you can find _someone_ in the organization who has an idea about the code in question. 

If you need to modify legacy code (wherever you sit with the definitions above), there's a number of things you can do to improve your chances:

* Understand the requirements: Gather as much information as possible about the requirements and the expected behavior of the code. Try to understand the context in which the code is used and the impact of the bug on the system.

* Familiarize myself with the codebase: Take time to familiarize yourself with the codebase, including its architecture, design patterns, and conventions. Try to understand the code's dependencies and interactions with other components of the system. You should write down your findings in a document that goes into the codebase.

* Understand the flow: Try to understand what's going on by adding log statements. This would help me understand the flow of the code and identify the source of the bug.

* Review the change history of the key modules. Chances are there's something interesting to find, and you can see if one of the earlier developers is around to cast some light onto the situation. If there's a link back to a story on a board somewhere, have a look there too.

* Consider the potential impact of changes on the rest of the codebase and the risks involved. Sense-check these with someone else in the team.

* Create a plan of action:

    * TDD: Add test coverage: Since the code does not have any test coverage, add test cases that cover the functionality affected.

    * Refactoring: Looking at the code are there any easy wins to simplify it and make it clearer where the problem / work needs to be done? Can you move code from 

    * Implement the change / fix, test it thoroughly using the newly created test cases. 

* Run whatever you've got to assure yourself that the application still works as it should. The commit history should give you some help finding people to cross-check with.

* Document the change / fix. Make sure your commits make sense. Squash them if necessary to get Test/Refactor/Change commits in a sensible order so anyone can follow what you did.

* If you're seen something that your change leaves in an undesirable state, consider your teams approach to Technical Debt before you're done.

## Technical Debt

A quick change that solves an issue might create some technical debt. You might need to consider several factors:

1. The urgency of the issue: Is the issue causing significant problems for users or other stakeholders? If so, it may be worth incurring some technical debt in order to solve the problem quickly.
1. The cost of the change: How much technical debt will be incurred by making the change? Will it be easy to pay off the debt later, or will it cause problems down the line? Who are you going to flag this with? Maybe have a conversation with the team at this point to see what the view is.
1. The likelihood of the issue being re-introduced: If the issue is likely to reappear without the change, it may be worth incurring the technical debt in order to solve it permanently.
1. The impact of the change on maintainability: Will the change make the codebase more difficult to maintain in the long run? If so, it may be worth avoiding the change or finding an alternative solution that does not introduce as much technical debt.
1. The long-term goals of the project: Will the change align with the long-term goals of the project? If it does not align with the goals, it may not be worth introducing the technical debt.

Ultimately, the decision of whether or not to make the change would depend on the balance of these factors and the specific context of the situation.