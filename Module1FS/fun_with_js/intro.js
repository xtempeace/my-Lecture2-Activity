let fs=require("fs");
let path=require("path");
let srcFilePath="C:\\Users\\Singh\\Desktop\\DevPP_12\\Module1FS\\fun_with_js\\webdev\\js\\m2\\content.md";
let destDirPath="C:\\Users\\Singh\\Desktop\\DevPP_12\\Module1FS\\fun_with_js";
let fileToCopiedFileName=path.basename(srcFilePath);
console.log(fileToCopiedFileName);
let destFilePath=path.join(destDirPath,fileToCopiedFileName);
fs.copyFileSync(srcFilePath,destFilePath);
console.log("copied");
