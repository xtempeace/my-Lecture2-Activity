function processData(input) 
{
    let inputarr=input.split("\n");
    let r=Number(inputarr[0]);
    if(r<0)
        {
            r=r*(-1);
        }
    let num=Number(inputarr[1]);
    let temp=num,count=0;
    while(temp!=0)
        {
            temp=temp%10;
            count++;
        }
    let arr=[54];temp=num;let po=Math.pow(10,count);
    while(temp!=0)
        {
            arr.push(temp/po);
            temp=temp%po;
            po=po/10;
        }
    let i=0,j=count-1;
    while(i<=j)
    {
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;j--;
        
    }
    i=0,j=r-1;
    while(i<=j)
    {
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;j--;
        
    }
    i=r,j=count-1;
    while(i<=j)
    {
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;j--;
        
    }   
    for(i=0;i<count;i++)
    {
        console.log(arr[i]);
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
