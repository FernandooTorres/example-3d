import { _decorator, Component, Node, Prefab, math, ColliderComponent, instantiate, Quat, Vec3, geometry, systemEvent, SystemEvent, RigidBodyComponent, EventMouse, EventInfo, CameraComponent, SystemEventType, Touch } from "cc";
const { ccclass, property } = _decorator;
const _tmpVec3 = new math.Vec3;
_tmpVec3.y = 0.5;
const _v3_0 = new Vec3();
const _quat_0 = new Quat();
const _ray = new geometry.ray();
const v3 = new math.Vec3();
v3.x = 0; v3.y = 0; v3.z = -50;

@ccclass("Instantiate")
export class Instantiate extends Component {
    @property({ type: Prefab })
    public boxPrefab: Prefab = null;

    @property
    public boxAmount: number = 18;

    @property
    public boxAmount1: number = 10;

    @property({ type: CameraComponent })
    public camera: CameraComponent = null;

    start() {
        for (let i = this.boxAmount; i--;) {
            const boxNode1 = instantiate(this.boxPrefab) as Node;
            boxNode1.setParent(this.node as Node);
            boxNode1.active = true;
            let t1 = i / this.boxAmount * 4;
            _tmpVec3.x = -3;
            _tmpVec3.z = t1 - 2;
            boxNode1.setWorldPosition(_tmpVec3.x, _tmpVec3.y, _tmpVec3.z);
            const boxNode2 = instantiate(this.boxPrefab) as Node;
            boxNode2.setParent(this.node as Node);
            boxNode2.active = true;
            let t2 = i / this.boxAmount * 4;
            _tmpVec3.x = 3;
            _tmpVec3.z = t2 - 2;
            boxNode2.setWorldPosition(_tmpVec3.x, _tmpVec3.y, _tmpVec3.z);
        }
        for (let i = this.boxAmount1; (i--) - 1;) {
            const boxNode2 = instantiate(this.boxPrefab) as Node;
            boxNode2.setParent(this.node as Node);
            boxNode2.active = true;
            let r1 = i / this.boxAmount1 * 3.1415926;
            _tmpVec3.x = Math.cos(r1) * 3;
            _tmpVec3.z = -2.3 - Math.sin(r1);
            boxNode2.setWorldPosition(_tmpVec3.x, _tmpVec3.y, _tmpVec3.z);
            boxNode2.setWorldRotationFromEuler(0, r1 * 180 / 3.1415926, 0);
        }
        for (let i = this.boxAmount1; (i--) - 4;) {
            const boxNode3 = instantiate(this.boxPrefab) as Node;
            boxNode3.setParent(this.node as Node);
            boxNode3.active = true;
            let r2 = i / this.boxAmount1 * 3.1415926;
            _tmpVec3.x = -Math.cos(r2) * 3;
            _tmpVec3.z = 1.8 + Math.sin(r2);
            boxNode3.setWorldPosition(_tmpVec3.x, _tmpVec3.y, _tmpVec3.z);
            boxNode3.setWorldRotationFromEuler(0, r2 * 180 / 3.1415926, 0);
        }
        _v3_0.x = -3;
        _v3_0.y = 0.8;
        _v3_0.z = 3.572;
        //const v = this.node.parent.children[4].getComponent(RigidBodyComponent);
        //v.applyImpulse(v3);
    }

    onDestroy() {
        this._removeEvents();
    }

    onEnable() {
        this._addEvents();
    }

    onDisable() {
        this._removeEvents();
    }

    private _addEvents() {
        systemEvent.on(SystemEventType.TOUCH_START, this.onMouseDown, this);
    }

    private _removeEvents() {
        systemEvent.off(SystemEventType.TOUCH_START, this.onMouseDown, this);
    }

    onMouseDown(event:Touch) {
        console.log(event);

        this.camera.screenPointToRay(event._point.x, event._point.y, _ray);

        // event.

        //const v = this.node.parent.children[4].getComponent(RigidBodyComponent);
        //v.applyImpulse(v3);
    }

    /*update (deltaTime: number) {
        if(this.node.children.length>0){
           _v3_0.set(-1, 1, 0);
           _v3_0.normalize();
           Quat.rotateAround(_quat_0, this.node.children[0].rotation, _v3_0, Math.PI * 0.01);
           // this.node.setRotation(_quat_0);
           for(let i = 0; i < this.node.children.length; i++){
              //this.node.children[i].active = true;
                this.node.children[i].setRotation(_quat_0);
            }
        }
    }*/
    /*reset(){
        for(let i = 0; i < this.node.children.length; i++){
            this.node.children[i].active=true;
        }
        this.node.parent.children[1].setWorldPosition(0,3.154,0);
    }*/
    /*for (let i = 0; i < this.node.children.length; i++) {
        this.node.children[i].active = true;
    }*/
}
    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }



