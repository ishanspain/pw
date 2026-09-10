# pnpm workSpace

> One Git repository → multiple related packages/apps → one dependency management system.

1. Normally without **Workspace**, frontend and backend are completely separate pnpm projects.
2. Root dependency ≠ workspace dependency
3. What you tested — app1/app2 using mongoose from root node_modules/ — is just Node.js module resolution walking up directories (app1/node_modules -> pw/node_modules). 
    1. So now: 1 root project + 2 separate projects in subfolders, not 1 workspace.

    <!-- ======================================= -->
## Failer that will if we only use relative path: - 
1. In relative path import, TypeScript/Node just walks the filesystem
2. if we move the project, relative path will break the import

## When import with package.json name: - 
1. If we move the project to any nest dir too, the import will still work
2. 

----------------------------------------------------
===================================================
That import works despite no workspace — because it's just a relative file path, not a package.

import { dateNow } from "../packages/utils/date":

TypeScript/Node just walks the filesystem. No package.json, no pnpm-workspace.yaml, no install needed.
But: no name, no version, breaks if you move app1/, breaks on build/publish, app2 does ../../ differently, no transitive deps (if date.ts needs dayjs, who installs it?), no pnpm --filter to build/test it.
Workspace use is to replace that with a real package:

packages/utils/package.json -> { "name": "@pw/utils" }
app1/package.json -> { "dependencies": { "@pw/utils": "workspace:*" } }
app1/app1.ts -> import { dateNow } from "@pw/utils"
Same code, but now:

pnpm symlinks it, versioned, explicit dependency.
app1 and app2 import identically, move folders freely.
pnpm install at root installs all, pnpm --filter @pw/utils works.
Relative import = hack that works for 2 folders. Workspace = package boundary that scales.
===================================================
    