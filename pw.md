# pnpm workSpace

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

```

====================================

> One Git repository → multiple related packages/apps → one dependency management system.

1. Normally without **Workspace**, frontend and backend are completely separate pnpm projects.
2. Root dependency ≠ workspace dependency
3. What you tested — app1/app2 using mongoose from root node_modules/ — is just Node.js module resolution walking up directories (app1/node_modules -> pw/node_modules).
   1. So now: 1 root project + 2 separate projects in subfolders, not 1 workspace.

===============================================================
===============================================================

> pnpm workspaces manage packages and dependencies,

### Use a workspace when you want app1, app2, and utils treated as independent but related `packages—with explicit dependencies, local package linking, one installation, one lockfile, filtering, and coordinated scripts.`

## [without pnpm worksace]v Failer that will if we only use relative path(harder import): -

1. In relative path import, TypeScript/Node just walks the filesystem (so if we move the project, relative path will break the import)
2. changes outside the configured app1 root directory may not trigger automatic deployments. (means anything changed in the shared packages will not trigger the deployment, even for the project using that data)
3. we have to do cd, every time we want to run any cmd in specific project
4. 

## [with pnpm workspace] When import with package.json name(easier import): -

1. Even, If we move the project to any nest dir too, the import will still work
2. changes in the shared package will trigger the deployment for the projects consumeing it
3. "pnpm --filter app1 dev" or "pnpm --filter "./apps/app1" dev" normally searches among the packages registered in the current pnpm workspace.
4. 

Extra advantage: - 
1. pnpm -r run build: - pnpm discovers all of projects through pnpm-workspace.yaml, adn runs teh build cmd there
2. 

---

## What is use of mono-repo framework, if we have pnpm workspace:-

1. A workspace manages dependency relationships and commands. It does not automatically provide building, watching, or hot reloading.

===================================================
Doubt: - 0. 

1. sperate lock file for each project
2. sperate dependencies management (without pw)
3. Install each project separately (without pw)
5.
