# git remote -v 
git remote -v is a Git command used to see which remote repositories are connected to your local Git project.
Exammple.
git remote -v
Output
origin  https://github.com/adarshkr17/tic-tac-toe-game.git (fetch)
origin  https://github.com/adarshkr17/tic-tac-toe-game.git (push)


Local Project
      ↕
Origin
      ↕
GitHub


Meaning
Part	Meaning
origin	Default name of the remote repository
fetch	URL used when downloading changes (git pull, git fetch)
push	URL used when uploading changes (git push)


-----------


Common Related Commands

Check remotes:

git remote -v

Add a remote:

git remote add origin https://github.com/username/repo.git

Change remote URL:

git remote set-url origin https://github.com/username/new-repo.git  ---> change an existing remote.

Remove remote:

git remote remove origin

Placement Interview Point 🎤

Q: What does git remote -v do?

Answer: It displays all remote repositories linked to the local Git repository along with their fetch and push URLs. This helps verify where code is being pulled from and pushed to.

| Command     | Direction      | Purpose                                                                           |
| ----------- | -------------- | --------------------------------------------------------------------------------- |
| `git fetch` | Remote ➜ Local | Downloads latest changes from GitHub but does **not** merge them into your branch |
| `git push`  | Local ➜ Remote | Uploads your local commits to GitHub                                              |


Interview Question 🎤

Q: Difference between git fetch and git pull?

git fetch → Downloads changes only.
git pull → Downloads changes and merges them into your current branch.
git pull = git fetch + git merge





When working with a team:

git fetch origin
git pull origin main
# make changes
git add .
git commit -m "Updated UI"
git push origin main


Memory Trick 🧠

git remote add → Create a new remote.
git remote set-url → Change an existing remote.
git remote remove → Delete a remote.



------------------



//---------------------------------------------------------------------------------

| Symbol | Meaning                  |
| ------ | ------------------------ |
| U      | Untracked (new file)     |
| M      | Modified                 |
| D      | Deleted                  |
| A      | Added                    |
| ↓      | Pull changes from GitHub |
| ↑      | Push changes to GitHub   |



* git satus ---> used to check the current state of your Git repository

if the output shows nothing to commit, working tree clean

🎯 What does "working tree clean" mean?

It means:

✅ No files have been modified

✅ No new files are waiting to be added

✅ No files are waiting to be committed

✅ Local files match the latest commit


clean working tree ---> last commit = current files.
Dirty Working Tree --->  Last Commit ≠ Current Files.


---------



🎯 Git Workflow

Code
 ↓
Add
 ↓
Commit
 ↓
Push
 ↓
GitHub


🎯 What is a Git Commit?

A commit is a saved snapshot (checkpoint) of your project at a specific point in time




Why Do We Need Commits?

Without commits:

Version 1
   ↓
Version 2
   ↓
Version 3

Old versions lost ❌

With commits:

Commit A
   ↓
Commit B
   ↓
Commit C

History preserved ✅


-----------


# push and pull

🎯 Push

Push uploads code to GitHub.

Command:

git push -u origin main

Meaning:

Local Code
      ↓
GitHub
🎯 Pull

Pull downloads code from GitHub.

Command:

git pull origin main

Meaning:

GitHub
      ↓
Local Laptop



* stage ----> select files for commit









