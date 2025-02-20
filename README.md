# TypeScript Optional Property Access Error

This repository demonstrates a common error in TypeScript related to accessing optional properties.  The `bug.ts` file contains code that attempts to access an optional property without properly checking for its existence, which can lead to runtime errors. The solution is provided in `bugSolution.ts`.

## Problem

When working with optional properties in TypeScript, it's crucial to handle the case where the property might be undefined.  Failure to do so can result in runtime errors.

## Solution

The solution involves adding a check before accessing the optional property.  This ensures that the code only attempts to access the property if it's actually defined.