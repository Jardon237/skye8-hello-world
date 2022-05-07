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

- 4. Git add
When we create, modify or delete a file, these changes will happen in our local and won't be included in the next commit (unless we change the configurations).
We need to use the git add command to include the changes of a file(s) into our next commit. 

    To add a single file:

    git add <file>

    To add everything at once:

    git add -A

- 5. Git commit
This is maybe the most-used command of Git. Once we reach a certain point in development, we want to save our changes (maybe after a specific task or issue). Git commit is like setting a checkpoint in the development process which you can go back to later if needed.
We also need to write a short message to explain what we have developed or changed in the source code.
    git commit -m "commit message"

- 6. Git push
After committing your changes, the next thing you want to do is send your changes to the remote server. Git push uploads your commits to the remote repository.

    git push <remote> <branch-name>

However, if your branch is newly created, then you also need to upload the branch with the following command:

    git push --set-upstream <remote> <name-of-your-branch>

    or

    git push -u origin  <branch_name>

- 7. Git pull
The git pull command is used to get updates from the remote repo. This command is a combination of git fetch and git merge which means that, when we use git pull, it gets the updates from remote repository (git fetch) and immediately applies the latest changes in your local (git merge).

git pull <remote>

- 8. Git revert
Sometimes we need to undo the changes that we've made. There are various ways to undo our changes locally or remotely (depends on what we need), but we must carefully use these commands to avoid unwanted deletions.

- 9. Git merge
When you've completed development in your branch and everything works fine, the final step is merging the branch with the parent branch (dev or master). This is done with the git merge command.
Git merge basically integrates your feature branch with all of its commits back to the dev (or master) branch. It's important to remember that you first need to be on the specific branch that you want to merge with your feature branch.

    when you want to merge your feature branch into the dev branch, First you should switch to the dev branch:

    git checkout dev

    Before merging, you should update your local dev branch:

    git fetch

These Are some basic git commands
compiled by Jardon237
