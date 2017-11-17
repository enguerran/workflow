# Git Workflow

This repository aims to be a sample repository to expose a good workflow for software edition.

## Main branch

When contributing to an existing project, developers just clone the project, then commit on the default branch.

The default branch within a git project is `master`.

Thus a new developer do:

1. clone the repository
1. build/run the project
1. modify the source code
1. commit modifications

<Insérer un graph ascii>

So, it is important that the main branch stay `master`, for convenience and agreement.

## Prepare a release

A release does not have to be a branch as a release is fixed in the time.

A release should be a git tag, ie. a specific commit.

Build source code should not change the result.
This way tagging a build or tagging the source code should be two of a kind.

Prepare a release is a particular workflow:

1. choose which commits should be added
1. create a prepare-release branch
1. add hotfix or others needed commits (upgrade readme or version)
1. once validated, fix the release by creating a tag

Then, within github, we could create a release including:

- source-code-tag.tar.gz
- build-web.tar.gz
- build-mobile.apk.tar.gz
- etc.

## Hotfix a release

It may appear you need to hotfix some code that runs on production.

At the time, the developer checkout the tag and create a hotfix commit.

This commit is merged or rebased then tagged to be the new fixed release.

This commit is also merged or rebased into the master branch to persist the fix.

## Git Workflow

### Create the project and first empty release

```
git init
git commit --allow-empty -m 'initial commit'
git tag 0.0.1
```

### Add some feature

```
git checkout master
git checkout -b feat1
git commit -m 'feat: add a cool feature'
git commit -m 'fix: remove something old'
git commit -m 'feat: add something to the cool feature'
git checkout master
git merge feat1 --no-ff -m 'feat: A brand new feature'
```

### Create a release

```
git checkout master
git checkout -b rc-1.0.0
git commit -m 'release: change version number'
git commit -m 'fix: oups'
git tag 1.0.0
git checkout master
git rebase 1.0.0
```

_Or we can create a merge commit `git merge 1.0.0 --no-ff`._

### Hotfix a release

```
git checkout 1.0.0
git commit -m 'hotfix'
git tag 1.0.1
git checkout master
git merge 1.0.1 --no-ff -m 'fix: apply production hotfix'
```

_Or we could rebase without creating a merge commit `git rebase 1.0.1`._
