// Import Parse minified version
import Parse from 'parse/dist/parse.min.js';

// Your Parse initialization configuration goes here
function Conexao(){
const PARSE_APPLICATION_ID = 'WQDNvzfWuRKYh19Ces3SnCaC9MCiTQNA4AMLS2C1';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'vDycCKgpk1h1be7OdHSK2fq0WtfrFTgFqp1BIDsT';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;
}

export default Conexao