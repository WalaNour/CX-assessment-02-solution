# Week 02 Assessment

## Guidelines

Assessments are meant to give you and RBK staff an idea of how well you understand, or can figure out, the material that you covered recently.

- Turn off all communication devices such as your phone, email, Slack, etc.
- Fork this repo and clone down your fork to your laptop.
- Commit **working** code early and often (at least after every prompt). You are graded on your commit messages in addition to the code that you write

`[When this code is committed it will] Complete the basic-iteration prompt`

  - TIP: Use the Chrome Console, [JSFiddle](https://jsfiddle.net/), or some other method you're comfortable with, for a quick and easy way to test that your code is working and behaving as expected, before you make a commit
- Do at least a little work on *every* prompt, even if you only leave comments that describe your intent. **Leaving a prompt blank is tantamount to failing a prompt. You'll get much more credit even for writing comments or pseudo-code that describe your intent**
- You **must** submit a pull request for all assessments **on time** (guidelines for how to submit a pull request are below). Give yourself several minutes to do this at the end of the time allotted for the assessment
- The help button is available to you during assessments, how often you use it is up to your own discretion
- After completing the assessment, if there are any prompts you felt you did not do well on, or, that you would not know how to assess whether or not you did well on, make plans to improve your skills on that topic **as soon as possible.**

## Grading Outline

- [ ] algo-complexity
- [ ] algo-find-dup-char
- [ ] d3-bounce
- [ ] js-inheritance-pseudo-classical

## Using and Referencing Outside Resources

Each prompt contains a list of outside resources you are allowed to use to support your work on that prompt. Using *any* other resources, online or otherwise, including previous class materials, or, communicating through any mechanism with anyone other than Hack Reactor staff during the assessments is academic dishonesty and is cause for **immediate removal from the course.** If you have any questions about whether a resource is available for use, or if you are in need of support, submit a help request.

## Self-Grading Process

After you complete each prompt, assign a grade to each item in the above Grading Outline, using this [Grading Scale](http://bookstrap.hackreactor.com/wiki/Assessments.md). Note your grade by editing **this file** (`README.md`), and writing your grade next to the corresponding item in the Grading Outline above. Please use the exact terms shown in the [Grading Scale](http://bookstrap.hackreactor.com/wiki/Assessments.md) document; do not modify or improvise them.

## Submitting Solutions

Solutions are submitted via [Pull Request](https://help.github.com/articles/using-pull-requests). Follow these steps:

1. From **your fork**, select `Pull Requests` and then create a `New pull request`. 
2. STOP. *Before* you `Click to create a pull request for this comparison` you must **adjust the target branch** (aka `base branch`) to be your username. Once chagned, the pull-request heading should look like this:

  > hackreactor:username ... username:master

3. Copy and **paste the completed Grading Outline into the comment block** of your Pull Request.
4. Click `Send pull request`

**NOTE: Only submit one pull request per assessment.** You can feel free to continue working on the content and can submit another PR after our incredible Instruction Team has completed reviewing your work (which takes about a week), but submitting multiple PRs greatly complicates our review process and subverts our ability to observe your work in the context of specific time constraints.

---


## Algorithm Complexity
* [ ] List and briefly describe the types of algorithmic complexity. Be as clear and complete as necessary to demonstrate your mastery.
* [ ] What time complexity do the given functions have (with respect to the specified input)?


## Algorithms
* [ ] Write a function that, given a string, returns an array of all duplicated letters.
* [ ] Include a comment near the end of the file stating what complexity you believe your solution to be.

## D3
In the `d3-bounce.js` file provided:
- [ ] Use D3 transitions to make the ball bounce continuously between the top and bottom of the screen.


## Pseudo-classical inheritance
* [ ] Refactor `makePhone` and `makeSmartphone` to use pseudo-classical inheritance
  * They should have all of the same methods as objects returned from the original maker functions provided
  * _Do not modify the factory functions - instead, use the constructor functions at the end of the file_
