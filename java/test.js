const fs = require('fs')
// const sourcePath= "./examples/AllInOne7.java"
const sourcePath= "./examples/AllInOne8.java"
// const sourcePath= "./examples/ManyStringsConcat.java"

const input = fs.readFileSync(sourcePath, 'utf8')
const antlr4 = require('antlr4/index')
const JavaLexer = require('./JavaLexer')
const JavaParser = require('./JavaParser')

// var input = `
// public class Main {
//     public static void main(String[] args) {
//         System.out.println"Hello, World!");
//     }
// }
// `;;
var chars = new antlr4.InputStream(input);
var lexer = new JavaLexer.JavaLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new JavaParser.JavaParser(tokens);

parser.buildParseTrees = true;

parser.compilationUnit();

