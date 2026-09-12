# pnpm workSpace

## Import resulotion: - 
1. Node.js parent-directory lookup:- but it creates a phantom dependency

2. 


> One Git repository → multiple related packages/apps → one dependency management system.

1. Normally without **Workspace**, frontend and backend are completely separate pnpm projects.
2. Root dependency ≠ workspace dependency
3. What you tested — app1/app2 using mongoose from root node_modules/ — is just Node.js module resolution walking up directories (app1/node_modules -> pw/node_modules). 
    1. So now: 1 root project + 2 separate projects in subfolders, not 1 workspace.

    <!-- ======================================= -->

> pnpm workspaces manage packages and dependencies,

### Use a workspace when you want app1, app2, and utils treated as independent but related `packages—with explicit dependencies, local package linking, one installation, one lockfile, filtering, and coordinated scripts.`

## Failer that will if we only use relative path: - 
1. In relative path import, TypeScript/Node just walks the filesystem
2. if we move the project, relative path will break the import
3. Render’s UI says changes outside the configured app1 root directory may not trigger automatic deployments. (means anything changed in the shared packages will not trigger the deployment, on the project using that )
4. 

## When import with package.json name: - 
1. Even, If we move the project to any nest dir too, the import will still work
2. 

----------------------------------------------------
===================================================