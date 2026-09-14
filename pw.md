# pnpm workSpace

> The import suggestion does not prove the package is runnable.

## Import resulotion: -

> imports — It's used for internal remapping within your own package — you define aliases (always prefixed with #) that map to real files, and only your own package's code can use them.

1. Node.js parent-directory lookup:- but it creates a phantom dependency

2. For Import also, the export property in the packages.json is imp, it define **from which file to get the specific data, under what namespace** (For imports, the exports property in package.json is important. It defines which files/modules of the package are publicly accessible and under which import paths (subpaths).)
   a) exports itself doesn't necessarily define a JavaScript namespace. It defines the import path

3.

---

## Export resulotion: -

> exports — controls what external consumers (other packages/files importing your package) can access, and how. It maps subpaths to files.

1.

```txt
ABOUT package.json: -
legacy export props: -
1. main: the single entry point old Node/bundlers use when someone does require('your-package') or import x from 'your-package'. Just one file, no subpaths.
2. types: tells TypeScript where the .d.ts file for that entry point is.
Both are legacy-era, pre-Node-12 conventions. Still respected for backwards compatibility, but they're single-purpose — one entry, nothing else.


Modern: -
{
  "exports": {
    ".": "./dist/index.js",
    "./logger": "./dist/logger.js",
    "./throttle": "./dist/throttle.js"
  }
}
a) Package subpaths must start with "./"
b) without "./" only allowed: - import, require, and default


---------------------
Supports conditional exports too (import vs require, node vs browser, types):
{
    "exports": {
      ".": {
        "types": "./dist/index.d.ts",
        "import": "./dist/index.mjs",
        "require": "./dist/index.cjs"
      }
    }
  }
a) without "./" only allowed: - import, require, and default

```

--------------------------------------
## Typescript import resolution: - 
> The import suggestion does not prove the package is runnable.

1. In case of the both absolute and relative path import, typescript is checking for  "main": "dist/app.js" because it is a directory path, so ts will join the main property path from packages.json of the given absolute path , and find the package from that file
2. 

## tsx import resolution: - 
1. In case of the absolute path import: - Not allowed ('ERR_UNSUPPORTED_ESM_URL_SCHEME')
2. In case of relative path import, Node ESM(tsx) does not reliably resolve it through package.json.main; tsx tries/joins index.ts.

## Node import resolution: - 
1. In case of the absolute path import: - Not allowed ('ERR_UNSUPPORTED_ESM_URL_SCHEME')
2. In case of relative path import: - 
a) relative dir import:  - ERR_UNSUPPORTED_DIR_IMPORT

3. 
====================================

> One Git repository → multiple related packages/apps → one dependency management system.

1. Normally without **Workspace**, frontend and backend are completely separate pnpm projects.
2. Root dependency ≠ workspace dependency
3. What you tested — app1/app2 using mongoose from root node_modules/ — is just Node.js module resolution walking up directories (app1/node_modules -> pw/node_modules).
   1. So now: 1 root project + 2 separate projects in subfolders, not 1 workspace.

===================================================
===================================================

> pnpm workspaces manage packages and dependencies,

### Use a workspace when you want app1, app2, and utils treated as independent but related `packages—with explicit dependencies, local package linking, one installation, one lockfile, filtering, and coordinated scripts.`

## [without pnpm worksace]v Failer that will if we only use relative path(harder import): -

1. In relative path import, TypeScript/Node just walks the filesystem (so if we move the project, relative path will break the import)
2. changes outside the configured app1 root directory may not trigger automatic deployments. (means anything changed in the shared packages will not trigger the deployment, even for the project using that data)
3. we have to do cd, every time we want to run any cmd in specific project (like for strarting project, )
4. 

## [with pnpm workspace] When import with package.json name(easier import): -

> When we move write the dependencies, in package.json and workspace.ymal, the import will not work, because obviously in nodejs, the packages has to be in node_module, so thatswhy `pnpm install` will symlink that package in the respective project node_modules

a) pnpm add -w "@pw/types@workspace:*"
b) 

1. Even, If we move the project to any nest dir too, the import will still work
2. changes in the shared package will trigger the deployment for the projects consumeing it
3. "pnpm --filter app1 dev" or "pnpm --filter "./apps/app1" dev" normally searches among the packages registered in the current pnpm workspace. "pnpm -r run build/dev" start all project togather, 
4. 

Extra advantage: - 
1. [DONE] pnpm -r run build: - pnpm discovers all of projects through pnpm-workspace.yaml, adn runs teh build cmd there
2. install packages of all the projects sperately without pnpm, with pnpm just **pnpm install**

Extra information: - 
1. Technically you can link @pw/types at the workspace root: pnpm add -w "@pw/types@workspace:*" // this will work for the project within these root dir
2. even if it is a shared package inside your packages/ directory, the consuming project should still declare it as a dependency. all project should describe whatever they are using because it will give the clear understanding of the projects dependencies (This is actually one of the main advantages of a monorepo: the relationships between your projects are explicit and easy to manage.)
3. 

-------------------------------

## What is use of mono-repo framework, if we have pnpm workspace:-

1. A workspace manages dependency relationships and commands. It does not automatically provide building, watching, or hot reloading.

===================================================
DOUBT: - 
1. sperate lock file for each project (Separate dependency management” means that without a pnpm workspace, each project independently manages its dependencies and lockfile.)
2. 


=================================================
# MONO-repo framework usages: - 
1. If types hasn't changed, Turbo can reuse its cached build instead of rebuilding everything.
2. 