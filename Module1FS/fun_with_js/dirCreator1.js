let fs=require("fs");
let path=require("path");

let inputArr=process.argv.slice(2);
let cwd=process.cwd();
console.log(cwd);
let mainDirectory=inputArr[0];
let mainDirectoryPath=path.join(cwd,mainDirectory);
let isExist=fs.existsSync(mainDirectoryPath);
if(isExist)
{
  console.log(mainDirectory," is already exist.");
}
else
{
 console.log(mainDirectory," created");
  fs.mkdirSync(mainDirectoryPath);
  for(let i=1;i<inputArr.length;i++)
  {
    console.log(inputArr[i]," is created");
    let temppath=path.join(mainDirectoryPath,inputArr[i]);
    fs.mkdirSync(temppath);
    for(let j=1;j<=5;j++)
    {
      console.log("m"+j+" created");
      let temp1path=path.join(temppath,"m"+j);
      fs.mkdirSync(temp1path)
      let temp2path=path.join(temp1path,"content.md");
      fs.writeFileSync(temp2path,"Hello");
    }

  }
}


