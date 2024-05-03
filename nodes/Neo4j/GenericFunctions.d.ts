import { IExecuteFunctions, IPollFunctions } from 'n8n-workflow';
import * as neo4j from "neo4j-driver";
export declare function buildSession(this: IPollFunctions | IExecuteFunctions): Promise<neo4j.Session>;
export declare function executeCypher(this: IPollFunctions | IExecuteFunctions, cypher: string): Promise<neo4j.Record<neo4j.RecordShape<PropertyKey, any>, PropertyKey, neo4j.RecordShape<PropertyKey, number>>[]>;
export declare function flatten(neo4jResult: any): any;
export declare function comparer(otherArray: any): (current: any) => boolean;
