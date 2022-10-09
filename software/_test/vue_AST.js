// Use node to execute the code
// Goal: Input some HTML attribute, output the AST tree
// Resource: https://blog.csdn.net/weixin_43690348/article/details/113742993

// 
function parseString(templateString) {
    // pointer
    var index = 0;
    // the rest
    var rest = '';
    // start mark: <div>
    var startRegExp = /^\<([a-z]+[1-6]?)\>/;
    // end tag  like: </sometag>  not: </sad-asd>
    var endRegExp = /^\<\/([a-z]+[1-6]?)\>/;
    // recognize text
    var wordRegExp = /^([^\<]+)\<\/([a-z]+[1-6]?)\>/;


    // prepare two stacks
    var stack1 = [];
    var stack2 = [];

    // traverse
    while(index < templateString.length - 1) {
        rest = templateString.substring(index);

        // traverse and recognize if the character in question is the starting tag
        if(startRegExp.test(rest)) {
            console.log(rest.match(startRegExp));
            let tag = rest.match(startRegExp)[1];
            console.log("Begin tag detected", tag);

            // push the begin tag into stack 1
            stack1.push(tag);
            // push an empty array into stack 2
            stack2.push([]);
        }
    }
}