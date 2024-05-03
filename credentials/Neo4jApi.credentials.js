"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Neo4jApi = void 0;
class Neo4jApi {
    constructor() {
        this.name = 'neo4j-Api';
        this.displayName = 'Neo4j API';
        this.properties = [
            {
                displayName: 'Username',
                name: 'username',
                type: 'string',
                default: 'neo4j',
            },
            {
                displayName: 'Password',
                name: 'password',
                type: 'string',
                typeOptions: { password: true },
                default: '',
            },
            {
                displayName: 'Database',
                name: 'database',
                type: 'string',
                default: 'neo4j',
            },
            {
                displayName: 'Url',
                name: 'url',
                type: 'string',
                default: 'http://localhost:7474',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                auth: {
                    username: '={{ $credentials.username }}',
                    password: '={{ $credentials.password }}',
                },
                qs: {
                    n8n: 'rocks',
                },
            },
        };
    }
}
exports.Neo4jApi = Neo4jApi;
//# sourceMappingURL=Neo4jApi.credentials.js.map