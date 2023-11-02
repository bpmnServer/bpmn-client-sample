"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bpmn_client_1 = require("bpmn-client");
console.log("Testing BPMNClient");
const dotenv = require('dotenv');
const res = dotenv.config();
console.log("Testing BPMNClient");
test();
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        //const client = new BPMNClient('localhost', 3000,12345);
        const client = new bpmn_client_1.BPMNClient(process.env.HOST, process.env.PORT, process.env.API_KEY);
        var instance = yield client.engine.start("Buy Used Car", {});
        console.log("instance.id", instance.id, instance.name, instance.status);
        var insts = yield client.datastore.findInstances({ 'status': 'running' });
        insts.forEach(inst => {
            console.log('id==>' + inst.id, inst.name, 'status==>', inst.status);
        });
        var items = yield client.datastore.findItems({ query: { "items.elementId": "task_Buy" } });
        items.forEach(item => {
            console.log('item: id==>' + item.id, item.name, 'status==>', item.status);
        });
    });
}
