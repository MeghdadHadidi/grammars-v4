const fs = require('fs')
const antlr4 = require('antlr4/index')
const Python3Lexer = require('./Python3Lexer')
const Python3Parser = require('./Python3Parser')

const sourcePath= "./examples/test_grammar.py"
const input = fs.readFileSync(sourcePath, 'utf8')
// var input = `
// for count in counter.most_common(50):
//     print(str(count[1]) + "	" + str(count[0]))
// `;;
var chars = new antlr4.InputStream(input);
var lexer = new Python3Lexer.Python3Lexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new Python3Parser.Python3Parser(tokens);

parser.buildParseTrees = true;

// We want to properties of parser to see if we have a rule function there:

parser.file_input();

