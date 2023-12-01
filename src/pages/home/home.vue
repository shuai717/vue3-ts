<template>
    <div class="homeWrap">
        home {{obj.a}}
        <el-button @click="addObj">点我</el-button>
    </div>
</template>
<script setup lang="ts">
    import './home.less'
    import {ref,watch,customRef,triggerRef} from 'vue'
    const addObj=()=>{
        // let num=++obj.value.a
        // obj.value={a : num}
        obj.value.a++
        triggerRef(obj)
    }
    const myRef =(value:any)=>{
        return customRef((track,trigger)=>{
            return {
                get(){
                    track()
                    return value
                },
                set(newVlue){
                    // console.log(newVlue,'newVlue')
                    value=newVlue
                    trigger()
                }
            }
        })
    }
    // let obj =myRef(1)
    // watch(obj.value,(newVlue,oldValue)=>{
    //     console.log(newVlue,oldValue,'newVlue,oldValue')
    // })
    let obj =myRef({a:1})
    // console.log(obj,'obj')
    // obj.value.a++

    enum typeValue {
        a,
        b=7,
        c
    }
    console.log(typeValue.a,typeValue[7],typeValue[8],'enumenumenumenum')

    class People {
        static a=1
        readonly b =2
        private c=3
        protected d=4
        name=''
        age=1
        #age=0
        constructor(name:string,age:number){
            this.name=name
            this.#age = 9
        }
    }
    class Student extends People{
        constructor(name:string,age:number){
            super(name,age)
        }

        eat(){
            console.log(this.d) 
        }
    }

    let p1 =new People('人',21)
    let s1 =new Student('学生',12)
    s1.eat()
    console.log(p1,s1,'p1,s1')
    console.dir(People,Student)
</script>