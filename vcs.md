# Git rules

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Choose a workflow](#choose-a-workflow)
- [Don't change published history](#dont-change-published-history)
- [Global .gitignore](#global-gitignore)
- [Commit](#commit)
- [Branch](#branch)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Choose a workflow
Agree on a workflow with a team and stick with it.

**This rule has the priority over any of further rules.**

## Don't change published history
Don't force a `push`.

`Revert` is your choice.

```Shell
git revert -n HEAD~2..HEAD
git commit -m "Revert last 2 commits because of <mistakeDescription>"
git push origin master
```

In case of really bad mistake `git push --force-with-lease` may be an option.

**Exception**: a sensitive data were leaked (remember to perform a `garbage collection` after forcing a `push`).

## Global .gitignore
In case of joining to the existing project, it is better to exclude your IDE folders/files in a global```.gitignore``` file rather than modify local `.gitignore` for every project you are joining.

```Shell
# See how global gitnore is configured now
git config --get core.excludesfile

# In case nothing there
cd %USERPROFILE%
type NUL > .gitignore_global
git config --global core.excludesfile "%USERPROFILE%/.gitignore_global
```

## Commit
* 1 commit >= 1 finished thing.
* Test before commit.
* Write good message.

## Branch
Use branches and practice good branch hygiene (delete branches as they are merged or perform a periodic sweep).

If you delete a branch on your machine and this branch no longer required on the upstream, delete it on there too.
```Shell
git push origin --delete <branch name>
```
