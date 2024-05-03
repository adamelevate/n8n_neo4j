"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Neo4j = void 0;
const GenericFunctions_1 = require("./GenericFunctions");
class Neo4j {
    constructor() {
        this.description = {
            displayName: 'Neo4j',
            name: 'neo4j',
            group: ['transform'],
            version: 1,
            description: 'Excecute cypher query against a neo4j graph database.',
            defaults: {
                name: 'Neo4j',
            },
            inputs: ['main'],
            outputs: ['main'],
            credentials: [
                {
                    name: 'neo4j-Api',
                    required: true
                }
            ],
            properties: [
                {
                    displayName: 'Cypher Query',
                    name: 'cypher',
                    type: 'string',
                    default: 'MATCH (n) RETURN n.id as Id, n.name as Name, n.content as Content LIMIT 10',
                    placeholder: 'Enter cypher code',
                    description: 'The cypher query to excecute',
                }
            ]
        };
    }
    async execute() {
        const cypher = this.getNodeParameter('cypher', 0);
        var result = (0, GenericFunctions_1.flatten)(await GenericFunctions_1.executeCypher.call(this, cypher));
        let returnItems = [];
        if (Array.isArray(result) && result.length !== 0) {
            returnItems = this.helpers.returnJsonArray(result);
        }
        else {
            returnItems = this.helpers.returnJsonArray([{}]);
        }
        return this.prepareOutputData(returnItems);
    }
}
exports.Neo4j = Neo4j;
//# sourceMappingURL=Neo4j.node.js.map