# skye8-hello-world
skye 8 internship

# BASICS OF GIT

# what is git?
- Git is a content tracker. So Git can be used to store content — it is mostly used to store code due to the other features it provides.
Also, The code which is stored in Git keeps changing as more code is added. Also, many developers can add code in parallel (this is known as version control). So Version Control System helps in handling this by maintaining a history of what changes have happened. Also, Git provides features like branches and merges, which I will be covering later.

# Various git commands and descriptions

- 1. Git clone
Git clone is a command for downloading existing source code from a remote repository (like Github, for example). In other words, Git clone basically makes an identical copy of the latest version of a project in a repository and saves it to your computer. There are a couple of ways to download the source code, but mostly I prefer the clone with https way:

    git clone <https://name-of-the-repository-link>

- 2. Git branch
Branches are highly important in the git world. By using branches, several developers are able to work in parallel on the same project simultaneously. We can use the git branch command for creating, listing and deleting branches.

    * Creating a new branch:  git branch <branch-name>
    * To push the new branch into the remote repository, you need to use the following command:

    git push -u <remote> <branch-name>
    * Deleting a branch:   git branch -d <branch-name>

- 3. Git status
The Git status command gives us all the necessary information about the current branch.
We can gather information like:

    Whether the current branch is up to date
    Whether there is anything to commit, push or pull
    Whether there are files staged, unstaged or untracked
    Whether there are files created, modified or deleted
command <git status>



