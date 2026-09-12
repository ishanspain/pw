# pnpm workSpace

## Import resulotion: - 
> imports —  It's used for internal remapping within your own package — you define aliases (always prefixed with #) that map to real files, and only your own package's code can use them.
1. Node.js parent-directory lookup:- but it creates a phantom dependency

2. For Import also, the export property in the packages.json is imp, it define **from which file to get the specific data, under what namespace**

-------------------------------
## Export resulotion: - 
> exports — controls what external consumers (other packages/files importing your package) can access, and how. It maps subpaths to files.
1. 

```txt
ABOUT package.json: - 
legacy export props: - 
1. main
2. type



```
====================================


> One Git repository → multiple related packages/apps → one dependency management system.

1. Normally without **Workspace**, frontend and backend are completely separate pnpm projects.
2. Root dependency ≠ workspace dependency
3. What you tested — app1/app2 using mongoose from root node_modules/ — is just Node.js module resolution walking up directories (app1/node_modules -> pw/node_modules). 
    1. So now: 1 root project + 2 separate projects in subfolders, not 1 workspace.

===============================================================

> pnpm workspaces manage packages and dependencies,

### Use a workspace when you want app1, app2, and utils treated as independent but related `packages—with explicit dependencies, local package linking, one installation, one lockfile, filtering, and coordinated scripts.`

## Failer that will if we only use relative path(harder import): - 
1. In relative path import, TypeScript/Node just walks the filesystem (so if we move the project, relative path will break the import)
2. changes outside the configured app1 root directory may not trigger automatic deployments. (means anything changed in the shared packages will not trigger the deployment, even for the project using that data)
3. 

## When import with package.json name(easier import): - 
1. Even, If we move the project to any nest dir too, the import will still work
2. changes in the shared package will trigger the deployment for the projects consumeing it
3. 

----------------------------------------------------
===================================================
Doubt: -
1. sperate lock file for each project
2. sperate dependencies management (without pw)
3. Install each project separately (without pw)
4. No recursive/filter commands (without pw)
5. 