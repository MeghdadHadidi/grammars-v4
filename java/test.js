const antlr4 = require('antlr4/index')
const JavaLexer = require('./JavaLexer')
const JavaParser = require('./JavaParser')

var input = "your text to parse here";
var chars = new antlr4.InputStream(input);
var lexer = new JavaLexer.JavaLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new JavaParser.JavaParser(tokens);

parser.buildParseTrees = true;

// We want to properties of parser to see if we have a rule function there:
console.log(Object.keys(parser))

// this will throw an error
parser.CompilationUnit();

