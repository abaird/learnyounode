var args = process.argv;

var sum = 0;
sum = args.slice(2).reduce(function(combine, init){
    return Number(combine) + Number(init);
});
console.log(sum);