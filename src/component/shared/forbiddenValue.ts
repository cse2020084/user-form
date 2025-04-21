import { AbstractControl, ValidatorFn } from "@angular/forms";

// export function forbiddenValidator(control:AbstractControl):{[key:string]:any} | null{
//     const forbiddenName=/\badmin\b/.test(control.value);
//     return forbiddenName?{'forbiddenName':{value:control.value}}:null;
// }

export function forbiddenValidator(forbiddenWords:RegExp):ValidatorFn{
    return (control:AbstractControl):{[key:string]:any} | null=>{
            const forbiddenName=forbiddenWords.test(control.value);
            return forbiddenName?{'forbiddenName':{value:control.value}}:null;
        }
}