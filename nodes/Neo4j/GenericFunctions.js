"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparer = exports.flatten = exports.executeCypher = exports.buildSession = void 0;
const neo4j = __importStar(require("neo4j-driver"));
async function buildSession() {
    const credentialsData = this.getCredentials('neo4j-Api');
    const credentials = await credentialsData;
    var driver = neo4j.driver(credentials.url.toString(), neo4j.auth.basic(credentials.username.toString(), credentials.password.toString()));
    await driver.verifyConnectivity();
    return driver.session();
}
exports.buildSession = buildSession;
async function executeCypher(cypher) {
    var session = await buildSession.call(this);
    const result = await session.run(cypher);
    return result.records.map(record => record);
}
exports.executeCypher = executeCypher;
function flatten(neo4jResult) {
    return neo4jResult.map((record) => record.toObject());
}
exports.flatten = flatten;
function comparer(otherArray) {
    return function (current) {
        return otherArray.filter(function (other) {
            return JSON.stringify(current) == JSON.stringify(other);
        }).length == 0;
    };
}
exports.comparer = comparer;
//# sourceMappingURL=GenericFunctions.js.map