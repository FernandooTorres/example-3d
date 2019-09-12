import { _decorator, Component, Node, SphereColliderComponent, RigidBodyComponent, math, Vec3, systemEvent, SystemEvent } from "cc";
const { ccclass, property } = _decorator;
const v3 = new math.Vec3();
v3.x=0; v3.y=0; v3.z=-50;

@ccclass("Ballbody")
export class Ballbody extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    start () {
        //const v = this.getComponent(RigidBodyComponent);
        //v.applyImpulse(v3);
    }

    /*private _addEvents() {
        systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onMouseDown, this);
    }

    private _removeEvents() {
        systemEvent.off(SystemEvent.EventType.KEY_DOWN, this.onMouseDown, this);
    }

    onMouseDown(){
        const v = this.getComponent(RigidBodyComponent);
        v.applyImpulse(v3);
    }*/

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
