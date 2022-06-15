/** 

Before you write custom types, 
you need to tell the transpiler about them. 
To do this you should edit the tsconfig.json file, 
and add the typeRoots property under the 
compilerOptions property.

    {
        "compilerOptions": {
            //...other properties
            "typeRoots": [
            "src/customTypings",
            "node_modules/@types"
            ]
        }
    }

When the property is excluded, TypeScript is automatically searching for types in the 

        node_modules/@types

folder of your project. 
In this case, we’re going to make a new folder inside our 
        src
 
folder called 
        @types

to hold all our definition files, and then point TypeScript to it.

Inside of that folder you’ll be adding definition files, which by convention have a file extension of .d.ts. 
While I like to name them with the name of the library or component I’m extending, 
the name does not actually matter, only the contents do.

*/

declare module "*.pdf";