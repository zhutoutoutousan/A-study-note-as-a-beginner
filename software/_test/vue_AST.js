// Use node to execute the code
// Goal: Input some HTML attribute, output the AST tree
// Resource: https://blog.csdn.net/weixin_43690348/article/details/113742993


function parseString(templateString) {
    // pointer
    var index = 0;
    // the rest
    var rest = '';
    // start mark
    var startRegExp = /^\<([a-z]+[1-6]?)\>/;
    // end tag
    var endRegExp = /^\<\/([a-z]+[1-6]?)\>/;
    // recognize text
}